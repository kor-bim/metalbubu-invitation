'use client'

import { useState } from 'react'
import { Image } from '@heroui/image'
import { Modal, ModalContent, ModalBody, ModalFooter, useDisclosure } from '@heroui/modal'
import { Button } from '@heroui/button'
import { Card } from '@heroui/card'
import { Icon } from '@iconify/react'
import { Gallery } from './gallery'

// **이미지 리스트**
const pictures = [
  { src: '/main-picture/03-1-2.jpg', alt: '03-1-2' },
  { src: '/main-picture/05-2.jpg', alt: '05-2' },
  { src: '/main-picture/01-1.jpg', alt: '01-1', orientation: 'portrait' },
  { src: '/main-picture/02-1qq1.jpg', alt: '02-1qq1', orientation: 'portrait' },
  { src: '/main-picture/02-1qq2.jpg', alt: '02-1qq2', orientation: 'portrait' },
  { src: '/main-picture/04-1-1.jpg', alt: '04-1-1', orientation: 'portrait' },
  { src: '/main-picture/07-1-1.jpg', alt: '07-1-1', orientation: 'portrait' },
  { src: '/main-picture/09-1-2.jpg', alt: '09-1-2', orientation: 'portrait' },
  { src: '/main-picture/13-1.jpg', alt: '13-1', orientation: 'landscape' },
  { src: '/main-picture/08-1-1.jpg', alt: '08-1-1', orientation: 'portrait' },
  { src: '/main-picture/06-1.jpg', alt: '06-1', orientation: 'landscape' },
  { src: '/main-picture/10-1-2.jpg', alt: '10-1-2', orientation: 'portrait' },
  { src: '/main-picture/11-1.jpg', alt: '11-1', orientation: 'portrait' },
  { src: '/main-picture/11-2.jpg', alt: '11-2', orientation: 'landscape' },
  { src: '/main-picture/12-1-1.jpg', alt: '12-1-1', orientation: 'portrait' },
  { src: '/main-picture/12-1-3.jpg', alt: '12-1-3', orientation: 'portrait' }
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
              <Image isBlurred src={picture.src} alt={picture.alt} className="object-cover w-full" />
            </Card>
          ))}
        </div>

        <div className="w-full columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {pictures.slice(2, showAll ? pictures.length : 6).map((picture, index) => (
            <Card
              fullWidth
              key={index}
              isHoverable
              isPressable
              onPress={() => {
                setSelectedIndex(index + 2)
                onOpen()
              }}
            >
              <Image isBlurred src={picture.src} alt={picture.alt} />
            </Card>
          ))}
        </div>
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
