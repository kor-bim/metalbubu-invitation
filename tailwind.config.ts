import { heroui } from '@heroui/react'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        cafe24: ['Cafe24Ssurround', 'sans-serif'],
        cafe24air: ['Cafe24SsurroundAir', 'sans-serif']
      },
      screens: {
        xxs: '375px', // 375px 이하의 초소형 기기 (아이폰 SE, 갤럭시 A 시리즈)
        xs: '450px', // 450px 이하의 소형 기기
        'sm-custom': '550px'
      }
    }
  },
  darkMode: 'class',
  plugins: [heroui()]
}
