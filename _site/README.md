# Portfolio Website

Persönliche Portfolio-Website gebaut mit Jekyll & GitHub Pages.

---

## Tutorial: Erste Schritte

### 1. Voraussetzungen installieren

Du brauchst Ruby und Bundler:

```bash
# macOS (mit Homebrew)
brew install ruby

# Ubuntu/Debian
sudo apt install ruby-full build-essential

# Dann Bundler installieren
gem install bundler
```

### 2. Abhängigkeiten installieren

```bash
cd dein-repo-ordner
bundle install
```

### 3. Lokale Vorschau starten

```bash
bundle exec jekyll serve
# → Seite läuft auf http://localhost:4000
```

Änderungen werden automatisch neu gebaut – einfach Datei speichern und Browser-Tab aktualisieren.

---

## Neues Projekt hinzufügen

Erstelle eine neue Datei in `_projects/`, z.B. `_projects/mein-projekt.md`:

```markdown
---
title: "Projektname"
date: 2024-03-15
status: "Live"
tech: ["Python", "Flask"]
icon: "🚀"
excerpt: "Kurze Beschreibung für die Übersichtsseite."
---

## Was ist das?

Hier kannst du deinen Text in normalem **Markdown** schreiben.

## Features

- Feature 1
- Feature 2

## Links

- [Quellcode](https://github.com/...)
```

Die Seite erscheint automatisch in der Projektübersicht und auf der Startseite.

---

## Neue Reise hinzufügen

Erstelle eine neue Datei in `_travels/`, z.B. `_travels/italien-2024.md`:

```markdown
---
title: "Italien – Rom & Florenz"
date: 2024-07-01
country: "Italien"
duration: "2 Wochen"
icon: "🇮🇹"
excerpt: "Kurze Beschreibung der Reise."
---

## Die Reise

Reisebericht hier...
```

---

## GitHub Pages einrichten

### Schritt 1: Repository erstellen

Erstelle ein neues GitHub Repository.

### Schritt 2: Code hochladen

```bash
git init
git add .
git commit -m "Portfolio initial setup"
git branch -M main
git remote add origin https://github.com/DEIN-USERNAME/DEIN-REPO.git
git push -u origin main
```

### Schritt 3: GitHub Pages aktivieren

1. Gehe zu deinem Repository auf GitHub
2. Klicke auf **Settings** → **Pages**
3. Source: **Deploy from a branch**
4. Branch: `main`, Ordner: `/ (root)` → **Save**

Nach 1–2 Minuten ist die Seite unter `https://dein-username.github.io/dein-repo` erreichbar.

---

## Eigene Domain einrichten

### CNAME-Datei anpassen

Öffne `CNAME` und trage deine Domain ein:

```
meine-domain.de
```

### DNS-Einträge setzen (bei deinem Domain-Anbieter)

**Apex-Domain** (z.B. `meine-domain.de`) – 4 A-Records:

| Typ | Name | Wert            |
|-----|------|-----------------|
| A   | @    | 185.199.108.153 |
| A   | @    | 185.199.109.153 |
| A   | @    | 185.199.110.153 |
| A   | @    | 185.199.111.153 |

**www-Subdomain** – CNAME-Record:

| Typ   | Name | Wert                    |
|-------|------|-------------------------|
| CNAME | www  | dein-username.github.io |

DNS-Änderungen können bis zu 48 Stunden dauern (meist viel schneller).

### HTTPS aktivieren

In **Settings → Pages**: Hake **Enforce HTTPS** an (sobald aktiv).

---

## Inhalte anpassen

**Name & Beschreibung:** `_config.yml` → `title` und `description`

**Über-mich-Text:** `index.md` → Hero und "Über mich"-Abschnitt bearbeiten

**Farben:** `assets/css/style.scss` → Variablen oben ändern:

```scss
:root {
  --cream:  #F5ECD7;   /* Hintergrundfarbe */
  --orange: #D4621A;   /* Akzentfarbe      */
  --dark:   #2B1E0E;   /* Dunkler Ton      */
}
```

---

## Dateistruktur

```
├── _config.yml          ← Jekyll-Konfiguration
├── _layouts/            ← HTML-Templates
├── _includes/           ← Navigation, Footer etc.
├── _projects/           ← Hier Projekte als .md anlegen
├── _travels/            ← Hier Reisen als .md anlegen
├── assets/css/          ← Alle Styles
├── index.md             ← Startseite
├── projekte.md          ← Projektübersicht
├── reisen.md            ← Reiseübersicht
├── CNAME                ← Deine Domain
└── Gemfile              ← Ruby-Abhängigkeiten
```
