const AUTH_URL = process.env.NEXT_PUBLIC_AUTH_URL || 'http://localhost:3000';
const GATEWAY_URL = process.env.NEXT_PUBLIC_API_GATEWAY_URL || 'http://localhost:3001';
const LIVE_ODDS_URL = process.env.NEXT_PUBLIC_LIVE_ODDS_URL || 'http://localhost:3002';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async rewrites() {
    return [
      { source: '/proxy/auth/:path*', destination: `${AUTH_URL}/auth/:path*` },
      { source: '/proxy/gateway/:path*', destination: `${GATEWAY_URL}/:path*` },
      { source: '/proxy/odds/:path*', destination: `${LIVE_ODDS_URL}/:path*` },
    ];
  },
};

export default nextConfig;
