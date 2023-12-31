'use client'
import Image from 'next/image'
import { EnvelopeSimple, Password } from '@phosphor-icons/react'
import Link from 'next/link'
import { Icon } from '@chakra-ui/react'
import UseAuth from '@/service/hooks/useAuth'

export default function Login() {
  const { loginGoogle } = UseAuth()

  return (
    <div className="flex flex-col items-center justify-center gap-5 lg:gap-10 animate-screenOpacity">
      <p className="font-bold text-3xl">LOGIN</p>
      <div className="flex flex-col gap-5">
        <div className="flex flex-row items-center rounded-full border-2 p-2 px-5 border-pink bg-white">
          <Icon
            as={EnvelopeSimple}
            height={5}
            width={5}
            fontSize={'2xl'}
            textColor={'#DC05FF'}
          />
          <input
            className="px-2 focus:outline-none"
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="flex flex-row items-center rounded-full border-2 p-2 px-5 border-pink bg-white">
          <Icon
            as={Password}
            height={5}
            width={5}
            fontSize={'2xl'}
            textColor={'#DC05FF'}
          />
          <input
            className="px-2 focus:outline-none"
            type="password"
            placeholder="Senha"
            required
          />
        </div>
      </div>
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
      <div className="flex flex-row items-center gap-4">
        <div className="h-1 px-14 bg-pink rounded-full" />
        <p>ou</p>
        <div className="h-1 px-14 bg-pink rounded-full" />
      </div>
      <button
        onClick={loginGoogle}
        className="flex flex-row items-center gap-4 p-2 px-5 border-2 border-dark-blue bg-white rounded-full"
      >
        <Image src={'google_icon.svg'} alt="google" height={25} width={25} />
        Entrar com Google
      </button>
    </div>
  )
}
