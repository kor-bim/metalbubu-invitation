'use client'

import { useState, useMemo, useCallback } from 'react'
import { Button } from '@heroui/button'
import Image from 'next/image'
import butterFlyImg from '@public/butterfly.webp'
import { Modal, ModalContent, useDisclosure } from '@heroui/modal'
import { Card, CardBody } from '@heroui/card'
import { Divider } from '@heroui/divider'
import { Snippet } from '@heroui/snippet'

export const AccountSection = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [selectedSide, setSelectedSide] = useState<'groom' | 'bride' | null>(null)

  // ✅ useMemo를 활용해 데이터 캐싱 (렌더링 시 재생성 방지)
  const accounts = useMemo(
    () => ({
      groom: [
        { name: '박병주', bank: '국민은행', account: '123-456-789' },
        { name: '혼주 박봉래', bank: '신한은행', account: '987-654-321' },
        { name: '혼주 오미연', bank: '우리은행', account: '456-789-123' }
      ],
      bride: [
        { name: '이은총', bank: '하나은행', account: '321-654-987' },
        { name: '혼주 이종헌', bank: '농협은행', account: '654-987-321' },
        { name: '혼주 강혜숙', bank: '기업은행', account: '789-123-456' }
      ]
    }),
    []
  )

  // ✅ useCallback으로 openModal 함수 최적화 (불필요한 재생성 방지)
  const openModal = useCallback(
    (side: 'groom' | 'bride') => {
      setSelectedSide(side)
      onOpen()
    },
    [onOpen]
  )

  // ✅ useMemo로 selectedAccounts 최적화 (불필요한 렌더링 방지)
  const selectedAccounts = useMemo(() => (selectedSide ? accounts[selectedSide] : []), [selectedSide, accounts])

  return (
    <div className="relative w-full flex flex-col items-center justify-center px-4 bg-[url(/background.webp)] bg-no-repeat bg-cover">
      {/* 버튼 */}
      <div className="absolute w-full flex items-center justify-center gap-8 px-14">
        <Button
          fullWidth
          size="lg"
          className="h-12 bg-[#DCFFF7] font-cafe24 text-xl text-[#0088A9]"
          onPress={() => openModal('groom')}
        >
          신랑측
        </Button>
        <Button
          fullWidth
          size="lg"
          className="h-12 bg-[#DCFFF7] font-cafe24 text-xl text-[#0088A9]"
          onPress={() => openModal('bride')}
        >
          신부측
        </Button>
      </div>

      {/* 배경 이미지 */}
      <Image src={butterFlyImg} alt="butterfly" />

      {/* 모달 */}
      <Modal
        size="2xl"
        placement="bottom-center"
        backdrop="transparent"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{ closeButton: 'z-50 text-white' }}
      >
        <ModalContent className="relative flex flex-col items-center justify-center gap-4 p-8 bg-black bg-opacity-[31%]">
          {selectedAccounts.map((account, index) => (
            <Card key={index} fullWidth shadow="none">
              <CardBody className="w-full flex flex-col items-center justify-center gap-2 bg-[#E4FFF9] p-4 rounded-xl">
                <span className="font-cafe24 text-2xl text-[#0088A9]">{account.name}</span>
                <Divider className="h-[2px] bg-[#0088A9]" />
                <div className="w-full flex flex-col items-center justify-center mt-2">
                  <span className="font-cafe24air text-[#0088A9]">{account.bank}</span>
                  <Snippet
                    size="lg"
                    hideSymbol
                    tooltipProps={{
                      content: '계좌번호 복사'
                    }}
                    classNames={{
                      pre: 'font-cafe24air text-[#0088A9]',
                      copyButton: '[&>*]:stroke-[#0088A9]'
                    }}
                    className="bg-transparent ms-3 py-0"
                  >
                    {account.account}
                  </Snippet>
                </div>
              </CardBody>
            </Card>
          ))}
        </ModalContent>
      </Modal>
    </div>
  )
}
