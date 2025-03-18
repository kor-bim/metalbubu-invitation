import { TitleIcon } from '@/components/icons/title'
import Image from 'next/image'
import titleImg from '@public/title.webp'
import heroImg from '@public/hero.webp'

export const HeroSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-[url(/background.webp)] bg-no-repeat bg-contain px-4 pt-10 md:pt-28">
      <TitleIcon />
      <Image src={titleImg} alt="title" priority />
      <div className="relative w-full flex items-center justify-center">
        <Image src={heroImg} alt="hero" className="z-20" priority />
      </div>
    </div>
  )
}
