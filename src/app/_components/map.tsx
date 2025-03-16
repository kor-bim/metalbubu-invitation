'use client'

import { Image } from '@heroui/image'
import { Link } from '@heroui/link'
import { Button, ButtonGroup } from '@heroui/button'

export const MapSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-8">
      <div className="w-44 h-14 rounded-[50%] bg-[#a897a7] flex items-center justify-center">
        <span className="text-lg text-white font-bold">- 오시는길 -</span>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <span className="text-lg">{'< 호텔ICC웨딩홀 >'}</span>
        <span className="text-lg">대전 유성구 엑스포로123번길 55</span>
      </div>

      <div className="flex flex-col items-center justify-center">
        <span className="text-lg">{'< 대중교통 >'}</span>
        <span className="text-lg mt-2">지하철 &#39;정부청사역&#39; 4번 출구 앞 버스정류장에서</span>
        <span className="text-lg">618번 버스 탑승 후 &#39;스마트시티 5단지&#39;에서 하차</span>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <Link
          className="w-full"
          isExternal
          href="https://map.kakao.com/?urlX=588113.0000000026&amp;urlY=799878.0000000005&amp;name=%EB%8C%80%EC%A0%84%20%EC%9C%A0%EC%84%B1%EA%B5%AC%20%EC%97%91%EC%8A%A4%ED%8F%AC%EB%A1%9C123%EB%B2%88%EA%B8%B8%2055&amp;map_type=TYPE_MAP&amp;from=roughmap"
        >
          <Image
            classNames={{ wrapper: 'w-full !max-w-full' }}
            className="map w-full object-cover"
            src="https://t1.daumcdn.net/roughmap/imgmap/50e05e45cf7bc7acc98850de98f85164a7dd9a2477742a7074dd3e63fd3bc063"
          />
        </Link>
        <ButtonGroup fullWidth>
          <Button
            fullWidth
            as={Link}
            isExternal
            href="https://map.kakao.com/?from=roughmap&amp;srcid=&amp;confirmid=&amp;q=%EB%8C%80%EC%A0%84%20%EC%9C%A0%EC%84%B1%EA%B5%AC%20%EC%97%91%EC%8A%A4%ED%8F%AC%EB%A1%9C123%EB%B2%88%EA%B8%B8%2055&amp;rv=on"
            variant="flat"
            color="primary"
          >
            로드뷰
          </Button>
          <Button
            fullWidth
            as={Link}
            isExternal
            href="https://map.kakao.com/?from=roughmap&amp;eName=%EB%8C%80%EC%A0%84%20%EC%9C%A0%EC%84%B1%EA%B5%AC%20%EC%97%91%EC%8A%A4%ED%8F%AC%EB%A1%9C123%EB%B2%88%EA%B8%B8%2055&amp;eX=588113.0000000026&amp;eY=799878.0000000005"
            variant="flat"
            color="success"
          >
            길찾기
          </Button>
        </ButtonGroup>
      </div>
    </div>
  )
}
