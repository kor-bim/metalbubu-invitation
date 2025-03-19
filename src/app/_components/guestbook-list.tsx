'use client'

import { Modal, ModalBody, ModalContent } from '@heroui/modal'
import { GuestBookIcon } from '@/components/essential'
import { Card, CardBody } from '@heroui/card'
import { Spacer } from '@heroui/spacer'
import { Divider } from '@heroui/divider'
import { useGuestbookEntries } from '@/hooks/use-guestbook'
import { Button } from '@heroui/button'

export const GuestbookListModal = ({ isOpen, onOpenChange, openInputModal }) => {
  const { data: entries, isLoading, error } = useGuestbookEntries()

  return (
    <Modal
      size="2xl"
      placement="bottom"
      shadow="none"
      isDismissable={false}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      classNames={{
        closeButton: 'z-50 bg-[#0088A9] hover:bg-[#3A809F] active:bg-[#3A809F] text-white'
      }}
    >
      <ModalContent className="bg-opacity-0">
        {(onClose) => (
          <ModalBody className="relative p-0 pt-16 w-full max-h-[80vh] flex flex-col items-center justify-center">
            <div className="absolute top-0 z-50">
              <GuestBookIcon />
            </div>
            <Card fullWidth className="bg-[#0088A9] w-full max-h-[80vh] flex flex-col">
              <CardBody className="flex flex-col items-center justify-center gap-4 h-full">
                <Spacer y={12} />
                {/* ✅ 스크롤 가능한 영역 - 높이를 80vh 내에서만 사용 */}
                {/* ✅ 로딩 및 에러 상태 처리 */}
                {isLoading && <p className="text-white font-cafe24">로딩 중...</p>}
                {error && <p className="text-red-500 font-cafe24">오류 발생: {error.message}</p>}

                {/* ✅ 방명록 목록 */}
                <div className="w-full overflow-y-auto scrollbar-hide space-y-4 rounded-2xl">
                  {entries?.length > 0 ? (
                    entries.map((entry) => (
                      <Card key={entry.id} fullWidth shadow="none">
                        <CardBody className="w-full flex flex-col items-center justify-center gap-2 bg-[#FFE5EF] p-4 rounded-xl">
                          <span className="font-cafe24 text-[#0088A9]">{entry.name}</span>
                          <Divider className="h-[2px] bg-[#0088A9]" />
                          <p className="w-2/3 text-sm font-cafe24air text-[#0088A9] text-center">{entry.message}</p>
                        </CardBody>
                      </Card>
                    ))
                  ) : (
                    <div className="w-full h-48 flex flex-col items-center justify-center p-6 gap-4">
                      <span className="text-lg font-cafe24 text-[#FFE5EF] text-center">
                        소중한 축하의 한마디를 남겨주세요. 따뜻한 마음이 전해질 거예요! 😊
                      </span>
                      <Button
                        fullWidth
                        size="lg"
                        className="h-12 bg-[#FFE5EF] font-cafe24 text-xl text-[#0088A9] stroke-text fix-stroke"
                        onPress={() => {
                          onClose()
                          openInputModal()
                        }}
                      >
                        방명록 남기러 가기
                      </Button>
                    </div>
                  )}
                </div>
              </CardBody>
            </Card>
          </ModalBody>
        )}
      </ModalContent>
    </Modal>
  )
}
