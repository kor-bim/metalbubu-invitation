'use client'

import { useCallback, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Modal, ModalContent, ModalBody, useDisclosure } from '@heroui/modal'
import { Gallery } from './gallery'

import wedding1 from '@public/wedding/1.jpg'
import wedding5 from '@public/wedding/5_land.jpg'
import wedding10 from '@public/wedding/10_land.jpg'
import wedding11 from '@public/wedding/11.jpg'
import wedding13 from '@public/wedding/13.jpg'
import wedding14 from '@public/wedding/14.jpg'
import wedding24 from '@public/wedding/24_land.jpg'

export const PictureSection = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const pictures = useMemo(
    () => [
      { src: wedding24, alt: 'Wedding 24' },
      { src: wedding1, alt: 'Wedding 1' },
      { src: wedding11, alt: 'Wedding 11' },
      { src: wedding5, alt: 'Wedding 5' },
      { src: wedding10, alt: 'Wedding 10' },
      { src: wedding13, alt: 'Wedding 13' },
      { src: wedding14, alt: 'Wedding 14' }
    ],
    []
  )

  const motionConfig = useMemo(
    () => ({
      initial: 'hidden',
      whileInView: 'visible',
      variants: {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } }
      },
      viewport: { once: true, amount: 0.2 }
    }),
    []
  )

  const clickMotionConfig = useMemo(
    () => ({
      whileTap: { scale: 0.95 }
    }),
    []
  )

  const handleClick = useCallback(
    (index: number) => {
      setSelectedIndex(index)
      onOpen()
    },
    [onOpen]
  )

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center gap-4 px-4 mt-14">
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <motion.div {...motionConfig} {...clickMotionConfig}>
            <Image
              className="cursor-pointer rounded-2xl"
              src={pictures[0].src}
              alt={pictures[0].alt}
              priority
              onClick={() => handleClick(0)}
            />
          </motion.div>
          <motion.div {...motionConfig}>
            <div className="w-full flex items-center justify-center gap-2">
              <div className="w-full">
                <motion.div {...clickMotionConfig}>
                  <Image
                    className="cursor-pointer rounded-2xl"
                    src={pictures[1].src}
                    alt={pictures[1].alt}
                    priority
                    onClick={() => handleClick(1)}
                  />
                </motion.div>
              </div>
              <div className="w-full">
                <motion.div {...clickMotionConfig}>
                  <Image
                    className="cursor-pointer rounded-2xl"
                    src={pictures[2].src}
                    alt={pictures[2].alt}
                    priority
                    onClick={() => handleClick(2)}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div {...motionConfig} {...clickMotionConfig}>
            <Image
              className="cursor-pointer rounded-2xl"
              src={pictures[3].src}
              alt={pictures[3].alt}
              priority
              onClick={() => handleClick(3)}
            />
          </motion.div>
          <motion.div {...motionConfig} {...clickMotionConfig}>
            <Image
              className="cursor-pointer rounded-2xl"
              src={pictures[4].src}
              alt={pictures[4].alt}
              priority
              onClick={() => handleClick(4)}
            />
          </motion.div>
          <motion.div {...motionConfig}>
            <div className="w-full flex items-center justify-center gap-2">
              <div className="w-full">
                <motion.div {...clickMotionConfig}>
                  <Image
                    className="cursor-pointer rounded-2xl"
                    src={pictures[5].src}
                    alt={pictures[5].alt}
                    priority
                    onClick={() => handleClick(5)}
                  />
                </motion.div>
              </div>
              <div className="w-full">
                <motion.div {...clickMotionConfig}>
                  <Image
                    className="cursor-pointer rounded-2xl"
                    src={pictures[6].src}
                    alt={pictures[6].alt}
                    priority
                    onClick={() => handleClick(6)}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Modal size="full" isOpen={isOpen} onOpenChange={onOpenChange} classNames={{ closeButton: 'z-50' }}>
        <ModalContent>
          {() => (
            <ModalBody className="p-0 h-dvh">
              <Gallery pictures={pictures} initialIndex={selectedIndex} />
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
