'use client'

import YouTube from 'react-youtube'
import { motion } from 'framer-motion'
import useJukebox from '@/hooks/use-jukebox'
import { Button } from '@heroui/button'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import cdImg from '@public/cd.png'

export const MusicPlayer = () => {
  const videoId = 'P5jFtmwz0Yw'
  const { onReady, opts, isPlaying, handlePlayPause, onStateChange } = useJukebox()

  return (
    // 외부 래퍼: 그라데이션 배경, box-shadow, 4.8px 패딩 적용
    <div className="fixed top-2 right-2 z-20">
      <div className="bg-[linear-gradient(180deg,_#fff,_#b7b7b7_65%,_#fff)] shadow-[0px_3px_1px_-2px_rgba(0,0,0,0.2),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_1px_5px_0px_rgba(0,0,0,0.12)] p-[4.8px] rounded-full">
        {/* 내부 플레이어 컨테이너: 민트색 그라데이션 배경, inset box-shadow 적용 */}
        <div className="bg-gradient-to-b from-[#aafaff] to-[#19c0c0] text-white flex items-center gap-1 rounded-full shadow-[inset_1px_2px_6px_rgba(0,0,0,0.3)] h-6 pe-1">
          {/* 숨김 처리된 YouTube 플레이어 */}
          <YouTube videoId={videoId} opts={opts} onReady={onReady} onStateChange={onStateChange} className="hidden" />

          <Button isIconOnly onPress={handlePlayPause} radius="full" size="sm" variant="light">
            {isPlaying ? (
              <Icon icon="solar:pause-bold" width="12" height="12" className="text-[#555555]" />
            ) : (
              <Icon icon="solar:play-bold" width="12" height="12" className="text-[#555555]" />
            )}
          </Button>

          {/* 마퀴 효과: 재생 중일 때만 텍스트가 우에서 좌로 이동, 그렇지 않으면 고정 */}
          <div className="overflow-hidden w-20">
            <motion.div
              className="text-[0.65rem] font-bold whitespace-nowrap text-[#555555]"
              animate={isPlaying ? { x: ['100%', '-100%'] } : { x: 0 }}
              transition={isPlaying ? { duration: 10, repeat: Infinity, ease: 'linear' } : {}}
            >
              SMOKING GOOSE - IMPerfect
            </motion.div>
          </div>
          <Image src={cdImg} alt="cd" />
        </div>
      </div>
    </div>
  )
}
