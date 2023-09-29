import Image from 'next/image'
import Link from 'next/link'

export function Topbar() {
  return (
    <div className="fixed w-full py-2 px-10 bg-[rgba(51,51,48,0.4)] shadow-md backdrop-blur-md">
      <div className="flex flex-row w-full items-center justify-between">
        <Link href="/">
          <Image src={'mini_logo.svg'} alt="logo" />
        </Link>

        <div className="flex flex-row text-white gap-5">
          <Link href="">Opção</Link>
          <Link href="">Opção</Link>
          <Link href="">Opção</Link>
          <Link href="">Usuário</Link>
        </div>
      </div>
    </div>
  )
}
