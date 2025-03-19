import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [],
    minimumCacheTTL: 31536000,
    formats: ['image/webp']
  },
  output: 'standalone'
}

export default nextConfig
