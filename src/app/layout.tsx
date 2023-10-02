import './globals.css'
import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import { ChakraProvider } from '@chakra-ui/react'

const lexend = Lexend({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alerta Rosa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  )
}
