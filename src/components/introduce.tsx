import Image from 'next/image'
import introduceImg from '@public/introduce-2.webp'
import { Title3Icon } from '@/components/icons'

export const IntroduceSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="relative w-full flex flex-col items-center justify-center">
        <Image src={introduceImg} alt="introduceImg" priority />
        <div className="absolute bottom-10 left-[50%] -translate-x-1/2 z-20 w-[70%]">
          <Title3Icon />
        </div>
      </div>
    </div>
  )
}
