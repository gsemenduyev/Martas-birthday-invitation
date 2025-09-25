<!--
Guidance for AI coding agents working on the "Marta's Birthday Invitation" static site.
Keep this file concise (20–50 lines). Only include repository-discoverable facts and concrete examples.
-->
# Copilot instructions — Marta's Birthday Invitation

Summary
- This is a minimal static website (single-page invitation) in the repo root. Main files:
  - `index.html` — primary page content.
  - `css/home-page.css` — site styles (currently empty).
  - `js/home-page.js` — site scripts (currently empty).
  - `pages/gallery.html` — additional page placeholder (empty).
  - `assets/` — images (contains `goal.png`).

What the site does
- Simple static HTML site with a single container and an RSVP button in `index.html`.
- No build system, package manifest, or server-side code found — changes are static edits.

Immediate actionable patterns
- Keep edits minimal and avoid introducing frameworks or build tooling unless requested.
- Preserve existing file names and paths. Example: `index.html` currently links `./style.css` but the repo has `css/home-page.css` — update the HTML link to `css/home-page.css` when fixing styles.
- Scripts should be placed in `js/home-page.js` and included before `</body>` when adding interactivity.

Project conventions (discoverable)
- Flat static layout: content in root, assets under `assets/`, CSS under `css/`, JS under `js/`, extra pages under `pages/`.
- CSS and JS files are present but empty; prefer to put site-level rules in `css/home-page.css` and page logic in `js/home-page.js`.

Examples (concrete changes an agent may perform)
- Fix stylesheet path in `index.html`:
  Replace `<link rel="stylesheet" href="./style.css" />` with `<link rel="stylesheet" href="css/home-page.css" />`.
- Add a simple RSVP click handler in `js/home-page.js` and include it at the end of `index.html`:
  - Create a small function that toggles a confirmation message when `.rsvp-button` is clicked.

Testing and verification
- Since this is a static site, testing is manual by opening `index.html` in a browser.
- For quick smoke-checks, run a local static server (optional). Example (powershell):
  - `python -m http.server 8000` (run from repo root) then open `http://localhost:8000`.

What not to change without asking
- Do not rename or move `assets/`, `css/`, `js/`, or `pages/` without confirming — the structure is intentionally simple.
- Avoid adding package.json, bundlers, or transpilers unless the user requests a larger refactor.

Follow-ups to offer the user
- Offer to: (a) fix the stylesheet link and add starter CSS, (b) wire up RSVP JS with a small confirmation UI, (c) create `pages/gallery.html` content using `assets/goal.png`.

If anything is unclear, ask the repository owner which behavior they'd like for the RSVP button and whether they want a development server or build tooling added.
