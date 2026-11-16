# Owais Ali Shah — FIELDWORK edition

A complete static portfolio: 12 main pages and 8 project case studies. All pages share `style.css`, `signature.css`, `portfolio.js`, `signature.js`, and `search-data.js`. No installation, build command, API key, or environment variable is required.

## Manual upload (recommended)

1. Extract `Owais-Portfolio.zip` on your computer.
2. Back up your current website files.
3. Copy every `.html` file plus `signature.css`, `signature.js`, `style.css`, `portfolio.js`, `search-data.js`, `analytics.js`, `favicon.svg`, `owais.png`, `sitemap.xml`, and `robots.txt` into the same folder in your website repository or hosting file manager.
4. Replace the existing `index.html`, `certifications.html`, `style.css`, and `portfolio.js`. Keep the filenames exactly as delivered — no `(1)` suffixes.
5. Add the new pages too. Replacing only `index.html` will leave navigation incomplete.
6. Publish using your existing host and refresh with Ctrl+Shift+R.

For GitHub's web editor: open each existing file, choose Edit, paste its replacement contents, and commit. Use Add file → Upload files for the portrait, new pages, and supporting files. GitHub Pages can serve this site directly from the selected branch/root; no build system is needed. This package has not been deployed or committed for you.

## Preview locally

Double-click `index.html`. All core content and internal page links work directly from the folder. Internet access is needed for Google Fonts, external project references, and credential links. System fonts are used when Google Fonts cannot load. Clipboard, speech, fullscreen, and download behavior can vary on local `file:` URLs. For a local web server, optionally run `python -m http.server 8000` in this folder and open `http://localhost:8000`.

## Files and editing

| Files | Purpose |
|---|---|
| index.html | Homepage |
| about.html, education.html, experience.html, skills.html | Background and qualifications |
| projects.html, project-*.html | Project gallery and 8 dedicated case studies |
| research.html, leadership.html | Research and community activity |
| certifications.html | 82 source catalogue records and 6 additional credential references |
| analytics.html, analytics.js | Illustrative interactive indicators, table, PNG/CSV export |
| contact.html | Contact details and email-draft form |
| cv.html | Full profile, text CV export, print/save-as-PDF, executive brief |
| style.css | Shared design system and responsive styles |
| portfolio.js | Navigation, themes, filtering, search, preferences, forms and downloads |
| search-data.js | Global search index and recommendation data |
| owais.png | Your original portrait, unchanged |
| favicon.svg | OAS monogram |
| sitemap.xml, robots.txt | Search engine discovery |

Edit content directly in its HTML page. If you change project content, also update `search-data.js` (search and recommendations) and the project’s CV entry. Shared headers and footers are intentionally present in every HTML file so navigation still works without JavaScript; repeat global navigation edits across the files.

All project case studies preserve the source descriptions. Additional older JavaScript records remain on the relevant pages under Further detail. See `CONTENT-AUDIT.md` for source mappings and review items.

## CV and contact

On `cv.html`, Print / save as PDF opens the browser print dialog. Select Save as PDF. The print layout expands all details. Download text CV creates a real `.txt` file locally. No ready-made PDF is claimed or required.

The contact form validates fields and opens the visitor's configured email application with a draft. It does not send automatically, store messages, or use a backend. The visitor must review and send the email. Direct email and copy-email alternatives are provided.

## Site address

Canonical metadata, social preview URLs, `sitemap.xml`, and `robots.txt` retain the supplied address: `https://econ-owais.github.io/owais-portfolio/`. If deploying somewhere else, replace that base URL in all these files. All internal links are relative and work in a GitHub Pages subdirectory.

## Analytics data

The 13-country dataset is retained as illustrative demo data, without a verified reference year. It is explicitly labeled in the UI and CSV. A trend line and correlation illustrate interaction; they are not substantive economic findings. No time series has been fabricated from these cross-sectional records.

## Preferences and accessibility

Ivory, charcoal, sage, bronze, cool blue, and forest themes; optional larger text; keyboard search with Ctrl/⌘ K; page search with `/`; preferences with `?`; Escape closes dialogs. Native focus behavior, skip navigation, reduced motion, mobile menus, labeled forms, and an accessible analytics table are included. Voice navigation and ambient tones are optional and depend on browser support. Preferences are stored only in the visitor's browser; no tracking or analytics service is installed.

## Review before publishing

- The source claims 150+ certifications, but the supplied catalogue has 82 entries. That claim is retained with a visible distinction; missing certificates were not invented.
- Location, availability, education start date, ongoing roles, impact figures, and publication statuses are preserved as supplied. Review `CONTENT-AUDIT.md`.
- External project and credential destinations have been retained; external availability and credential authenticity have not been independently verified.
- See `QA-REPORT.md` for completed checks and testing limits.

## FIELDWORK design and features

This edition adds a typographic portrait opening, original abstract contour artwork, a thematic research atlas, visitor routes, project quick views, a persistent three-project shortlist and comparison table, and a synthetic OLS signal lab. Keep both signature.css and signature.js beside the other shared assets. The original portrait and full portfolio content remain included.

The signal lab uses 48 deterministic synthetic observations. Sliders change the underlying relationship and noise; estimated slope and R² are recomputed. It is explicitly a teaching demonstration, not empirical research. Shortlists are stored locally in the visitor’s browser.
