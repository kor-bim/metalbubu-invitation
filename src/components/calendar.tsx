import calendarImg from '@public/calendar.webp'
import Image from 'next/image'
import { CountdownDisplay } from './count-down'

export const CalendarSection = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center gap-2 px-4">
      <Image src={calendarImg} alt="calendarImg" />
      <CountdownDisplay />
    </div>
  )
}
