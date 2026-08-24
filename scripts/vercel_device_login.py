#!/usr/bin/env python3
"""Device-flow OAuth do Vercel na mão (o CLI morre no polling nesta rede).
Gera URL de aprovação, aguarda o Miguel autorizar e grava o token no auth.json (backup + nunca exibido).
Uso: python3 scripts/vercel_device_login.py  → abrir a URL impressa e aprovar."""
import json, time, urllib.request, urllib.parse, os, sys

CLIENT_ID = 'cl_HYyOPBNtFMfHhaUn9L4QPfTZz6TP47bp'
DEV_EP = 'https://api.vercel.com/login/oauth/device-authorization'
TOK_EP = 'https://api.vercel.com/login/oauth/token'
AUTH = os.path.expanduser('~/.local/share/com.vercel.cli/auth.json')

def post(url, data):
    body = urllib.parse.urlencode(data).encode()
    r = urllib.request.Request(url, data=body, method='POST',
        headers={'Content-Type': 'application/x-www-form-urlencoded', 'User-Agent': 'vercel-cli/59.5.0'})
    try:
        with urllib.request.urlopen(r, timeout=30) as resp:
            return resp.status, json.loads(resp.read() or b'{}')
    except urllib.error.HTTPError as e:
        return e.code, json.loads(e.read() or b'{}')

st, d = post(DEV_EP, {'client_id': CLIENT_ID, 'scope': 'openid offline_access'})
if st != 200:
    print('FALHA device-authorization:', st, d); sys.exit(1)
uri = d.get('verification_uri_complete') or (d.get('verification_uri','') + '?user_code=' + d.get('user_code',''))
print('ABRA E APROVE:', uri, flush=True)
interval = max(int(d.get('interval', 5)), 5)
deadline = time.time() + int(d.get('expires_in', 600))

while time.time() < deadline:
    time.sleep(interval)
    try:
        st, t = post(TOK_EP, {'grant_type': 'urn:ietf:params:oauth:grant-type:device_code',
                              'client_id': CLIENT_ID, 'device_code': d['device_code']})
    except Exception:
        print('rede soluçou, tentando de novo...', flush=True); time.sleep(4); continue
    if st == 200 and t.get('access_token'):
        if os.path.exists(AUTH):
            os.rename(AUTH, AUTH + '.bak_' + str(int(time.time())))
        json.dump({'token': t['access_token']}, open(AUTH, 'w'))
        print('TOKEN GRAVADO NO auth.json (não exibido).', flush=True)
        sys.exit(0)
    err = t.get('error', '')
    if err == 'authorization_pending':
        print('aguardando aprovação...', flush=True); continue
    if err == 'slow_down':
        interval += 3; continue
    if err == 'expired_token':
        print('código expirou'); sys.exit(1)
    print('erro:', st, t); time.sleep(interval)
print('timeout'); sys.exit(1)
