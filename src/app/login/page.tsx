'use client'

import Image from "next/image";

import HeartWomen from '../../../public/heart_women.svg'
import Logo from '../../../public/logo.svg'
import Google from '../../../public/google_icon.svg'
import { EnvelopeSimple, Password } from "@phosphor-icons/react";
import Link from "next/link";

export default function Login() {
  return (
    /* Conteúdo geral */
    <main className="flex flex-row w-full h-screen items-center justify-between">
      {/* Conteúdo da direita */}
      <div 
        className="hidden lg:flex flex-col w-[50%] h-full items-center justify-center gap-10
        text-white
        bg-[url('../../public/left_side_background.svg')] bg-no-repeat bg-center bg-cover shadow-inner-shadow"
      >
        <div className="flex flex-col items-center text-5xl font-bold z-10 gap-2">
          <p>Seja</p>
          <p>Bem-Vinda!</p>
        </div>

        <Image src={HeartWomen} alt="mulher segurando coração" className="drop-shadow-heartWomen z-0" />

        <div className="flex flex-col items-center text-2xl font-light z-10">
          <p>Aqui</p>
          <p>Você importa.</p>
          <p>Sua voz importa.</p>
          <p>Sua vida importa.</p>
        </div>
      </div>

      {/* Conteúdo da direita */}
      <div 
        className="flex flex-col w-full lg:w-[50%] h-full items-center justify-center gap-5 lg:gap-10
        text-dark-blue 
        lg:bg-[url('../../public/right_side_background.svg')] 
        bg-[url('../../public/mobile_background_login.svg')] bg-no-repeat bg-center bg-cover"
      >
        {/* Logo */}
        <Image src={Logo} alt="logo" className="hidden lg:flex" />

        <Image src={Logo} alt="logo" width={200} className="flex lg:hidden" />

        {/* Título */}
        <p className="font-bold text-3xl">LOGIN</p>

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
            <Link 
              href="/cadastro"
              className="text-pink underline"
            >
                Criar conta
              </Link>
          </div>
        </div>

        {/* Separador */}
        <div className="flex flex-row items-center gap-4">
          <div className="h-1 px-14 bg-pink rounded-full"/>
          <p>ou</p>
          <div className="h-1 px-14 bg-pink rounded-full"/>
        </div>

        {/* Botão entrar com Google */}
        <button className="flex flex-row items-center gap-4 p-2 px-5 border-2 border-dark-blue bg-white rounded-full">
          <Image src={Google} alt="google" width={25} />
          Entrar com Google
        </button>

      {/* Fim da página */}
      </div>
    </main>
  )
}
