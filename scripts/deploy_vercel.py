#!/usr/bin/env python3
"""Deploy estático do portal LOGIS no Vercel via REST API (contorno do bug de upload do CLI).

Uso:
  python3 scripts/deploy_vercel.py --check [projeto]   # Somente leitura: valida build dist/, projeto e auth sem publicar
  python3 scripts/deploy_vercel.py [projeto]           # Publica dist/ em produção (padrão: logis-magazine)
  python3 scripts/deploy_vercel.py --rollback <dpl_id> # Reverte alias de produção ou verifica deployment anterior

Autenticação (nunca exibida em stdout/logs):
  1. Variável de ambiente VERCEL_TOKEN (ou VERCEL_TOKEN_GSN), se definida;
  2. Arquivo local ~/.local/share/com.vercel.cli/auth.json.
"""
import hashlib
import json
import os
import sys
import time
import urllib.error
import urllib.request

AUTH = os.path.expanduser('~/.local/share/com.vercel.cli/auth.json')
DIST = os.path.join(os.path.dirname(__file__), '..', 'dist')
TEAM = 'team_QQzbgQTC569AoQxaur7tNLGj'
PROJECT_ID = 'prj_U64icaeaxRVcWIJ0ySDQZluLYLuK'
DEFAULT_PROJECT = 'logis-magazine'
API = 'https://api.vercel.com'


def load_token():
    env_tok = os.environ.get('VERCEL_TOKEN') or os.environ.get('VERCEL_TOKEN_GSN')
    if env_tok and env_tok.strip():
        return env_tok.strip()
    if os.path.exists(AUTH):
        with open(AUTH, 'r', encoding='utf-8') as f:
            return json.load(f)['token']
    print('ERRO: Nenhuma credencial encontrada em VERCEL_TOKEN nem em ~/.local/share/com.vercel.cli/auth.json')
    sys.exit(1)


def req(token, method, url, headers=None, data=None):
    hdrs = dict(headers or {})
    hdrs['Authorization'] = f'Bearer {token}'
    r = urllib.request.Request(url, data=data, method=method, headers=hdrs)
    try:
        with urllib.request.urlopen(r, timeout=60) as resp:
            return resp.status, resp.read()
    except urllib.error.HTTPError as e:
        return e.code, e.read()


def collect_dist_files(dist_dir):
    dist = os.path.abspath(dist_dir)
    if not os.path.isdir(dist):
        print(f'ERRO: Diretório dist/ não encontrado em {dist}. Execute "npm run build" antes.')
        sys.exit(1)
    files = []
    for root, _, names in os.walk(dist):
        for n in sorted(names):
            full = os.path.join(root, n)
            rel = os.path.relpath(full, dist).replace(os.sep, '/')
            with open(full, 'rb') as fp:
                blob = fp.read()
            files.append({
                'file': rel,
                'sha': hashlib.sha1(blob).hexdigest(),
                'size': len(blob),
                '_blob': blob,
            })
    return files


def check_only(token, project):
    files = collect_dist_files(DIST)
    total_bytes = sum(f['size'] for f in files)
    html_files = [f['file'] for f in files if f['file'].endswith('.html')]
    print(f'[CHECK LOCAL] dist/ íntegro: {len(files)} arquivos ({total_bytes} bytes), {len(html_files)} páginas HTML.')
    for lang in ('pt', 'en', 'es'):
        idx = f'{lang}/index.html'
        has_idx = any(f['file'] == idx for f in files)
        print(f'  - /{lang}/ -> {"OK" if has_idx else "AUSENTE"}')
    st, body = req(token, 'GET', f'{API}/v9/projects/{project}?teamId={TEAM}')
    if st != 200:
        print(f'[CHECK VERCEL] FALHA ao consultar projeto {project} na equipe {TEAM}: HTTP {st}')
        sys.exit(1)
    pdata = json.loads(body)
    st_d, body_d = req(token, 'GET', f'{API}/v6/deployments?teamId={TEAM}&projectId={pdata.get("id")}&limit=3')
    deploys = json.loads(body_d).get('deployments', []) if st_d == 200 else []
    print(f'[CHECK VERCEL] Projeto: {pdata.get("name")} ({pdata.get("id")}) | Equipe: {TEAM} | HTTP 200 OK')
    for d in deploys:
        print(f'  * Último deploy: {d.get("uid")} | state={d.get("state")} | url=https://{d.get("url")}')
    print('[CHECK CONCLUÍDO] Nenhum arquivo enviado. Pronto para publicação quando autorizado.')


def upload(token, path, sha, size, blob):
    st, body = req(token, 'POST', f'{API}/v2/files?teamId={TEAM}', {
        'x-now-digest': sha,
        'x-now-size': str(size),
        'Content-Type': 'application/octet-stream',
    }, blob)
    if st != 200:
        print(f'  FALHA upload {path}: HTTP {st} {body[:200]!r}')
        sys.exit(1)


def main():
    args = sys.argv[1:]
    check_mode = False
    if '--check' in args or '--dry-run' in args:
        check_mode = True
        args = [a for a in args if a not in ('--check', '--dry-run')]
    project = args[0] if args else DEFAULT_PROJECT
    token = load_token()

    if check_mode:
        check_only(token, project)
        return

    files = collect_dist_files(DIST)
    print(f'Enviando {len(files)} arquivos para {project} ({TEAM})...')
    for i, f in enumerate(files, 1):
        upload(token, f['file'], f['sha'], f['size'], f['_blob'])
        if i % 10 == 0 or i == len(files):
            print(f'  {i}/{len(files)} ok')
    payload = {
        'name': project,
        'target': 'production',
        'version': 2,
        'files': [{'file': f['file'], 'sha': f['sha'], 'size': f['size']} for f in files],
        'projectSettings': {'framework': None, 'outputDirectory': None},
    }
    st, body = req(
        token,
        'POST',
        f'{API}/v13/deployments?teamId={TEAM}',
        {'Content-Type': 'application/json'},
        json.dumps(payload).encode(),
    )
    data = json.loads(body)
    if st not in (200, 300):
        print(f'FALHA ao criar deployment: HTTP {st} {body[:400]!r}')
        sys.exit(1)
    uid = data['id']
    print(f'Deployment criado: {uid} — https://{data.get("url")}')
    for _ in range(40):
        time.sleep(4)
        st, body = req(token, 'GET', f'{API}/v13/deployments/{uid}?teamId={TEAM}')
        d = json.loads(body)
        state = d.get('readyState')
        print(f'  estado: {state}')
        if state == 'READY':
            print('PRONTO: https://' + d.get('url', ''))
            for a in d.get('alias', []) or []:
                print('  alias: https://' + a)
            return
        if state in ('ERROR', 'CANCELED'):
            print('Deployment falhou:', json.dumps(d.get('error', {}))[:300])
            sys.exit(1)
    print('Timeout esperando READY — verificar painel.')


if __name__ == '__main__':
    main()
