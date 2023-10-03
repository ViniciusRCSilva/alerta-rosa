import Image from 'next/image'
import Link from 'next/link'
import { UserCircle, UserCirclePlus } from '@phosphor-icons/react'

export function Header() {
  return (
    <div className="fixed w-full bg-[rgba(51,51,48,0.4)] backdrop-blur-md">
      <div className="flex flex-row h-16 py-2 px-10 w-full items-center justify-between">
        <Link href="/sobreNos">
          <Image src={'mini_logo.svg'} alt="logo" height={50} width={50} />
        </Link>

        <div className="flex flex-row text-white gap-5">
          <Link href="/login" className="flex items-center gap-2">
            <UserCircle className="text-2xl lg:text-3xl" />
            Entrar
          </Link>
          <Link href="/cadastro" className="flex items-center gap-2">
            <UserCirclePlus className="text-2xl lg:text-3xl" />
            Cadastrar
          </Link>
        </div>
      </div>
    </div>
  )
}
