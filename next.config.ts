import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    minimumCacheTTL: 31536000,
    formats: ['image/webp']
  },
  output: 'standalone'
}

export default nextConfig
