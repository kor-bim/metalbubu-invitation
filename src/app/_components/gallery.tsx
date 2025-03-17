'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export const Gallery = ({
  pictures,
  initialIndex
}: {
  pictures: { src: string; alt: string; orientation?: string; width: number; height: number }[]
  initialIndex: number
}) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <button className="gallery-prev absolute left-1 z-50">
        <Icon icon="solar:alt-arrow-left-outline" width="24" height="24" />
      </button>
      <button className="gallery-next absolute right-1 z-50">
        <Icon icon="solar:alt-arrow-right-outline" width="24" height="24" />
      </button>

      <Swiper
        initialSlide={initialIndex}
        navigation={{
          prevEl: '.gallery-prev',
          nextEl: '.gallery-next'
        }}
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        modules={[Navigation]}
        className="w-screen h-screen flex items-center justify-center"
      >
        {pictures.map((picture, index) => (
          <SwiperSlide key={index} className="w-full !flex flex-col items-center justify-center">
            <Image
              src={picture.src}
              alt={picture.alt}
              width={picture.width}
              height={picture.height}
              className="object-contain w-full h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
