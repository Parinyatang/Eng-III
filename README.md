# English III Final Drill (LI102003)

Interactive practice and drill web application for English III (LI102003) Final Examination preparation.

## Overview
- Single-page drill web app with vocabulary, grammar, and reading comprehension practice.
- Supports dark/light mode, Thai translations/explanations toggle, and customizable font scaling.
- Fully self-contained in `index.html` for offline use or GitHub Pages hosting.

## Development & Build
The application source is maintained in `app.src.html` along with modular data files:
- `data.js`
- `data-extra.js`
- `data-evidence.js`

To bundle into a single self-contained `index.html`:
```bash
python build.py
```

## iPhone / iPad
- Responsive layout with a proper viewport, safe-area (notch) padding and 44px touch targets.
- In Safari: Share → **Add to Home Screen** to open it full-screen like an app (icon: `apple-touch-icon.png`).
- Progress is stored per browser, so Safari and the Home Screen app keep separate progress.
