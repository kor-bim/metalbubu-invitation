'use client'

import { useCallback, useEffect, useState } from 'react'

export const CountdownDisplay = () => {
  const targetDate = new Date('2025-05-17T16:00').getTime()

  const calculateTimeLeft = useCallback(() => {
    const total = Math.max(targetDate - Date.now(), 0)
    return {
      days: Math.floor(total / (1000 * 60 * 60 * 24)),
      hours: Math.floor((total / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((total / 1000 / 60) % 60),
      seconds: Math.floor((total / 1000) % 60)
    }
  }, [targetDate])

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [calculateTimeLeft, targetDate])

  return (
    <div className="w-full flex items-center justify-center gap-3">
      {Object.entries({ DAYS: '0387A8', HOURS: '323280', MIN: '0387A8', SEC: '323280' }).map(
        ([label, color], index) => (
          <div key={label} className="w-full flex flex-col items-center justify-center gap-1">
            <span className={`font-cafe24 text-xl sm:text-3xl text-[#${color}]`}>{label}</span>
            <div className="w-full flex items-center justify-center gap-1">
              {timeLeft[Object.keys(timeLeft)[index]]
                .toString()
                .padStart(2, '0')
                .split('')
                .map((digit: number, i: number) => (
                  <div
                    key={i}
                    className={`w-full flex items-center justify-center bg-[#${color}] rounded-lg xxs:rounded-xl py-3 xxs:py-4 sm:py-8`}
                  >
                    <span className="font-cafe24 text-lg xxs:text-2xl sm:text-4xl text-white">{digit}</span>
                  </div>
                ))}
            </div>
          </div>
        )
      )}
    </div>
  )
}
