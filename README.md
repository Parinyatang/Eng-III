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
