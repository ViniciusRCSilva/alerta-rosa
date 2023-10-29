'use client'
import { EnvelopeSimple, Password } from '@phosphor-icons/react'
import Link from 'next/link'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import UseAuth from '@/service/hooks/useAuth'
import { useEffect, useState } from 'react'
import { UserProps } from '@/core/User'

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
  const { submitUser, user, createUserPassword } = UseAuth()
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
    console.log('data :>> ', data)
  }

  return (
    <div className="flex flex-col items-center justify-center gap-5 lg:gap-10 animate-screenOpacity">
      <p className="font-bold text-3xl">CADASTRO</p>
      <form
        onSubmit={handleSubmit(handleRegisterSubmit)}
        className="flex flex-col gap-5"
      >
        <div className="flex flex-row items-center rounded-full border-2 p-2 px-5 border-pink bg-white">
          <EnvelopeSimple className="text-2xl text-pink" />
          {user?.name ? (
            <input
              className="px-2 focus:outline-none"
              type="text"
              placeholder="Name"
              required
              value={user.name}
              readOnly
              {...register('name')}
            />
          ) : (
            <input
              className="px-2 focus:outline-none"
              type="text"
              placeholder="Name"
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
          <EnvelopeSimple className="text-2xl text-pink" />
          <input
            className="px-2 focus:outline-none"
            type="text"
            placeholder="Estado"
            required
            {...register('state')}
          />
        </div>
        {errors.state && <span>{errors.state.message}</span>}
        <div className="flex flex-row items-center rounded-full border-2 p-2 px-5 border-pink bg-white">
          <EnvelopeSimple className="text-2xl text-pink" />
          <input
            className="px-2 focus:outline-none"
            type="text"
            placeholder="Cidade"
            required
            {...register('city')}
          />
        </div>
        {errors.city && <span>{errors.city.message}</span>}
        <div className="flex flex-row items-center rounded-full border-2 p-2 px-5 border-pink bg-white">
          <EnvelopeSimple className="text-2xl text-pink" />
          <input
            className="px-2 focus:outline-none"
            type="text"
            placeholder="Telefone"
            required
            {...register('phone')}
          />
        </div>
        {errors.phone && <span>{errors.phone.message}</span>}
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
        <div className="flex flex-row items-center gap-10">
          <Link href="/login" className="text-dark-blue font-light underline">
            Cancelar
          </Link>
          <button
            type="submit"
            className="bg-pink text-white p-2 px-5 rounded-full"
          >
            Avançar
          </button>
        </div>
      </form>
    </div>
  )
}
