'use client'
import {
  EnvelopeSimple,
  Password,
  Phone,
  UserCircle,
} from '@phosphor-icons/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import UseAuth from '@/service/hooks/useAuth'
import { EstadoCidadeSelects } from '../components/EstadoCidadeSelect'
import { useState } from 'react'

const createRegisterFormSchema = z.object({
  name: z.string().nonempty('O nome é obrigatório!'),
  email: z
    .string()
    .nonempty('O e-mail é obrigatório!')
    .email('Formato de e-mail inválido!')
    .toLowerCase(),
  password: z
    .string()
    .nonempty('A senha é obrigatória!')
    .min(8, 'A senha precisa ter no mínimo 8 caracteres!'),
  state: z.string().nonempty('O estado é obrigatório!'),
  city: z.string().nonempty('A cidade é obrigatória!'),
  phone: z.string().nonempty('O telefone é obrigatório!'),
})

type CreateRegisterFormData = z.infer<typeof createRegisterFormSchema>

export default function Register() {
  const [contentView, setContentView] = useState<'part1' | 'part2'>('part1')

  function handleChangeView(view: 'part1' | 'part2') {
    setContentView(view)
  }

  const { submitUser, user, createUserPassword } = UseAuth()
  const { push } = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateRegisterFormData>({
    resolver: zodResolver(createRegisterFormSchema),
  })

  async function handleRegisterSubmit(data: CreateRegisterFormData) {
    if (!user?.email) {
      await createUserPassword(data.email, data.password)
    }
    await submitUser(data)
    push('/')
  }

  return (
    <div className="flex flex-col items-center justify-center gap-5 lg:gap-10 animate-screenOpacity">
      <p className="font-bold text-3xl">CADASTRO</p>
      <form onSubmit={handleSubmit(handleRegisterSubmit)}>
        <>
          {contentView === 'part1' && (
            <>
              <div className="flex items-center justify-center mb-5 gap-2">
                <div className="flex w-10 h-10 items-center justify-center rounded-full p-2 text-lg bg-pink text-white select-none">
                  <p>1</p>
                </div>
                <div className="flex w-2 h-2 rounded-full p-2 text-lg bg-dark-blue opacity-80"></div>
                <div className="flex w-2 h-2 rounded-full p-2 text-lg bg-dark-blue opacity-70"></div>
                <div className="flex w-2 h-2 rounded-full p-2 text-lg bg-dark-blue opacity-60"></div>
                <div className="flex w-10 h-10 items-center justify-center rounded-full p-2 text-lg bg-pink text-white opacity-50 select-none">
                  <p>2</p>
                </div>
              </div>

              <div className="flex flex-col gap-5 animate-screenOpacity">
                <div className="flex flex-row items-center rounded-full border-2 p-2 px-5 border-pink bg-white">
                  <UserCircle className="text-2xl text-pink" />
                  {user?.name ? (
                    <input
                      className="px-2 focus:outline-none"
                      type="text"
                      placeholder="Nome"
                      required
                      value={user.name}
                      readOnly
                      {...register('name')}
                    />
                  ) : (
                    <input
                      className="px-2 focus:outline-none"
                      type="text"
                      placeholder="Nome"
                      required
                      {...register('name')}
                    />
                  )}
                </div>
                {errors.name && <span>{errors.name.message}</span>}
                <div className="flex flex-row items-center rounded-full border-2 p-2 px-5 border-pink bg-white">
                  <EnvelopeSimple className="text-2xl text-pink" />
                  {user?.email ? (
                    <input
                      className="px-2 focus:outline-none"
                      type="email"
                      placeholder="Email"
                      required
                      value={user.email}
                      readOnly
                      {...register('email')}
                    />
                  ) : (
                    <input
                      className="px-2 focus:outline-none"
                      type="email"
                      placeholder="Email"
                      required
                      {...register('email')}
                    />
                  )}
                </div>
                {errors.email && <span>{errors.email.message}</span>}
                <div className="flex flex-row items-center rounded-full border-2 p-2 px-5 border-pink bg-white">
                  <Password className="text-2xl text-pink" />
                  <input
                    className="px-2 focus:outline-none"
                    type="password"
                    placeholder="Senha"
                    required
                    {...register('password')}
                  />
                </div>
                {errors.password && <span>{errors.password.message}</span>}
                <div className="flex flex-row items-center justify-between">
                  <Link
                    href="/login"
                    className="text-dark-blue font-light underline"
                  >
                    Cancelar
                  </Link>
                  <button
                    onClick={() => handleChangeView('part2')}
                    className="bg-pink text-white p-2 px-5 rounded-full"
                  >
                    Avançar
                  </button>
                </div>
              </div>
            </>
          )}
          {contentView === 'part2' && (
            <>
              <div className="flex items-center justify-center mb-5 gap-2">
                <div className="flex w-10 h-10 items-center justify-center rounded-full p-2 text-lg bg-pink opacity-50 text-white select-none">
                  <p>1</p>
                </div>
                <div className="flex w-2 h-2 rounded-full p-2 text-lg bg-dark-blue opacity-60"></div>
                <div className="flex w-2 h-2 rounded-full p-2 text-lg bg-dark-blue opacity-70"></div>
                <div className="flex w-2 h-2 rounded-full p-2 text-lg bg-dark-blue opacity-80"></div>
                <div className="flex w-10 h-10 items-center justify-center rounded-full p-2 text-lg bg-pink text-white select-none">
                  <p>2</p>
                </div>
              </div>

              <div className="flex flex-col gap-5 animate-screenOpacity">
                <EstadoCidadeSelects
                  city={register('city')}
                  state={register('state')}
                />
                {errors.state && <span>{errors.state.message}</span>}
                {errors.city && <span>{errors.city.message}</span>}
                <div className="flex flex-row items-center rounded-full border-2 p-2 px-5 border-pink bg-white">
                  <Phone className="text-2xl text-pink" />
                  <input
                    className="px-2 focus:outline-none"
                    type="number"
                    placeholder="Contato"
                    maxLength={11}
                    required
                  />
                </div>
                {errors.phone && <span>{errors.phone.message}</span>}

                <div className="flex flex-row items-center justify-between">
                  <p
                    onClick={() => handleChangeView('part1')}
                    className="text-dark-blue font-light underline cursor-pointer"
                  >
                    Voltar
                  </p>
                  <button
                    type="submit"
                    className="bg-pink text-white p-2 px-5 rounded-full"
                  >
                    Concluir
                  </button>
                </div>
              </div>
            </>
          )}
        </>
      </form>
    </div>
  )
}
