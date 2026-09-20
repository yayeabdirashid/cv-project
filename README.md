# Yahye Abdirashid Mohamed — Portfolio

Persönliches Portfolio von **Yahye Abdirashid Mohamed** — angehender Informatiker mit Begeisterung für Webentwicklung, technische Systeme und Automation.

> **Gesucht:** Lehrstelle in Informatik, Automation oder Technik — Standort Unterentfelden, AG (Schweiz).

Live-Demo: `index.html` im Browser öffnen oder via GitHub Pages deployen.

---

## ✨ Features

- **Modernes Dark-Design** — Custom Properties, Gradients, Glow-Effekte, Glassmorphism
- **Responsive** — Desktop, Tablet & Smartphone (Breakpoints bei 900px / 720px / 480px)
- **Sticky Header** mit Scroll-Effekt, Scroll-Fortschrittsbalken und mobiler Navigation (Hamburger-Menü)
- **Hero-Sektion** mit Porträt (`image001.png`), Standort-Karte und rotierendem Kreistext
- **Persönliche Angaben auf einen Blick** — Adresse, Geburtsdatum, Herkunft, Aufenthalt
- **Über mich / Kompetenzen** — Webentwicklung, Software & Tools, IT-Systeme, Automation
- **Detail-Sektionen** — alle technischen Kompetenzen als Check-Listen
- **Projekte** — u. a. Alters- & Personenberechnung (JavaScript Web-App) + geplantes Smart-Home AI Robot Projekt
- **Zertifikate mit Grossansicht** — `<dialog>`-Modal mit Zoom, Blättern (Pfeiltasten / Buttons), Zähler und „In neuem Tab öffnen"
- **Werdegang-Timeline** — Ausbildung, Sprachkurse, Erfahrung
- **Kontakt-Sektion** + Footer mit „Nach oben"-Button
- **Animationen** — Reveal-on-Scroll via `IntersectionObserver`, Active-Nav-Highlighting
- **Accessibility** — Skip-Link, ARIA-Labels, Fokus-Stile, `prefers-reduced-motion`-Support
- **Keine Abhängigkeiten** — reines HTML + CSS + Vanilla JS (nur Google Fonts via CDN)

## 🛠️ Tech-Stack

| Bereich | Technologie |
|---|---|
| Markup | HTML5 (semantisch, ARIA) |
| Styling | CSS3 — Custom Properties, Grid, Flexbox, `clamp()`, `backdrop-filter` |
| Logik | Vanilla JavaScript ES2015+ (keine Libraries) |
| Fonts | Manrope (Text) + DM Mono (Labels) via Google Fonts |
| Icons | Inline SVG-Symbols (`#i-*`) |

## 📁 Projektstruktur

```
cv project/
├── index.html   # Gesamte Seite (alle Sektionen + SVG-Symbole + Dialog)
├── style.css    # Komplettes Design (Tokens, Layout, Responsive)
├── script.js    # Navigation, Scroll, Reveal, Zertifikat-Modal
├── image001.png # Porträtfoto (Hero)
└── doc/
    ├── zertifikate-images-0.jpg  # Abschlussbericht Integrationskurs Go
    ├── zertifikate-images-1.jpg  # Zertifikat Integrationskurs Go
    └── zertifikate-images-2.jpg  # Kursbestätigung Deutsch Intensiv A2 3/3
```

## 🚀 Starten

Keine Build-Tools nötig — einfach öffnen:

```powershell
# Option 1: direkt im Browser öffnen
start index.html

# Option 2: lokaler Server (empfohlen, damit Bilder/Pfade sauber laden)
python -m http.server 8000
# dann http://localhost:8000 öffnen

# Option 3: mit VS Code Live Server Extension
```

### GitHub Pages deployen

1. Repo pushen (z. B. `yayeabdirashid/portfolio`)
2. GitHub → Settings → Pages → Branch `main` / Ordner `/ (root)`
3. Seite ist unter `https://<user>.github.io/<repo>/` erreichbar

## 📄 Sektionen im Überblick

| # | Sektion | Inhalt |
|---|---|---|
| — | Hero | Begrüssung, CTA (Kontakt + GitHub), Verfügbarkeit, Foto |
| — | Quick-Facts | Adresse, Geburtsdatum (23.07.2008), Herkunft (Somalia), CH seit 16.03.2025, Bewilligung F |
| 01 | Über mich | Motivation, Tags: Webentwicklung / Automation / IT-Systeme |
| 02 | Kompetenzen | Webentwicklung, Software & Tools, IT-Systeme, Elektronik |
| 02.1 | Ziel | Lehrstelle Informatiker EFZ / Automation / Technik |
| 02.2 | Details | Vollständige Skill-Listen mit Niveau (Basic → sehr gut) |
| 03 | Projekte | JS Web-App + Smart-Home AI Robot (Planung) |
| 04 | Zertifikate | Integrationskurs Go (Minerva), Deutsch A2 3/3 (ECAP), Abschlussbericht |
| 05 | Werdegang | Timeline: Schule, Kurse, Arbeit (Planzer Transport AG, Laden Tripoli) |
| 06 | Über mich (persönlich) | Sprachen (Somali, Deutsch B1, Englisch), Stärken, Interessen |
| 07 | Erfahrung | Lagermitarbeiter Kölliken, Ladenmitarbeiter Tripoli |
| — | Kontakt | E-Mail CTA + Kontaktinfos |

## 🖼️ Zertifikate-Modal (script.js)

- `data-certificate` = Bildpfad, `data-title` = Titel
- Funktionen: `show(i)`, `openDialog(i)`, `closeDialog()`, `toggleZoom()`
- Navigation: Buttons `#modal-prev` / `#modal-next`, Tastatur `←` / `→`, Klick ausserhalb schliesst
- Neue Zertifikate = einfach weitere `.certificate-card`-Buttons im Grid ergänzen

## 📬 Kontakt

- **E-Mail:** yaye.abdirashid@gmail.com
- **Telefon:** +41 77 261 21 44
- **GitHub:** [yayeabdirashid](https://github.com/yayeabdirashid)
- **Adresse:** Hauptstrasse 54, 5035 Unterentfelden, AG

## 📝 Anpassen

- **Text ändern:** direkt in `index.html` (alle Inhalte sind statisch, gut kommentiert)
- **Farben ändern:** `:root`-Tokens oben in `style.css` (`--bg`, `--blue`, `--cyan`, `--pink` …)
- **Foto tauschen:** `image001.png` ersetzen (Pfad in `.image-frame img`)
- **Zertifikat hinzufügen:** Bild nach `doc/` legen + Card in `#zertifikate .certificate-grid` kopieren

## 📄 Lizenz

Persönliches Portfolio — alle Rechte vorbehalten. Inhalte und Bilder bitte nur mit Erlaubnis weiterverwenden.
