'use client'

import { useEffect, useState } from 'react'
import { useIsMounted } from '@/hooks/use-is-mounted'
import { Snowfall } from 'react-snowfall'

export const CherryBlossomSection = () => {
  const isMounted = useIsMounted()
  const [images, setImages] = useState<CanvasImageSource[]>([])

  useEffect(() => {
    const imageElements: HTMLImageElement[] = []
    const paths = ['/cherry-blossom1.png', '/cherry-blossom2.png', '/cherry-blossom3.png', '/cherry-blossom4.png']

    paths.forEach((src) => {
      const img = new Image()
      img.src = src
      imageElements.push(img)
    })

    setImages(imageElements)
  }, [])

  if (!isMounted || images.length === 0) return null

  return (
    <Snowfall
      speed={[0, 1.5]}
      radius={[6, 17]}
      snowflakeCount={60}
      images={images}
      style={{ zIndex: 30, position: 'fixed', width: '100vw', height: '100vh', pointerEvents: 'none' }}
    />
  )
}
