import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    minimumCacheTTL: 31536000,
    formats: ['image/webp']
  },
  output: 'standalone'
}

export default nextConfig
