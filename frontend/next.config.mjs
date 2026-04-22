const AUTH_URL = process.env.NEXT_PUBLIC_AUTH_URL || 'http://localhost:3000';
const GATEWAY_URL = process.env.NEXT_PUBLIC_API_GATEWAY_URL || 'http://localhost:3001';
const LIVE_ODDS_URL = process.env.NEXT_PUBLIC_LIVE_ODDS_URL || 'http://localhost:3002';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  sassOptions: {
    silenceDeprecations: [
      'import',          // @import deprecated (nossos arquivos e Bootstrap)
      'global-builtin',  // unit(), math functions sem namespace
      'color-functions', // red(), green(), blue() do Bootstrap
      'if-function',     // if() syntax do Bootstrap
      'legacy-js-api',   // sass-loader usando a API legada
    ],
  },
  async rewrites() {
    return [
      { source: '/proxy/auth/:path*', destination: `${AUTH_URL}/auth/:path*` },
      { source: '/proxy/gateway/:path*', destination: `${GATEWAY_URL}/:path*` },
      { source: '/proxy/odds/:path*', destination: `${LIVE_ODDS_URL}/:path*` },
    ];
  },
};

export default nextConfig;
