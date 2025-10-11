# Aido Web

Aido Web is a lightweight, zero-dependency static site for Aido — an open-source, multi-provider AI coding assistant for GitHub PRs. The site uses hash-based sections with viewport-height panels and horizontally scrollable content that works on any screen size.

- Live site: https://aido-dev.ai/
- Repo: https://github.com/aido-dev/aido-web

## Overview

- Pure HTML + CSS (no build step)
- Panels fit within any screen height
- Horizontal carousels with touch/scroll snapping
- All assets are under `assets/`:
  - `assets/css/style.css`
  - `assets/images/...`

## Local development

You can open `index.html` directly in your browser, or use a static file server (optional):

- Python 3
  - `python3 -m http.server 5173`
  - Visit http://localhost:5173
- Node (npx serve)
  - `npx serve@latest -l 5173`
  - Visit http://localhost:5173

## SEO and metadata

- Open Graph tags are in `index.html`. Update:
  - `og:title`, `og:description`, `og:image` (absolute URL), `og:url` (site URL)
- `robots.txt` allows all crawlers and references a sitemap placeholder (`sitemap.xml`).
  - Update `robots.txt` and `sitemap.xml` to your production domain after deploy.

## Contributing

We welcome issues and PRs:
- See CONTRIBUTING.md for guidelines
- Please avoid including secrets, tokens, or private data

## Code of Conduct

By participating, you agree to uphold our standards in CODE_OF_CONDUCT.md.

## License

Licensed under the Apache License, Version 2.0 (Apache-2.0). See LICENSE for details.
Note: Portions of the code and assets were created with the assistance of AI.
