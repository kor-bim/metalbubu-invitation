import { HeroIcon, Title2Icon, TitleIcon } from '@/components/icons'

export const HeroSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-[url(/background.webp)] bg-no-repeat bg-contain px-4 pt-10 md:pt-28">
      <TitleIcon />
      <Title2Icon />
      <div className="relative w-full flex items-center justify-center">
        <HeroIcon />
      </div>
    </div>
  )
}
