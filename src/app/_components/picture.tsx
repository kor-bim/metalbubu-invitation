'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Modal, ModalContent, ModalBody, ModalFooter, useDisclosure } from '@heroui/modal'
import { Button } from '@heroui/button'
import { Card } from '@heroui/card'
import { Icon } from '@iconify/react'
import { Gallery } from './gallery'
import { motion } from 'framer-motion'

// **이미지 리스트**
const pictures = [
  { src: '/main-picture/5_land.webp', alt: '03-1-2_22', width: 1920, height: 1080 },
  { src: '/main-picture/9_land.webp', alt: '05-2_17', width: 1920, height: 1080 },
  { src: '/main-picture/1.webp', alt: '01-1_24', orientation: 'portrait', width: 1080, height: 1920 },
  { src: '/main-picture/2.webp', alt: '02-1qq1_21', orientation: 'portrait', width: 1080, height: 1920 },
  { src: '/main-picture/3.webp', alt: '02-1qq2_23', orientation: 'portrait', width: 1080, height: 1920 },
  { src: '/main-picture/4.webp', alt: '03-1-1_20', orientation: 'portrait', width: 1080, height: 1920 },
  { src: '/main-picture/6.webp', alt: '04-1-1_18', orientation: 'portrait', width: 1080, height: 1920 },
  { src: '/main-picture/7.webp', alt: '04-1-2_19', orientation: 'portrait', width: 1080, height: 1920 },
  { src: '/main-picture/8.webp', alt: '05-1_16', orientation: 'portrait', width: 1080, height: 1920 },
  { src: '/main-picture/10_land.webp', alt: '06-1_15', orientation: 'landscape', width: 1920, height: 1080 },
  { src: '/main-picture/07-1-1_13.webp', alt: '07-1-1_13', orientation: 'portrait', width: 1080, height: 1920 },
  { src: '/main-picture/07-1-2_14.webp', alt: '07-1-1_13', orientation: 'portrait', width: 1080, height: 1920 },
  { src: '/main-picture/08-1-2_12.webp', alt: '08-1-2_12', orientation: 'portrait', width: 1080, height: 1920 },
  { src: '/main-picture/09-1-1_9.webp', alt: '09-1-1_9', orientation: 'portrait', width: 1080, height: 1920 },
  { src: '/main-picture/09-1-2_11.webp', alt: '09-1-2_11', orientation: 'portrait', width: 1080, height: 1920 },
  { src: '/main-picture/10-1-1_7.webp', alt: '10-1-1_7', orientation: 'portrait', width: 1080, height: 1920 },
  { src: '/main-picture/10-1-2_8.webp', alt: '10-1-2_8', orientation: 'portrait', width: 1080, height: 1920 },
  { src: '/main-picture/11-1_5.webp', alt: '11-1_5', orientation: 'portrait', width: 1080, height: 1920 },
  { src: '/main-picture/11-2_6.webp', alt: '11-2_6', orientation: 'landscape', width: 1920, height: 1080 },
  { src: '/main-picture/12-1-1_2.webp', alt: '12-1-1_2', orientation: 'portrait', width: 1080, height: 1920 },
  { src: '/main-picture/12-1-2_3.webp', alt: '12-1-2_3', orientation: 'portrait', width: 1080, height: 1920 },
  { src: '/main-picture/12-1-3_4.webp', alt: '12-1-3_4', orientation: 'portrait', width: 1080, height: 1920 },
  { src: '/main-picture/13-1_1.webp', alt: '13-1_1', orientation: 'landscape', width: 1920, height: 1080 }
]

export const PictureSection = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center gap-4 px-4">
        {/* 상단 2개 큰 이미지 */}
        <div className="w-full flex flex-col gap-4">
          {pictures.slice(0, 2).map((picture, index) => (
            <Card
              key={index}
              isHoverable
              isPressable
              onPress={() => {
                setSelectedIndex(index)
                onOpen()
              }}
            >
              <Image src={picture.src} alt={picture.alt} className="object-cover w-full" />
            </Card>
          ))}
        </div>

        {/* 갤러리 (Framer Motion 활용) */}
        <motion.div
          className="w-full overflow-hidden"
          initial={{ height: 250 }}
          animate={{ height: showAll ? 'auto' : 250 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {pictures.slice(2).map((picture, index) => (
              <Card
                fullWidth
                key={index + 2}
                isHoverable
                isPressable
                onPress={() => {
                  setSelectedIndex(index + 2)
                  onOpen()
                }}
              >
                <Image src={picture.src} alt={picture.alt} />
              </Card>
            ))}
          </div>
        </motion.div>

        {/* 더보기 버튼 */}
        {!showAll && (
          <div className="relative w-full flex flex-col items-center justify-center z-20">
            <div className="absolute bottom-full w-full h-36 bg-[linear-gradient(0deg,rgba(250,250,250,1)_0%,rgba(250,250,250,0.55)_60%,rgba(250,250,250,0.5)_73%,rgba(250,250,250,0.25)_83%,rgba(250,250,250,0)_100%)]"></div>
            <Button
              variant="light"
              onPress={() => setShowAll(true)}
              endContent={<Icon icon="solar:alt-arrow-down-outline" width="24" height="24" />}
            >
              더보기
            </Button>
          </div>
        )}
      </div>

      {/* 모달 */}
      {selectedIndex !== null && (
        <Modal size="full" isOpen={isOpen} onOpenChange={onOpenChange} classNames={{ closeButton: 'z-50' }}>
          <ModalContent>
            {() => (
              <>
                <ModalBody className="p-0 h-dvh">
                  <Gallery pictures={pictures} initialIndex={selectedIndex} />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={() => setSelectedIndex(null)}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
    </>
  )
}
