# Setup & Zusammenarbeit

Anleitung für alle im Team, um am Mirabell-Website-Projekt mitzuarbeiten.

## Überblick

- **Code-Verwaltung:** [GitHub](https://github.com/livetourimmo/mirabell-website) — die "echte" Version des Projekts liegt hier, nicht auf einem einzelnen Rechner.
- **Live-Website:** [Vercel](https://vercel.com) — baut und veröffentlicht die Seite automatisch, sobald auf `main` gepusht wird.
- **E-Mail-Versand:** [Resend](https://resend.com) — verschickt die Nachrichten aus dem Kontaktformular.
- Zugriff auf GitHub und Vercel erfolgt über den gemeinsamen Team-Login.

## 1. Werkzeuge installieren

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org)
- Claude Code: `npm install -g @anthropic-ai/claude-code`

## 2. Projekt herunterladen

```
git clone https://github.com/livetourimmo/mirabell-website.git
cd mirabell-website/app
```

Beim Klonen mit dem gemeinsamen GitHub-Account anmelden, falls danach gefragt wird.

## 3. Abhängigkeiten installieren

```
npm install
```

## 4. Umgebungsvariablen einrichten (lokal)

Die Datei `.env.local` liegt **nicht** im Git-Repo (aus Sicherheitsgründen — sie enthält geheime Schlüssel). Sie muss lokal manuell angelegt werden: neue Datei `app/.env.local` erstellen mit folgendem Inhalt:

```
VERCEL_OIDC_TOKEN=...
RESEND_API_KEY=...
CONTACT_TO_EMAIL=...
CONTACT_FROM_EMAIL=...
```

Die aktuellen Werte bei einem Teammitglied erfragen, das sie schon eingerichtet hat (sicher übermitteln, z. B. Passwort-Manager — nicht per E-Mail im Klartext).

Falls die Werte noch nie eingerichtet wurden, siehe Abschnitt "Resend einrichten" unten.

## 5. Dev-Server starten

```
npm run dev
```

Die Seite läuft dann lokal auf `http://localhost:3000`.

## 6. Mit Claude Code arbeiten

Im `app`-Ordner `claude` starten (oder die IDE-Extension öffnen) — Claude Code erkennt das Projekt automatisch.

## 7. Änderungen teilen (Git-Workflow)

**Vor der Arbeit** immer zuerst die neuesten Änderungen holen:

```
git pull
```

**Nach der Arbeit** eigene Änderungen hochladen:

```
git add .
git commit -m "Beschreibung der Änderung"
git push
```

Vercel deployt automatisch, sobald auf `main` gepusht wird.

## Resend einrichten (nur einmalig nötig)

Für das Kontaktformular wird ein Resend-Konto benötigt:

1. Auf [resend.com](https://resend.com) registrieren.
2. Unter **API Keys** einen neuen Key erstellen → das ist `RESEND_API_KEY` (beginnt mit `re_...`).
3. Unter **Domains** die eigene Domain (z. B. `keller-immovermarktung.ch`) hinzufügen und über die angezeigten DNS-Einträge verifizieren. Danach eine Absenderadresse dieser Domain als `CONTACT_FROM_EMAIL` verwenden, z. B. `kontakt@keller-immovermarktung.ch`.
   - Ohne verifizierte Domain geht testweise auch `onboarding@resend.dev`, aber nur für Tests — nicht für den Live-Betrieb.
4. `CONTACT_TO_EMAIL` ist die Adresse, an die Anfragen aus dem Formular gehen sollen, z. B. `info@keller-immovermarktung.ch`.

Diese vier Werte dann:
- lokal in `app/.env.local` eintragen (siehe oben), **und**
- in Vercel unter **Settings → Environment Variables** eintragen, damit sie auch auf der Live-Website funktionieren.

## Wichtig: kein OneDrive

Dieses Projekt **nicht** zusätzlich in OneDrive oder einen anderen Cloud-Sync-Ordner legen. Grund: `node_modules/` enthält zehntausende Dateien, die bei jedem `npm install` wechseln, und gleichzeitiges Bearbeiten führt zu Konfliktkopien statt sauberen Merges wie bei Git. Die einzige "echte" Version des Projekts ist das GitHub-Repo — lokal hat jeder nur eine Arbeitskopie davon, synchronisiert über `git pull` / `git push`.
