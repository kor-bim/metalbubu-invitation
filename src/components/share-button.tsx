'use client'

import { Button } from '@heroui/button'
import { KakaoIcons } from '@/components/icons/kakao-icon'

export const ShareButton = () => {
  return (
    <div className="w-full flex items-center justify-center pb-12">
      <Button
        size="lg"
        color="warning"
        className="bg-[#F9E000] text-black font-cafe24air font-semibold"
        onPress={() => {
          window.Kakao.Share.sendCustom({
            templateId: 118552
          })
        }}
        startContent={<KakaoIcons />}
      >
        초대장 공유하기
      </Button>
    </div>
  )
}
