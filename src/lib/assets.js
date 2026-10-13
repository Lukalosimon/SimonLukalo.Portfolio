/**
 * Asset URL resolution for files kept in `public/`.
 *
 * Vite serves `public/` at the configured `base`, which is
 * `/SimonLukalo.Portfolio/` on GitHub Pages and `/` in local dev.
 * Hard-coding a leading `/` therefore breaks the deployed build, so every
 * public asset is resolved through `import.meta.env.BASE_URL`.
 */
const BASE = import.meta.env.BASE_URL || '/';

export function assetUrl(path) {
  const relative = String(path).replace(/^\/+/, '');
  return `${BASE.replace(/\/+$/, '')}/${relative}`;
}

const MONOGRAM_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 250" width="200" height="250" preserveAspectRatio="xMidYMid slice">
  <rect width="200" height="250" fill="rgb(9,14,26)"/>
  <g stroke="rgb(35,45,62)" stroke-width="1">
    <path d="M0 62.5h200M0 125h200M0 187.5h200M50 0v250M100 0v250M150 0v250"/>
  </g>
  <rect x="0.5" y="0.5" width="199" height="249" fill="none" stroke="rgb(20,208,245)" stroke-opacity="0.45"/>
  <text x="100" y="138" text-anchor="middle" font-family="JetBrains Mono,ui-monospace,monospace" font-size="54" font-weight="500" letter-spacing="3" fill="rgb(20,208,245)">SL</text>
</svg>`;

/**
 * Neutral, on-brand stand-in shown when a photograph cannot be loaded.
 * Prevents the browser's broken-image icon and keeps the layout intact.
 */
export const IMAGE_PLACEHOLDER = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(MONOGRAM_SVG)}`;
