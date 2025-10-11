# Contributing to Aido Web

Thanks for your interest in improving Aido Web! This repository hosts a zero‑dependency, static site for the Aido project. We welcome issues, PRs, and discussions.

## Before you start
- Read `README.md` for the project overview and deployment via Cloudflare Pages.
- Do not include secrets, tokens, passwords, or private keys in issues, PRs, or examples.
- Prefer Discussions for questions and ideas.
- For security concerns, follow `.github/SECURITY.md` (or use GitHub’s private vulnerability reporting if enabled).
- Please follow our CODE_OF_CONDUCT.md.

## Local preview (static)
This site is pure HTML/CSS and does not require a build step. Use any static file server to preview locally (avoid opening via `file://`):

- Python 3: `python3 -m http.server 5173` then visit http://localhost:5173
- Node: `npx serve@latest -l 5173` then visit http://localhost:5173

Quick checks before opening a PR:
- Verify horizontal scrolling and viewport-height fit on mobile and desktop.
- Check images load from `assets/images/...` and CSS from `assets/css/style.css`.
- Validate Open Graph meta and links (no console errors).
- If you change social/SEO, update `robots.txt` and `sitemap.xml` as needed.

## Branch naming
Create a feature branch from `main` using one of these prefixes:
- `feature/short-description`
- `fix/short-description`
- `docs/short-description`
- `chore/short-description`
- `refactor/short-description`

## Commit style
- Use descriptive messages. Conventional Commits are welcome but not required.
- Reference issues when applicable (e.g., `Fixes #123`).
- Keep diffs focused; avoid unrelated refactors or formatting-only noise.

## Pull requests
- Open an issue first for major changes to discuss scope and approach.
- Keep scope focused; include a clear summary and a brief test plan.
- Include screenshots/GIFs for visual changes when helpful.
- Test on mobile and desktop (and with reduced-motion preferences).
- Ensure asset paths are correct and relative to this repo’s structure.
- Assign reviewers/maintainers if possible (CODEOWNERS applies).

Cloudflare Pages previews:
- If this repo is connected to Cloudflare Pages, PRs may build preview deployments automatically. Check the PR checks for a preview URL and verify your changes there as well.

## Review expectations
- We aim to provide timely, constructive feedback.
- You may be asked to split large PRs or add documentation.
- Maintainers may request accessibility, performance, or SEO tweaks.

## AI usage
- You may use AI to draft code/docs, but you are responsible for correctness and licensing compliance.
- Verify AI-generated content; models can be wrong or hallucinate details.
- Do not paste sensitive information into prompts.

## Project layout (quick reference)
- `index.html` — Main page
- `assets/css/style.css` — All styles
- `assets/images/...` — Images
- `robots.txt`, `sitemap.xml` — SEO/metadata

## License
By contributing, you agree your contributions are licensed under the project’s `LICENSE`.
