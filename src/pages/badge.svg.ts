import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="196" height="28" viewBox="0 0 196 28" fill="none" role="img" aria-label="platform fee: matrix calculator">
  <defs>
    <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F59E0B" />
      <stop offset="100%" stop-color="#D97706" />
    </linearGradient>
    <clipPath id="round-corner">
      <rect width="196" height="28" rx="6" />
    </clipPath>
  </defs>
  <g clip-path="url(#round-corner)">
    <!-- Left Background -->
    <rect width="98" height="28" fill="#111827" />
    <!-- Right Background -->
    <rect x="98" width="98" height="28" fill="url(#gold-grad)" />
    <!-- Subtle Border -->
    <rect width="196" height="28" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1" rx="6" />
    
    <!-- Mini Logo Bars -->
    <g transform="translate(10, 8)">
      <rect x="0" y="6" width="2" height="6" rx="0.5" fill="#F59E0B" opacity="0.6"/>
      <rect x="3.5" y="3.5" width="2" height="8.5" rx="0.5" fill="#F59E0B" opacity="0.85"/>
      <rect x="7" y="1" width="2" height="11" rx="0.5" fill="#10B981"/>
    </g>

    <!-- Left Text -->
    <text x="25" y="18" fill="#F3F4F6" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="600" letter-spacing="0.02em">
      platform fee
    </text>

    <!-- Right Text -->
    <text x="147" y="18" fill="#0B0F17" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="700" text-anchor="middle" letter-spacing="0.02em">
      matrix calculator
    </text>
  </g>
</svg>`;

  return new Response(svg, {
    status: 200,
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
};
