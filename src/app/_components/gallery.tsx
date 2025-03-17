'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper/modules'
import { Image } from '@heroui/image'
import { Icon } from '@iconify/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

export const Gallery = ({
  pictures,
  initialIndex
}: {
  pictures: { src: string; alt: string }[]
  initialIndex: number
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      <button className="gallery-prev absolute left-1 z-50">
        <Icon icon="solar:alt-arrow-left-outline" width="24" height="24" />
      </button>
      <button className="gallery-next absolute right-1 z-50">
        <Icon icon="solar:alt-arrow-right-outline" width="24" height="24" />
      </button>

      {/* Main Swiper */}
      <Swiper
        initialSlide={initialIndex}
        navigation={{ prevEl: '.gallery-prev', nextEl: '.gallery-next' }}
        thumbs={{ swiper: thumbsSwiper }}
        keyboard={{ enabled: true }}
        modules={[Navigation, Thumbs]}
        className="w-screen h-screen flex items-center justify-center"
      >
        {pictures.map((picture, index) => (
          <SwiperSlide key={index} className="w-full flex flex-col items-center justify-center">
            <Image
              src={picture.src}
              alt={picture.alt}
              className="w-full h-full object-contain"
              classNames={{ wrapper: 'w-full h-full !max-w-full' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Navigation, Thumbs]}
        className="w-full max-w-4xl mt-4"
      >
        {pictures.map((picture, index) => (
          <SwiperSlide key={index} className="cursor-pointer">
            <Image
              src={picture.src}
              alt={picture.alt}
              className="w-full h-24 object-cover"
              classNames={{ wrapper: 'w-full h-24 !max-w-full' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
