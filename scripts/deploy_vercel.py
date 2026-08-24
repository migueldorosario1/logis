#!/usr/bin/env python3
"""Deploy estático do portal LOGIS no Vercel via REST API (contorno do bug de upload do CLI).
Uso: python3 scripts/deploy_vercel.py [projeto]   (padrão: logis-magazine)
Token: ~/.local/share/com.vercel.cli/auth.json (não exibido). Script permanente do repo — /tmp é limpo."""
import hashlib, json, os, sys, time, urllib.request

AUTH = os.path.expanduser('~/.local/share/com.vercel.cli/auth.json')
DIST = os.path.join(os.path.dirname(__file__), '..', 'dist')
TEAM = 'team_QQzbgQTC569AoQxaur7tNLGj'
PROJECT = sys.argv[1] if len(sys.argv) > 1 else 'logis-magazine'
API = 'https://api.vercel.com'

token = json.load(open(AUTH))['token']

def req(method, url, headers=None, data=None):
    r = urllib.request.Request(url, data=data, method=method, headers=headers or {})
    try:
        with urllib.request.urlopen(r, timeout=60) as resp:
            return resp.status, resp.read()
    except urllib.error.HTTPError as e:
        return e.code, e.read()

def upload(path, sha, size, blob):
    st, body = req('POST', f'{API}/v2/files?teamId={TEAM}', {
        'Authorization': f'Bearer {token}',
        'x-now-digest': sha, 'x-now-size': str(size),
        'Content-Type': 'application/octet-stream'}, blob)
    if st != 200:
        print(f'  FALHA upload {path}: HTTP {st} {body[:200]!r}'); sys.exit(1)

def main():
    dist = os.path.abspath(DIST)
    files = []
    for root, _, names in os.walk(dist):
        for n in sorted(names):
            full = os.path.join(root, n)
            rel = os.path.relpath(full, dist).replace(os.sep, '/')
            blob = open(full, 'rb').read()
            files.append({'file': rel, 'sha': hashlib.sha1(blob).hexdigest(), 'size': len(blob), '_blob': blob})
    print(f'Enviando {len(files)} arquivos...')
    for i, f in enumerate(files, 1):
        upload(f['file'], f['sha'], f['size'], f['_blob'])
        if i % 10 == 0 or i == len(files):
            print(f'  {i}/{len(files)} ok')
    payload = {'name': PROJECT, 'target': 'production', 'version': 2,
               'files': [{'file': f['file'], 'sha': f['sha'], 'size': f['size']} for f in files],
               'projectSettings': {'framework': None, 'outputDirectory': None}}
    st, body = req('POST', f'{API}/v13/deployments?teamId={TEAM}',
                   {'Authorization': f'Bearer {token}', 'Content-Type': 'application/json'},
                   json.dumps(payload).encode())
    data = json.loads(body)
    if st not in (200, 300):
        print(f'FALHA ao criar deployment: HTTP {st} {body[:400]!r}'); sys.exit(1)
    uid = data['id']
    print(f'Deployment criado: {uid} — https://{data.get("url")}')
    for _ in range(40):
        time.sleep(4)
        st, body = req('GET', f'{API}/v13/deployments/{uid}?teamId={TEAM}', {'Authorization': f'Bearer {token}'})
        d = json.loads(body); state = d.get('readyState')
        print(f'  estado: {state}')
        if state == 'READY':
            print('PRONTO: https://' + d.get('url', ''))
            for a in d.get('alias', []) or []:
                print('  alias: https://' + a)
            return
        if state in ('ERROR', 'CANCELED'):
            print('Deployment falhou:', json.dumps(d.get('error', {}))[:300]); sys.exit(1)
    print('Timeout esperando READY — verificar painel.')

if __name__ == '__main__':
    main()
