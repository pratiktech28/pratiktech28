/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance & Security
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pratiksharma.vercel.app',
      },
    ],
    unoptimized: true, // Fix for build errors in v0
  },

  // Security Headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
        ],
      },
    ];
  },

  // Redirects
  async redirects() {
    return [
      {
        source: '/resume',
        destination: '/?section=documents',
        permanent: true,
      },
    ];
  },

  // Experimental (Safe Options Only)
  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react'],
  },

}

module.exports = nextConfig
