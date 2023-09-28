import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        "pink": "#DC05FF",
        "dark-blue": "#2F2E41",
      },
      boxShadow: {
        'inner-shadow': '-12px 0px 10px 0px rgba(0, 0, 0, 0.25) inset'
      },
      dropShadow: {
        'heartWomen': [
          '0px 0px 21.8700008392334px #B34ABB',
          '0px 0px 43.7400016784668px #B34ABB',
          '0px 0px 153.08999633789062px #B34ABB',
          '0px 0px 306.17999267578125px #B34ABB',
          '0px 0px 524.8800048828125px #B34ABB',
          '0px 0px 918.5399780273438px #B34ABB'
        ] 
      }
    },
  },
  plugins: [],
}
export default config
