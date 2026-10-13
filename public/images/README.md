# Site images

Files in this folder are served from the site root by Vite, resolved through
`import.meta.env.BASE_URL` so they work on GitHub Pages
(`/SimonLukalo.Portfolio/...`) and in local development (`/...`).

| File                    | Used for                                                    | Status |
| ----------------------- | ----------------------------------------------------------- | ------ |
| `portrait.jpg`          | Navbar avatar, homepage hero, contact card                  | Missing |
| `portrait-casual.jpg`   | About page photograph                                       | Missing |
| `infrastructure.png`    | Homepage "Operating principles" background (20% opacity)    | Present |

## Why the two portraits are missing

They were never in this repository. The site pointed at two URLs on
`horizons-cdn.hostinger.com`, the Hostinger AI Builder preview CDN, which now
returns **HTTP 404** — those files were deleted when that builder project was
taken offline, and no archived copy exists. Portrait files must be added here
for the photographs to appear.

## Adding them

Save your two photographs into this folder using exactly these names:

- `portrait.jpg` — the formal headshot (used in the navbar, hero and contact card)
- `portrait-casual.jpg` — the workspace/casual photograph (used on the About page)

Any `.jpg`, `.png` or `.webp` works — if you use a different extension, update
`portraitUrl` / `casualPortraitUrl` in `src/data/profile.js` to match.

Recommended: a portrait crop around **4:5** (for example 1200x1500), under
about 400 KB each.

Until a file is added, `SmartImage` renders an on-brand placeholder so the page
never shows a broken-image icon.
