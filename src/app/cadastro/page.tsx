'use client'

import Image from "next/image";

import RegsiterWomen from '../../../public/register_women.svg'
import Logo from '../../../public/logo.svg'
import { EnvelopeSimple, Password } from "@phosphor-icons/react";
import Link from "next/link";

export default function Cadastro() {
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
          <p>Nova</p>
          <p>por aqui?</p>
        </div>

        <Image src={RegsiterWomen} alt="mulher resgistro" className="drop-shadow-heartWomen z-0" />

        <div className="flex flex-col items-center text-2xl font-light z-10">
          <p>Faça aqui sua conta!</p>
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

        {/* Cancelar / Botão avançar */}
        <div className="flex flex-row items-center gap-10">
          <Link 
              href="/login"
              className="text-dark-blue font-light underline"
          >
              Cancelar
          </Link>

          <button className="bg-pink text-white p-2 px-5 rounded-full">
            Avançar
          </button>
        </div>

      {/* Fim da página */}
      </div>
    </main>
  )
}
