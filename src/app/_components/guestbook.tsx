'use client'

import { GuestBookIcon } from '@/components/essential'
import { Card, CardBody } from '@heroui/card'
import { Button } from '@heroui/button'
import { Spacer } from '@heroui/spacer'
import { useDisclosure } from '@heroui/modal'
import { GuestbookInputModal } from './gusetbook-input'
import { GuestbookListModal } from '@/app/_components/guestbook-list'

export const GuestBookSection = () => {
  // 방명록 작성 모달
  const { isOpen: isInputModalOpen, onOpen: openInputModal, onOpenChange: onInputModalChange } = useDisclosure()

  // 방명록 리스트 모달
  const { isOpen: isListModalOpen, onOpen: openListModal, onOpenChange: onListModalChange } = useDisclosure()

  return (
    <>
      <div className="relative w-full flex flex-col items-center justify-center px-4 mt-8">
        <div className="absolute -top-16 z-50">
          <GuestBookIcon />
        </div>
        <Card fullWidth className="bg-[#0088A9]">
          <CardBody className="w-full flex flex-col items-center justify-center gap-4">
            <Spacer y={12} />
            <Button
              fullWidth
              size="lg"
              className="h-12 bg-[#FFE5EF] font-cafe24 text-xl text-[#0088A9] stroke-text fix-stroke"
              onPress={openInputModal}
            >
              방명록 남기러 가기
            </Button>
            <Button
              fullWidth
              size="lg"
              className="h-12 bg-[#FFE5EF] font-cafe24 text-xl text-[#0088A9] stroke-text fix-stroke"
              onPress={openListModal}
            >
              방명록 전체보기
            </Button>
          </CardBody>
        </Card>
        <GuestbookInputModal
          isOpen={isInputModalOpen}
          onOpenChange={onInputModalChange}
          openListModal={openListModal}
        />
        <GuestbookListModal isOpen={isListModalOpen} onOpenChange={onListModalChange} />
      </div>
    </>
  )
}
