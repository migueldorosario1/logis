#!/usr/bin/env python3
"""Sincroniza o Programa de Ação do ILS com a agenda Google do Miguel.

Lê os compromissos (título, data, descrição) e cria como eventos 09:00-09:30
(como lembrete de manhã, sem marcar ocupação) no calendário principal.
Pula eventos que já existam com mesmo título e data — pode rodar de novo à vontade.

Uso:  python3 google_agenda_ils.py
"""
import json
import os
import sys
import urllib.error
import urllib.parse
import urllib.request
from datetime import date, datetime, timedelta

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import google_calendar_login as gcal  # noqa: E402

TZ = "America/Sao_Paulo"

# (data, título, descrição) — Programa de Ação ILS (rev. 24/08/2026)
ACOES = [
    ("2026-08-24", "🏛️ ILS 1º PASSO: definir os fundadores (quem assina a ata com você)",
     "Dúvida do dia do ZCode. Mínimo 2 pessoas; pode ser familiar/pessoa de confiança. Responder no chat do ZCode."),
    ("2026-08-25", "🏛️ ILS: enviar dados pessoais dos fundadores ao ZCode",
     "Nome completo, nacionalidade, estado civil, profissão, RG, CPF, endereço (o ZCode guarda no cofre, nunca expõe)."),
    ("2026-08-26", "🏛️ ILS: ligar para o 12º Ofício de Niterói — (21) 2620-3483",
     "Confirmar: lista exata de documentos, valor dos emolumentos, se exige visto de advogado e agendamento. Rua Visconde de Sepetiba 343, Centro."),
    ("2026-08-27", "🏛️ ILS: assinar a papelada (ZCode entrega tudo pronto)",
     "Estatuto (2 vias) + Ata de Fundação + Requerimento + Lista de fundadores. O ZCode prepara quando receber os dados."),
    ("2026-08-28", "🏛️ ILS: protocolar o registro no 12º Ofício de Niterói",
     "Levar documentos assinados + R$ 40-150 (emolumentos) + RG/CPF. Prazo do cartório: 5-15 dias úteis."),
    ("2026-08-29", "📰 LOGIS: editorial semanal nº 2 (internacional) — automático",
     "O ritual de sábado 09:00 produz e publica sozinho. Só conferir o portal no fim do dia."),
    ("2026-09-04", "🏛️ ILS: ligar para o cartório e acompanhar o registro",
     "Se houver exigência (retificação), responder na hora. Prazo normal: 5-15 dias úteis."),
    ("2026-09-08", "🏛️ ILS: inscrever o CNPJ (gratuito, online)",
     "Com a certidão de registro em mãos. O ZCode guia passo a passo ou um contador faz."),
    ("2026-09-15", "🏛️ ILS: Prefeitura de Niterói — alvará/inscrição municipal",
     "Verificar se atividade sem estabelecimento comercial dispensa (ZCode pesquisa os requisitos antes)."),
    ("2026-09-22", "🏛️ ILS: abrir conta bancária PJ + fechar contador",
     "Banco a sua escolha; contador para a escrituração da associação."),
    ("2026-09-30", "🏛️ ILS: começar os títulos (UP Niterói → ALERJ → CAF)",
     "O ritual diário do ZCode pesquisa os requisitos de cada um nas semanas anteriores."),
]


def api(method, path, token, body=None):
    url = "https://www.googleapis.com/calendar/v3" + path
    data = json.dumps(body).encode() if body is not None else None
    req = urllib.request.Request(url, data=data, method=method,
                                 headers={"Authorization": "Bearer " + token,
                                          "Content-Type": "application/json"})
    try:
        r = urllib.request.urlopen(req, timeout=30)
        return r.status, json.loads(r.read() or b"{}")
    except urllib.error.HTTPError as e:
        return e.code, json.loads(e.read() or b"{}")


def main():
    with open(gcal.TOKEN_PATH) as f:
        access = json.load(f)["access_token"]
    hoje = date.today().isoformat()
    time_max = (datetime.now() + timedelta(days=60)).strftime("%Y-%m-%dT00:00:00Z")

    status, resp = api("GET", f"/calendars/primary/events?timeMin={hoje}T00:00:00Z&timeMax={time_max}&maxResults=250&singleEvents=true", access)
    if status == 401:
        print("Token expirado — renovando via refresh...")
        access = gcal.refresh_access_token()
        status, resp = api("GET", f"/calendars/primary/events?timeMin={hoje}T00:00:00Z&timeMax={time_max}&maxResults=250&singleEvents=true", access)
    if status != 200:
        print(f"Erro listando eventos: {status} {resp}")
        sys.exit(1)
    existentes = set()
    for ev in resp.get("items", []):
        inicio = ev.get("start", {}).get("date") or ev.get("start", {}).get("dateTime", "")[:10]
        existentes.add((inicio, ev.get("summary", "")))
    print(f"Agenda: {len(resp.get('items', []))} eventos futuros; checando duplicatas...")

    criados, pulados = 0, 0
    for dia, titulo, descricao in ACOES:
        if (dia, titulo) in existentes:
            print(f"  = já existe, pulado: {dia} {titulo[:50]}")
            pulados += 1
            continue
        if dia == hoje:
            hh, mm, lembrete = "18:00", "18:30", 10   # hoje: lembrete ainda nesta tarde
        else:
            hh, mm, lembrete = "09:00", "09:30", 30   # demais dias: manhã
        corpo = {
            "summary": titulo,
            "description": descricao,
            "start": {"dateTime": f"{dia}T{hh}:00", "timeZone": TZ},
            "end": {"dateTime": f"{dia}T{mm}:00", "timeZone": TZ},
            "transparency": "transparent",
            "reminders": {"useDefault": False,
                          "overrides": [{"method": "popup", "minutes": lembrete}]},
        }
        status, resp = api("POST", "/calendars/primary/events", access, corpo)
        if status in (200, 201):
            print(f"  + criado {dia} {hh}: {titulo[:60]}")
            criados += 1
        else:
            print(f"  ! erro {status} em {dia}: {json.dumps(resp)[:200]}")
    print(f"\nResumo: {criados} criados, {pulados} pulados (já existiam).")


if __name__ == "__main__":
    main()
