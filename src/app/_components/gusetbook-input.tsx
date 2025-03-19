'use client'

import { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useAddGuestbook } from '@/hooks/use-guestbook'
import { Modal, ModalBody, ModalContent } from '@heroui/modal'
import { GuestBookIcon } from '@/components/essential'
import { Card, CardBody } from '@heroui/card'
import { Spacer } from '@heroui/spacer'
import { Input, Textarea } from '@heroui/input'
import { Button } from '@heroui/button'

// ✅ Zod 스키마 정의
const guestbookSchema = z.object({
  name: z.string().min(1, '이름을 입력해주세요.'),
  phone: z
    .string()
    .min(1, '연락처를 입력해주세요.')
    .regex(/^01[016789]-?\d{3,4}-?\d{4}$/, '올바른 연락처 형식이 아닙니다.'),
  message: z.string().min(1, '메시지를 입력해주세요')
})

export const GuestbookInputModal = ({ isOpen, onOpenChange, openListModal }) => {
  const nameInputRef = useRef(null)
  const addEntryMutation = useAddGuestbook()

  // ✅ `useForm` 사용
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(guestbookSchema)
  })

  // ✅ 모달이 열릴 때 첫 번째 입력 필드 자동 포커스
  useEffect(() => {
    if (isOpen) nameInputRef.current?.focus()
  }, [isOpen])

  // ✅ 제출 핸들러
  const onSubmit = async (data) => {
    try {
      await addEntryMutation.mutateAsync(data)
      alert('소중한 메시지가 등록되었습니다! 함께하는 이 순간을 더욱 빛내주셔서 감사합니다.')
      reset()
      onOpenChange(false) // 입력 모달 닫기
      openListModal() // ✅ 작성 성공 후 리스트 모달 띄우기
    } catch {
      alert('메시지 등록에 실패했습니다. 다시 한 번 시도해 주세요.')
    }
  }

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
        {() => (
          <ModalBody className="relative p-0 pt-16 w-full flex flex-col items-center justify-center">
            <div className="absolute -top-0 z-50">
              <GuestBookIcon />
            </div>
            <Card fullWidth className="bg-[#0088A9]">
              <CardBody className="w-full flex flex-col items-center justify-center gap-4">
                <Spacer y={12} />
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="w-full flex flex-col items-center justify-center gap-4"
                >
                  <Input
                    ref={nameInputRef} // ✅ 첫 번째 입력 필드 포커스 유지
                    size="lg"
                    classNames={{
                      inputWrapper: 'bg-[#FFE5EF]',
                      input: 'font-cafe24 text-lg placeholder:text-[#0088A9] text-center'
                    }}
                    placeholder="이름을 남겨주세요"
                    {...register('name')}
                    isInvalid={!!errors.name}
                    errorMessage={errors.name?.message}
                  />

                  <Input
                    size="lg"
                    classNames={{
                      inputWrapper: 'bg-[#FFE5EF]',
                      input: 'font-cafe24 text-lg placeholder:text-[#0088A9] text-center'
                    }}
                    placeholder="연락받으실 곳을 남겨주세요"
                    {...register('phone')}
                    isInvalid={!!errors.phone}
                    errorMessage={errors.phone?.message}
                  />

                  <Textarea
                    minRows={4}
                    classNames={{
                      inputWrapper: 'bg-[#FFE5EF]',
                      input: 'font-cafe24 text-lg placeholder:text-[#0088A9]'
                    }}
                    placeholder="메세지를 전해주세요"
                    {...register('message')}
                    isInvalid={!!errors.message}
                    errorMessage={errors.message?.message}
                  />

                  <Button
                    fullWidth
                    size="lg"
                    color="danger"
                    className="h-12 font-cafe24"
                    type="submit"
                    isLoading={isSubmitting}
                  >
                    작성완료
                  </Button>
                </form>
              </CardBody>
            </Card>
          </ModalBody>
        )}
      </ModalContent>
    </Modal>
  )
}
