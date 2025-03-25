'use client'

import Image from 'next/image'
import { Link } from '@heroui/link'
import { Button } from '@heroui/button'
import { Snippet } from '@heroui/snippet'
import mapImg from '@public/map.png'
import { KakaoNaviIcon, NaverMapIcon, TmapIcon } from '@/components/icons'
import { Divider } from '@heroui/divider'
import { Accordion, AccordionItem } from '@heroui/accordion'

export const MapSection = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center gap-8 px-4">
        <div className="w-44 h-14 rounded-[50%] bg-[#a897a7] flex items-center justify-center">
          <span className="text-lg text-white font-bold font-gowunDodum">- 오시는길 -</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-xl font-bold font-gowunDodum">호텔ICC웨딩홀 1F, 크리스탈 볼룸홀</span>
          <Snippet
            size="lg"
            hideSymbol
            tooltipProps={{
              content: '주소를 복사하세요'
            }}
            classNames={{ pre: 'font-gowunDodum text-[#666666] pl-5' }}
            className="bg-transparent"
          >
            대전 유성구 엑스포로123번길 55
          </Snippet>
          <span className="text-[#888888] text-sm mt-2">Tel. 042-866-5100</span>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-6">
          <Link
            className="w-full flex items-center justify-center"
            isExternal
            href="https://map.kakao.com/?urlX=588113.0000000026&amp;urlY=799878.0000000005&amp;name=%EB%8C%80%EC%A0%84%20%EC%9C%A0%EC%84%B1%EA%B5%AC%20%EC%97%91%EC%8A%A4%ED%8F%AC%EB%A1%9C123%EB%B2%88%EA%B8%B8%2055&amp;map_type=TYPE_MAP&amp;from=roughmap"
          >
            <Image src={mapImg} alt="kakaoMap" className="rounded-xl w-full" />
          </Link>
          <div className="w-full flex flex-col items-start justify-center">
            <span className="text-sm font-bold">내비게이션</span>
            <span className="text-sm text-[#555555]">원하시는 앱을 선택하시면 길안내가 시작됩니다.</span>
          </div>
          <div className="w-full flex items-center justify-center gap-2">
            <Button
              fullWidth
              as={Link}
              isExternal
              href="https://tmap.life/7ab28f4e"
              startContent={<TmapIcon />}
              color="primary"
            >
              T-맵
            </Button>
            <Button
              fullWidth
              startContent={<KakaoNaviIcon />}
              onPress={() => {
                window.Kakao.Navi.share({
                  name: '호텔ICC 웨딩홀',
                  x: 127.3921997616594,
                  y: 36.377408195453185,
                  coordType: 'wgs84'
                })
              }}
              className="bg-[#F9E000]"
            >
              카카오
            </Button>
            <Button
              fullWidth
              as={Link}
              isExternal
              href="https://naver.me/FCA8TiOq"
              startContent={<NaverMapIcon />}
              color="success"
            >
              네이버
            </Button>
          </div>
          <Divider />
          <div className="w-full flex flex-col items-start justify-center gap-2">
            <span className="font-bold">지하철</span>
            <span className="text-sm text-[#555555]">
              <span className="text-[#3b9f37]">●</span> 대전 1호선 대전역 → <span className="text-[#3d5bab]">●</span>{' '}
              간선버스 618(정부청사역) → 스마트시티5단지 정류장 하차
            </span>
          </div>
          <Divider />
          <Accordion selectionMode="multiple" defaultExpandedKeys={['1']} className="px-0">
            <AccordionItem
              key="1"
              aria-label="대전 시내버스 이용"
              title={<span className="font-bold">대전 시내버스 이용</span>}
              classNames={{ content: 'pb-6' }}
            >
              <div className="w-full flex flex-col gap-2 text-sm">
                <span className="text-[#3d5bab] font-semibold">■ 간선버스</span>
                <div className="ml-1 border-l-4 border-[#3d5bab] pl-2">
                  <span className="text-[#555555]">
                    🚌 <span className="text-[#3d5bab] font-bold">707</span> (대전역) → 스마트시티 2단지 정류장 하차
                  </span>
                  <br />
                  <span className="text-[#555555]">
                    🚌 <span className="text-[#3d5bab] font-bold">618</span> (대전예술의전당) → 스마트시티 5단지 정류장
                    하차
                  </span>
                </div>

                <span className="text-[#3b9f37] font-semibold mt-2">■ 지선버스</span>
                <div className="ml-1 border-l-4 border-[#3b9f37] pl-2">
                  <span className="text-[#555555]">
                    🚌 <span className="text-[#3b9f37] font-bold">606</span> (대전역) →{' '}
                    <span className="text-[#3d5bab] font-bold">618</span> (대전예술의전당) → 스마트시티 5단지 정류장
                    하차
                  </span>
                  <br />
                  <span className="text-[#555555]">
                    🚌 <span className="text-[#3b9f37] font-bold">606</span> (대전역) →{' '}
                    <span className="text-[#3b9f37] font-bold">911</span> (수정타운아파트정문) → 스마트시티 5단지 정류장
                    하차
                  </span>
                  <br />
                  <span className="text-[#555555]">
                    🚌 <span className="text-[#3b9f37] font-bold">606</span> (대전역) →{' '}
                    <span className="text-[#3b9f37] font-bold">121</span> (국립중앙과학관) → MBC/TJB 방송국 정류장 하차
                  </span>
                </div>
              </div>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="서울에서 오는 길"
              title={<span className="font-bold">서울에서 오는 방법</span>}
            >
              <div className="w-full flex flex-col gap-2 text-sm">
                <span className="text-[#3d5bab] font-semibold">■ 시외버스</span>
                <div className="ml-1 border-l-4 border-gray-500 pl-2">
                  <span className="block text-[#555555]">
                    🚍 <strong>동서울종합터미널</strong> → 대전청사시외버스둔산정류소 →{' '}
                    <span className="text-[#3d5bab] font-bold">618</span> (정부대전청사서문) → 스마트시티 5단지 정류장
                    하차
                  </span>
                </div>

                <span className="text-[#3d5bab] font-semibold mt-2">■ 기차</span>
                <div className="ml-1 border-l-4 border-gray-500 pl-2">
                  <span className="block text-[#555555]">
                    🚆 <strong>서울역</strong> → 서대전역 → <span className="text-[#3d5bab] font-bold">618</span>{' '}
                    (서대전역네거리) → 스마트시티 5단지 정류장 하차
                  </span>
                  <span className="block text-[#555555]">
                    🚆 <strong>서울역</strong> → 대전역 → <span className="text-[#3d5bab] font-bold">618</span>{' '}
                    (정부청사역) → 스마트시티 5단지 정류장 하차
                  </span>
                </div>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  )
}
