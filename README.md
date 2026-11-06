# Pawlio Website

A static Pawlio website with a separate pet training knowledge page, multilingual interface, and species-based exercises from PawTrack master data.

## Run locally

From this folder, start a local HTTP server:

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000>. No dependency installation, build step, backend, or database is needed. Use an HTTP server rather than opening `index.html` directly, so local assets and fallback data work correctly.

The exercise page tries to load current training templates from the public master-data repository, then falls back to the bundled snapshot if the source is unavailable. Exercise text and search terms are currently in English. Google Fonts and remote exercise illustrations also require internet access.

## Project structure

- `index.html` — homepage
- `exercises.html` — pet exercise knowledge page
- `style.css`, `script.js`, `translations.js` — styling, interactions, and interface translations
- `assets/` — Pawlio artwork and Lucide SVG icons
- `data/training/` — bundled training fallback snapshots
- `vendor/bootstrap/` — locally bundled Bootstrap component styles
- `COMPONENTS.md` — component and icon library details

The phone screen is an illustrative mockup. The site does not provide a download or registration integration.
