'use client'
import Image from 'next/image'
import Link from 'next/link'

import { IconMenu } from './IconMenu'
import { DrawerProfile } from './DrawerProfile'

export function Header() {
  return (
    <div className="fixed h-16 w-full py-2 px-10 bg-[rgba(51,51,48,0.4)] lg:backdrop-blur-md">
      <div className="flex flex-row w-full items-center justify-between">
        <Link href="/">
          <Image src={'mini_logo.svg'} alt="logo" height={50} width={50} />
        </Link>

        <div className="hidden lg:flex flex-row items-center justify-center text-white gap-5">
          <Link href="/">Formulário</Link>
          <Link href="">Opção</Link>
          <Link href="">Opção</Link>
          <DrawerProfile />
        </div>
        <div className="flex lg:hidden flex-row text-white gap-5">
          <IconMenu />
        </div>
      </div>
    </div>
  )
}
