'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Modal, ModalContent, ModalBody, useDisclosure } from '@heroui/modal'
import { Button } from '@heroui/button'
import { Card } from '@heroui/card'
import { Icon } from '@iconify/react'
import { Gallery } from './gallery'
import { motion } from 'framer-motion'

import wedding1 from '@public/wedding/1.jpg'
import wedding2 from '@public/wedding/2.jpg'
import wedding3 from '@public/wedding/3.jpg'
import wedding4 from '@public/wedding/4.jpg'
import wedding5 from '@public/wedding/5_land.jpg'
import wedding6 from '@public/wedding/6.jpg'
import wedding7 from '@public/wedding/7.jpg'
import wedding8 from '@public/wedding/8.jpg'
import wedding9 from '@public/wedding/9_land.jpg'
import wedding10 from '@public/wedding/10_land.jpg'
import wedding11 from '@public/wedding/11.jpg'
import wedding12 from '@public/wedding/12.jpg'
import wedding13 from '@public/wedding/13.jpg'
import wedding14 from '@public/wedding/14.jpg'
import wedding15 from '@public/wedding/15.jpg'
import wedding16 from '@public/wedding/16.jpg'
import wedding17 from '@public/wedding/17.jpg'
import wedding18 from '@public/wedding/18.jpg'
import wedding19 from '@public/wedding/19.jpg'
import wedding20 from '@public/wedding/20_land.jpg'
import wedding21 from '@public/wedding/21.jpg'
import wedding22 from '@public/wedding/22.jpg'
import wedding23 from '@public/wedding/23.jpg'
import wedding24 from '@public/wedding/24_land.jpg'

// **이미지 리스트**
const pictures = [
  { src: wedding5, alt: 'wedding5', width: 1920, height: 1080, orientation: 'landscape' },
  { src: wedding9, alt: 'wedding9', width: 1920, height: 1080, orientation: 'landscape' },
  { src: wedding1, alt: 'wedding1', width: 1080, height: 1920 },
  { src: wedding2, alt: 'wedding2', width: 1080, height: 1920 },
  { src: wedding3, alt: 'wedding3', width: 1080, height: 1920 },
  { src: wedding4, alt: 'wedding4', width: 1080, height: 1920 },
  { src: wedding6, alt: 'wedding6', width: 1080, height: 1920 },
  { src: wedding7, alt: 'wedding7', width: 1080, height: 1920 },
  { src: wedding8, alt: 'wedding8', width: 1080, height: 1920 },
  { src: wedding10, alt: 'wedding10', width: 1920, height: 1080, orientation: 'landscape' },
  { src: wedding11, alt: 'wedding11', width: 1080, height: 1920 },
  { src: wedding12, alt: 'wedding12', width: 1080, height: 1920 },
  { src: wedding13, alt: 'wedding13', width: 1080, height: 1920 },
  { src: wedding14, alt: 'wedding14', width: 1080, height: 1920 },
  { src: wedding15, alt: 'wedding15', width: 1080, height: 1920 },
  { src: wedding16, alt: 'wedding16', width: 1080, height: 1920 },
  { src: wedding17, alt: 'wedding17', width: 1080, height: 1920 },
  { src: wedding18, alt: 'wedding18', width: 1080, height: 1920 },
  { src: wedding19, alt: 'wedding19', width: 1080, height: 1920 },
  { src: wedding20, alt: 'wedding20', width: 1920, height: 1080, orientation: 'landscape' },
  { src: wedding21, alt: 'wedding21', width: 1080, height: 1920 },
  { src: wedding22, alt: 'wedding22', width: 1080, height: 1920 },
  { src: wedding23, alt: 'wedding23', width: 1080, height: 1920 },
  { src: wedding24, alt: 'wedding24', width: 1920, height: 1080, orientation: 'landscape' }
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
              <Image src={picture.src} alt={picture.alt} priority />
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
          <div className="columns-2 gap-4 space-y-4">
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
                <Image src={picture.src} alt={picture.alt} priority />
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
              </>
            )}
          </ModalContent>
        </Modal>
      )}
    </>
  )
}
