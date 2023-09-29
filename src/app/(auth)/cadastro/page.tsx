'use client'
import Image from 'next/image'
import { EnvelopeSimple, Password } from '@phosphor-icons/react'
import Link from 'next/link'

export default function Register() {
  return (
      <div className='flex flex-col items-center justify-center gap-5 lg:gap-10 animate-screenOpacity'>
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
  )
}
