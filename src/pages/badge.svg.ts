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
    
    <!-- Mini Calculator Emblem -->
    <g transform="translate(8, 6)">
      <radialGradient id="badge-emblem-rad" cx="35%" cy="32%" r="65%">
        <stop offset="0%" stop-color="#10B981" />
        <stop offset="55%" stop-color="#059669" />
        <stop offset="85%" stop-color="#F59E0B" />
        <stop offset="100%" stop-color="#D97706" />
      </radialGradient>
      <circle cx="8" cy="8" r="7.5" fill="url(#badge-emblem-rad)" />
      <g transform="translate(2.5, 2.5) scale(0.45)" stroke-linecap="round" stroke-linejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2.5" fill="#FFFFFF" stroke="#0B0F17" stroke-width="2" />
        <line x1="7.5" y1="6.5" x2="16.5" y2="6.5" stroke="#0B0F17" stroke-width="2.2" />
        <line x1="16" y1="14" x2="16" y2="18" stroke="#F59E0B" stroke-width="2.2" />
        <path d="M16 10.2h.01" stroke="#0B0F17" stroke-width="2.6" />
        <path d="M12 10.2h.01" stroke="#0B0F17" stroke-width="2.6" />
        <path d="M8 10.2h.01" stroke="#0B0F17" stroke-width="2.6" />
        <path d="M12 14.2h.01" stroke="#0B0F17" stroke-width="2.6" />
        <path d="M8 14.2h.01" stroke="#0B0F17" stroke-width="2.6" />
        <path d="M12 18.2h.01" stroke="#10B981" stroke-width="2.6" />
        <path d="M8 18.2h.01" stroke="#10B981" stroke-width="2.6" />
      </g>
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
