/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        pathname: '/**',
      },
    ],
  },
  // Mark server-only packages for Next.js 16+
  serverExternalPackages: [
    '@langchain/langgraph',
    '@langchain/langgraph-checkpoint-redis',
    'redis',
    '@redis/client',
    '@e2b/code-interpreter',
    'e2b',
  ],
  // Fix for multiple lockfiles warning
  experimental: {
    turbo: {
      root: process.cwd(),
    },
  },
  // Disable Turbopack for production builds (more stable)
  // This ensures consistent builds on Vercel
  webpack: (config, { isServer }) => {
    return config;
  },
}

module.exports = nextConfig