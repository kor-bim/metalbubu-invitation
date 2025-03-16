import { HeroSection, IntroduceSection, MapSection, PictureSection } from './_components'

export default function Home() {
  return (
    <div className="relative flex items-center justify-center py-2 box-border">
      <div className="w-full max-w-[850px] flex flex-col items-center justify-center box-border gap-16">
        <HeroSection />
        <IntroduceSection />
        <PictureSection />
        <MapSection />
        <div className="w-full flex flex-col items-center justify-center"></div>
      </div>
    </div>
  )
}
