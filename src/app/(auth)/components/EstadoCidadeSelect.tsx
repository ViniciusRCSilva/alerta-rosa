'use client'
import { useEffect, useState } from 'react'
import data from './data.json'
import { MapPin, MapTrifold } from '@phosphor-icons/react'
import { UseFormRegisterReturn } from 'react-hook-form'

interface Estado {
  sigla: string
  nome: string
  cidades: string[]
}

interface EstadoCidadeSelectsProps {
  state: UseFormRegisterReturn<'state'>
  city: UseFormRegisterReturn<'city'>
}

export function EstadoCidadeSelects(props: EstadoCidadeSelectsProps) {
  const [estadoAtivo, setEstadoAtivo] = useState('AC')
  const [cidadeAtiva, setCidadeAtiva] = useState<Estado | null>(null)
  const estados = data.estados

  console.log(estadoAtivo)

  useEffect(() => {
    setEstadoAtivo('AC')
    const cidadeSelecionada = estados.find((cid) => estadoAtivo === cid.sigla)

    cidadeSelecionada && setCidadeAtiva(cidadeSelecionada)
  }, [estadoAtivo, estados])

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row items-center rounded-full border-2 p-2 px-5 border-pink bg-white">
        <MapTrifold className="text-2xl text-pink" />
        <select className="px-2 focus:outline-none">
          <option disabled>Selecione um estado</option>
          {estados.map((estado) => (
            <option key={estado.sigla} value={estado.sigla}>
              {estado.nome}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-row items-center rounded-full border-2 p-2 px-5 border-pink bg-white">
        <MapPin className="text-2xl text-pink" />
        <select className="px-2 focus:outline-none" {...props.city}>
          <option>Selecione uma cidade</option>
          {cidadeAtiva?.cidades.map((cid, index) => {
            return (
              <option key={index} value={cid}>
                {cid}
              </option>
            )
          })}
        </select>
      </div>
    </div>
  )
}
