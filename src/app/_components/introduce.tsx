import Image from 'next/image'
import introduceImg from '@public/introduce.png'
import addressImg from '@public/address.png'

export const IntroduceSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="relative w-full flex flex-col items-center justify-center">
        <div className="absolute top-[33.5%] left-[50%] -translate-x-1/2 z-20 w-full flex flex-col items-center justify-center gap-8 text-white">
          <div className="relative w-[60%] flex items-center justify-center">
            <div className="w-full flex flex-col items-center justify-center gap-2">
              <span className="text-[0.5rem]  font-bold">박봉래&오미연의 장남</span>
              <span className="text-[1em] font-bold">박병주</span>
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-2">
              <span className="text-[0.5rem] font-bold">이종현&강혜숙의 차녀</span>
              <span className="text-[1rem] font-bold">이은총</span>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-2">
            <span className="text-[0.5rem] font-bold">서로 맞잡은 두 손</span>
            <span className="text-[0.5rem] font-bold">끊없이 펼쳐진 새로운 모험</span>
          </div>
          <span className="text-[0.5rem] font-bold">그 첫걸음에 함께해 주세요</span>
        </div>
        <div className="relative w-full">
          <Image src={introduceImg} alt="introduceImg" className="w-full h-auto object-contain" />
        </div>
        <div className="absolute bottom-10 left-[50%] -translate-x-1/2 z-20 w-[70%]">
          <Image src={addressImg} alt="address" />
        </div>
      </div>
    </div>
  )
}
