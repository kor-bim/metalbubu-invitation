import { HeroSection } from '@/components/hero'
import { IntroduceSection } from '@/components/introduce'
import { PictureSection } from '@/components/picture'
import { MapSection } from '@/components/map'
import { GuestBookSection } from '@/components/guest-book/guestbook'
import { AccountSection } from '@/components/account'
import { CalendarSection } from '@/components/calendar'
import { CherryBlossomSection } from '@/components/cherry-blossom'

export default function Home() {
  return (
    <div className="relative flex items-center justify-center py-2 box-border">
      <CherryBlossomSection />
      <div className="w-full max-w-[690px] min-w-[375px] flex flex-col items-center justify-center box-border gap-16">
        <HeroSection />
        <IntroduceSection />
        <CalendarSection />
        <PictureSection />
        <MapSection />
        <GuestBookSection />
        <AccountSection />
      </div>
    </div>
  )
}
