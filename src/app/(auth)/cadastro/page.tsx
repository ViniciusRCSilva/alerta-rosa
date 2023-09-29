'use client'
import Image from 'next/image'
import { EnvelopeSimple, Password } from '@phosphor-icons/react'
import Link from 'next/link'

export default function Register() {
  return (
    <div
      className="flex flex-col w-full lg:w-[50%] h-full items-center justify-center gap-5 lg:gap-10
        text-dark-blue 
        lg:bg-[url('../../public/right_side_background.svg')] 
        bg-[url('../../public/mobile_background_login.svg')] bg-no-repeat bg-center bg-cover"
    >
      {/* Logo */}
      <Image
        src={'logo.svg'}
        alt="logo"
        className="hidden lg:flex"
        height={300}
        width={300}
      />

      <Image
        src={'logo.svg'}
        alt="logo"
        className="flex lg:hidden"
        height={200}
        width={200}
      />

      {/* Título */}
      <p className="font-bold text-3xl">CADASTRO</p>

      {/* Formulário */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-row items-center rounded-full border-2 p-2 px-5 border-pink bg-white">
          <EnvelopeSimple className="text-2xl text-pink" />
          <input
            className="px-2 focus:outline-none"
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="flex flex-row items-center rounded-full border-2 p-2 px-5 border-pink bg-white">
          <Password className="text-2xl text-pink" />
          <input
            className="px-2 focus:outline-none"
            type="password"
            placeholder="Senha"
            required
          />
        </div>
      </div>

      {/* Botão entrar / Link para criar conta */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-10">
        <button className="bg-pink text-white p-2 px-5 rounded-full">
          Entrar
        </button>

        <div className="flex flex-col items-center lg:items-end">
          <p className="font-light">Não tem uma conta?</p>
          <Link href="/cadastro" className="text-pink underline">
            Criar conta
          </Link>
        </div>
      </div>

      {/* Separador */}
      <div className="flex flex-row items-center gap-4">
        <div className="h-1 px-14 bg-pink rounded-full" />
        <p>ou</p>
        <div className="h-1 px-14 bg-pink rounded-full" />
      </div>

      {/* Botão entrar com Google */}
      <button className="flex flex-row items-center gap-4 p-2 px-5 border-2 border-dark-blue bg-white rounded-full">
        <Image src={'google_icon.svg'} alt="google" height={25} width={25} />
        Entrar com Google
      </button>

      {/* Fim da página */}
    </div>
  )
}
