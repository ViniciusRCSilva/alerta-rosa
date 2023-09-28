'use client'

import { Topbar } from './components/Topbar'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Topbar />
      {children}
    </>
  )
}