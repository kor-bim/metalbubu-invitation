'use client'

import { useEffect, useState } from 'react'

export const CountdownDisplay = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  // 마운트 여부를 체크하는 플래그
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const targetDate = new Date('2025-05-17T16:00').getTime()

    const calculateTimeLeft = () => {
      const total = Math.max(targetDate - Date.now(), 0)
      return {
        days: Math.floor(total / (1000 * 60 * 60 * 24)),
        hours: Math.floor((total / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((total / (1000 * 60)) % 60),
        seconds: Math.floor((total / 1000) % 60)
      }
    }

    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!isMounted) {
    return null
  }

  // 각 유닛을 2자리 문자열로 패딩 처리
  const paddedDays = timeLeft.days.toString().padStart(2, '0')
  const paddedHours = timeLeft.hours.toString().padStart(2, '0')
  const paddedMinutes = timeLeft.minutes.toString().padStart(2, '0')
  const paddedSeconds = timeLeft.seconds.toString().padStart(2, '0')

  return (
    <div className="w-full flex items-center justify-center gap-3">
      {/* Days */}
      <div className="w-full flex flex-col items-center justify-center gap-1">
        <span className="font-cafe24 text-xl sm:text-3xl text-[#0387A8]">DAYS</span>
        <div className="w-full flex items-center justify-center gap-1">
          <div className="w-full flex items-center justify-center bg-[#0387A8] rounded-lg xxs:rounded-xl py-3 xxs:py-4 sm:py-8">
            <span className="font-cafe24 text-lg xxs:text-2xl sm:text-4xl text-white">{paddedDays[0]}</span>
          </div>
          <div className="w-full flex items-center justify-center bg-[#0387A8] rounded-lg xxs:rounded-xl py-3 xxs:py-4 sm:py-8">
            <span className="font-cafe24 text-lg xxs:text-2xl sm:text-4xl text-white">{paddedDays[1]}</span>
          </div>
        </div>
      </div>

      {/* Hours */}
      <div className="w-full flex flex-col items-center justify-center gap-1">
        <span className="font-cafe24 text-xl sm:text-3xl text-[#323280]">HOURS</span>
        <div className="w-full flex items-center justify-center gap-1">
          <div className="w-full flex items-center justify-center bg-[#323280] rounded-lg xxs:rounded-xl py-3 xxs:py-4 sm:py-8">
            <span className="font-cafe24 text-lg xxs:text-2xl sm:text-4xl text-white">{paddedHours[0]}</span>
          </div>
          <div className="w-full flex items-center justify-center bg-[#323280] rounded-lg xxs:rounded-xl py-3 xxs:py-4 sm:py-8">
            <span className="font-cafe24 text-lg xxs:text-2xl sm:text-4xl text-white">{paddedHours[1]}</span>
          </div>
        </div>
      </div>

      {/* Minutes */}
      <div className="w-full flex flex-col items-center justify-center gap-1">
        <span className="font-cafe24 text-xl sm:text-3xl text-[#0387A8]">MIN</span>
        <div className="w-full flex items-center justify-center gap-1">
          <div className="w-full flex items-center justify-center bg-[#0387A8] rounded-lg xxs:rounded-xl py-3 xxs:py-4 sm:py-8">
            <span className="font-cafe24 text-lg xxs:text-2xl sm:text-4xl text-white">{paddedMinutes[0]}</span>
          </div>
          <div className="w-full flex items-center justify-center bg-[#0387A8] rounded-lg xxs:rounded-xl py-3 xxs:py-4 sm:py-8">
            <span className="font-cafe24 text-lg xxs:text-2xl sm:text-4xl text-white">{paddedMinutes[1]}</span>
          </div>
        </div>
      </div>

      {/* Seconds */}
      <div className="w-full flex flex-col items-center justify-center gap-1">
        <span className="font-cafe24 text-xl sm:text-3xl text-[#323280]">SEC</span>
        <div className="w-full flex items-center justify-center gap-1">
          <div className="w-full flex items-center justify-center bg-[#323280] rounded-lg xxs:rounded-xl py-3 xxs:py-4 sm:py-8">
            <span className="font-cafe24 text-lg xxs:text-2xl sm:text-4xl text-white">{paddedSeconds[0]}</span>
          </div>
          <div className="w-full flex items-center justify-center bg-[#323280] rounded-lg xxs:rounded-xl py-3 xxs:py-4 sm:py-8">
            <span className="font-cafe24 text-lg xxs:text-2xl sm:text-4xl text-white">{paddedSeconds[1]}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
