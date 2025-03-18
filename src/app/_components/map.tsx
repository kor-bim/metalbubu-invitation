'use client'

import { Image } from '@heroui/image'
import { Link } from '@heroui/link'
import { Button, ButtonGroup } from '@heroui/button'
import { KakaoMapIcon, NaverMapIcon, TmapIcon } from '@/components/essential'
import { Snippet } from '@heroui/snippet'

export const MapSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-8 px-4">
      <div className="w-44 h-14 rounded-[50%] bg-[#a897a7] flex items-center justify-center">
        <span className="text-lg text-white font-bold">- 오시는길 -</span>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <span className="text-lg">{'< 호텔ICC웨딩홀 >'}</span>
        <Snippet
          size="lg"
          hideSymbol
          tooltipProps={{
            content: '주소를 복사하세요'
          }}
          classNames={{ pre: 'font-base text-lg text-foreground' }}
          className="bg-transparent"
        >
          대전 유성구 엑스포로123번길 55
        </Snippet>
      </div>

      <div className="flex flex-col items-center justify-center">
        <span className="text-lg">{'< 대중교통 >'}</span>
        <span className="text-sm mt-2 text-default-500">
          지하철 <u className="text-foreground font-semibold">정부청사역 4번 출구</u> 앞 버스정류장에서
        </span>
        <span className="text-sm text-default-500">
          <u className="text-foreground font-semibold">618번</u> 버스 탑승 후{' '}
          <u className="text-foreground font-semibold">스마트시티 5단지</u>에서 하차
        </span>
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-4">
        <Link
          className="w-full"
          isExternal
          href="https://map.kakao.com/?urlX=588113.0000000026&amp;urlY=799878.0000000005&amp;name=%EB%8C%80%EC%A0%84%20%EC%9C%A0%EC%84%B1%EA%B5%AC%20%EC%97%91%EC%8A%A4%ED%8F%AC%EB%A1%9C123%EB%B2%88%EA%B8%B8%2055&amp;map_type=TYPE_MAP&amp;from=roughmap"
        >
          <Image src="/which.png" classNames={{ wrapper: 'w-full !max-w-full' }} className="map w-full object-cover" />
        </Link>
        <ButtonGroup fullWidth variant="shadow">
          <Button as={Link} isExternal href="https://tmap.life/7ab28f4e" startContent={<TmapIcon />} color="primary">
            T-맵
          </Button>
          <Button as={Link} isExternal href="https://naver.me/FCA8TiOq" startContent={<NaverMapIcon />} color="success">
            네이버
          </Button>
          <Button
            as={Link}
            isExternal
            href="https://map.kakao.com/?from=roughmap&amp;eName=%EB%8C%80%EC%A0%84%20%EC%9C%A0%EC%84%B1%EA%B5%AC%20%EC%97%91%EC%8A%A4%ED%8F%AC%EB%A1%9C123%EB%B2%88%EA%B8%B8%2055&amp;eX=588113.0000000026&amp;eY=799878.0000000005"
            startContent={<KakaoMapIcon />}
          >
            카카오
          </Button>
        </ButtonGroup>
      </div>
    </div>
  )
}
