import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    minimumCacheTTL: 31536000
  },
  output: 'standalone'
}

export default nextConfig
