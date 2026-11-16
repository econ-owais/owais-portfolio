# FIELDWORK edition — validation

- All 20 delivered HTML pages have one H1 and no duplicate IDs; internal asset, page and fragment references passed the static audit.
- New and modified JavaScript passed Node syntax checks.
- Desktop homepage, comparison dialog and signal lab reviewed in Chrome.
- Homepage reviewed in 390px and 320px iframe viewports; 320px viewport showed no horizontal overflow (305px content width after scrollbar).
- Research lens and visitor-route controls updated their descriptions and links; project quick view displayed the selected project.
- Shortlist persisted across pages, capped at three, displayed comparison columns and cleared correctly.
- Lab slope changed from 0.78 to 1.98 after slider adjustment; zero noise yielded R² 1.00; reset restored 0.78.
- Reading-list export is implemented, but downloaded bytes were not verified: the browser download check timed out. Other browser/OS-specific features retain the limits below.
- Content audit flags only cosmetic heading changes and rephrased hero/contact sentences. Full source records remain in their content pages and CV.
- No deployment performed. External credential and project links have not been independently revalidated.

## Earlier baseline checks

# Quality assurance — 15 November 2026

## Completed

| Check | Result |
|---|---|
| JavaScript syntax | `portfolio.js`, `analytics.js`, and `search-data.js` pass Node syntax checks |
| Static internal references | All local HTML/CSS/JS/image references resolve; no broken internal fragment links |
| HTML identity | One H1 per page; no duplicate element IDs across each of the 20 pages |
| Content comparison | All primary education, experience, research, skill-chip, and leadership records retained; all supplementary descriptions and 82 catalogue titles found in generated pages |
| Portrait | Original image file copied unchanged; no facial manipulation |
| Desktop homepage | Visually inspected; no horizontal overflow |
| Academic pages | Education and experience inspected in browser; five original education details and seven experience details present; no horizontal overflow |
| Narrow layouts | Homepage in 390px frame and projects in 320px frame inspected; document widths matched usable viewport widths with no horizontal overflow |
| Small-screen directory | Menu opens and exposes all page links |
| Themes | Light-to-dark and dark-to-light switching checked; selected theme persists between pages |
| Global search | “flood” returned both relevant project case studies; Escape closes dialog |
| Project filters | WDI search returned 1/8; category reset and climate filter returned 3/8 |
| Credential search | “Power BI” returned 8/82; Microsoft provider filter retained matching records |
| Analytics | Initial chart rendered; changing region and axes updates correlation, leaders, and table; country selector pins Germany |
| Form validation | Empty submission blocked with required-name validation; no message sent |
| Executive brief | Generate report creates the preview and enables download |
| Error review | No application error observed in inspected flows; browser-extension metadata errors were present and unrelated to site code |

## Implemented, with verification limits

- PNG/CSV export, text CV and report download use browser-generated files; download bytes were not separately opened in this QA session.
- Print CSS and expand-on-print behavior are implemented; no browser-generated PDF was visually audited. The CV button accurately says Print / save as PDF.
- Native fullscreen was requested but was not confirmed in the preview browser. A failure message is available when the browser denies it.
- Optional voice recognition, microphone permissions, and ambient audio depend on the browser; not exercised in this session.
- Responsive checks used narrow same-origin frames, not physical iOS/Android devices. Safari and Firefox were not tested.
- Keyboard dialogs, labels, skip link, focus styles, reduced-motion rules, and table alternatives are implemented; no formal WCAG conformance audit was performed.
- No Lighthouse/Core Web Vitals score is claimed. No framework, runtime CSS CDN, or large third-party UI library is required.
- External project sites, credential authenticity, and report permissions were not independently validated. Supplied external URLs remain intact.
- Contact draft handoff was not sent; testing stopped at native validation.
- No invented time series, screenshots, credentials, observation years, or new impact figures were added.

## Intentional implementation decisions

- Static `.html` routes work in a folder, on GitHub Pages, or on any static host without rewrite configuration.
- Project detail pages replace the previous project modal as the full reading experience.
- Global search replaces the original section-only command palette, with page, research, project, and credential discovery.
- The original custom cursor and intensive card tilt are replaced by native pointers, clear focus states, and restrained hover feedback.
- The 150+ credential claim is retained but visibly distinguished from the 82 supplied catalogue records.
- Supplementary JavaScript records remain on their relevant pages. Their claim strength was not silently downgraded or upgraded.
- No deployment, commit, or public publication was performed.
