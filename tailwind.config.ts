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
      }
    },
    keyframes: {
      screenOpacity: {
        '0%': { opacity: '0' },
        '100%': { opacity: '100' },
      },
    },
    animation: {
      screenOpacity: 'screenOpacity 0.5s ease-in-out',
    }
  },
  plugins: [],
}
export default config
