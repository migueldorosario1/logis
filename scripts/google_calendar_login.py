#!/usr/bin/env python3
"""Login OAuth do Google Agenda (Calendar) — cliente Desktop 'logis-agenda'.

Fluxo loopback: abre o navegador do Miguel, recebe o código de autorização em
http://localhost:8901/callback, troca por tokens (access + refresh) e grava o
refresh no cofre. Nunca imprime valores de token/segredo no output.

Uso:  python3 google_calendar_login.py
Depois de autorizado, testar com:  python3 google_calendar_login.py --teste
"""
import http.server
import json
import os
import socketserver
import subprocess
import sys
import time
import urllib.parse
import urllib.request

BASE = "/home/migueldorosario/Downloads/Antigravity Google"
CLIENT_JSON = os.path.join(BASE, "Outros/chaves/Google Agenda/logis_calendar_client.json")
TOKEN_PATH = os.path.join(BASE, "Outros/chaves/Google Agenda/logis_calendar_token.json")
PORT = 8901
SCOPES = "https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar.readonly"


def load_creds():
    with open(CLIENT_JSON) as f:
        d = json.load(f)
    return d["installed"]["client_id"], d["installed"]["client_secret"]


def refresh_access_token():
    """Usa o refresh_token do cofre para obter um access token novo."""
    with open(TOKEN_PATH) as f:
        tok = json.load(f)
    if "refresh_token" not in tok:
        print("Cofre sem refresh_token — rode o login completo (sem --teste).")
        sys.exit(1)
    cid, sec = load_creds()
    data = urllib.parse.urlencode({
        "refresh_token": tok["refresh_token"],
        "client_id": cid,
        "client_secret": sec,
        "grant_type": "refresh_token",
    }).encode()
    r = urllib.request.urlopen("https://oauth2.googleapis.com/token", data=data, timeout=30)
    return json.loads(r.read())["access_token"]


class CallbackHandler(http.server.BaseHTTPRequestHandler):
    code = None

    def do_GET(self):
        p = urllib.parse.parse_qs(urllib.parse.urlparse(self.path).query)
        if "code" in p:
            CallbackHandler.code = p["code"][0]
            body = b"<h2>&#9989; Autorizado! Pode fechar esta aba e voltar ao ZCode.</h2>"
            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
        elif "error" in p:
            body = f"<h2>&#10060; Erro do Google: {p['error'][0]}</h2>".encode()
            self.send_response(400)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.end_headers()
            self.wfile.write(body)
        else:
            self.send_response(404)
            self.end_headers()

    def log_message(self, *a):
        pass


def login():
    cid, sec = load_creds()
    redirect = f"http://localhost:{PORT}/callback"
    url = "https://accounts.google.com/o/oauth2/auth?" + urllib.parse.urlencode({
        "client_id": cid,
        "redirect_uri": redirect,
        "response_type": "code",
        "scope": SCOPES,
        "access_type": "offline",
        "prompt": "consent",
    })
    print("Abrindo o navegador para autorizacao (15 min de validade)...")
    subprocess.Popen(["xdg-open", url], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

    socketserver.TCPServer.allow_reuse_address = True
    try:
        httpd = socketserver.TCPServer(("127.0.0.1", PORT), CallbackHandler)
    except OSError as e:
        print(f"Porta {PORT} ocupada: {e}")
        sys.exit(1)
    httpd.timeout = 5
    deadline = time.time() + 900  # 15 min
    while CallbackHandler.code is None and time.time() < deadline:
        httpd.handle_request()
    httpd.server_close()
    if not CallbackHandler.code:
        print("Timeout: nenhum clique de autorizacao em 15 min.")
        sys.exit(1)

    data = urllib.parse.urlencode({
        "code": CallbackHandler.code,
        "client_id": cid,
        "client_secret": sec,
        "redirect_uri": redirect,
        "grant_type": "authorization_code",
    }).encode()
    tok = None
    for attempt in range(5):
        try:
            r = urllib.request.urlopen("https://oauth2.googleapis.com/token", data=data, timeout=30)
            tok = json.loads(r.read())
            break
        except Exception as e:
            print(f"Troca de token tentativa {attempt + 1} falhou ({e}); repetindo em 3s...")
            time.sleep(3)
    if tok is None:
        print("Nao consegui trocar o codigo por tokens.")
        sys.exit(1)

    with open(TOKEN_PATH, "w") as f:
        json.dump(tok, f)
    os.chmod(TOKEN_PATH, 0o600)
    print("Token gravado no cofre (valor nunca exibido).")
    print("refresh_token presente:", "sim" if "refresh_token" in tok else "NAO")
    return tok


def teste(access_token):
    req = urllib.request.Request(
        "https://www.googleapis.com/calendar/v3/users/me/calendarList?maxResults=10",
        headers={"Authorization": "Bearer " + access_token},
    )
    try:
        r = urllib.request.urlopen(req, timeout=30)
        items = json.loads(r.read()).get("items", [])
        print(f"OK: acesso confirmado, {len(items)} calendario(s) visiveis:")
        for it in items:
            print("  -", it.get("summary"), f"(id terminando em ...{it.get('id', '')[-12:]})")
    except urllib.error.HTTPError as e:
        corpo = e.read().decode("utf-8", "replace")[:300]
        print(f"Falha HTTP {e.code}: {corpo}")
        if e.code == 401:
            print("Dica: token expirado — rode com --refresh")
        if e.code == 403 and "accessNotConfigured" in corpo:
            print("Dica: ativar a Google Calendar API no projeto do Cloud Console.")


if __name__ == "__main__":
    if "--teste" in sys.argv:
        with open(TOKEN_PATH) as f:
            access = json.load(f)["access_token"]
        teste(access)
    elif "--refresh" in sys.argv:
        teste(refresh_access_token())
    else:
        tok = login()
        teste(tok["access_token"])
