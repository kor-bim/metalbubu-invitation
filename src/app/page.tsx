import { GuestBookSection, HeroSection, IntroduceSection, MapSection, PictureSection } from './_components'

export default function Home() {
  return (
    <div className="relative flex items-center justify-center py-2 box-border">
      <div className="w-full max-w-[690px] min-w-[375px] flex flex-col items-center justify-center box-border gap-16">
        <HeroSection />
        <IntroduceSection />
        <PictureSection />
        <MapSection />
        <GuestBookSection />
        <div className="relative w-full h-[100px] flex flex-col items-center justify-center px-4"></div>
      </div>
    </div>
  )
}
