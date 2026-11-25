# Stay Safe Online

Self-paced internet-safety e-learning for an 11-year-old, as a static website.

- 12 short modules, 5–10 minutes each, playable alone in a browser.
- Each module has 2–3 scenarios: choose, see what happens, learn what to do.
- Progress is saved on the device only, in localStorage (`stay-safe-progress-v1`). No login, no accounts, no tracking, no data leaves the phone.
- All examples are fictional. No real personal information is in the site.
- `parents.html` holds the fuller parent briefing behind module 11. The playable version of that module is deliberately gentle.

## Run locally

```sh
python3 -m http.server --directory .
```

Then open http://127.0.0.1:8000/

## Deploy

GitHub Pages, from the `main` branch. Static files only: `index.html`, `styles.css`, `app.js`, `parents.html`.
