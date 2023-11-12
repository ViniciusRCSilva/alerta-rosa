import './globals.css'
import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import { ChakraProvider } from '@chakra-ui/react'

import { AuthProvider } from '../service/context/AuthContext'
import { QuestionsProvider } from '../service/context/QuestionsContext'

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
        <AuthProvider>
          <QuestionsProvider>
            <ChakraProvider>{children}</ChakraProvider>
          </QuestionsProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
