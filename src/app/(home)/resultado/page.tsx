'use client'
import UseAuth from '@/service/hooks/useAuth'
import UseQuestions from '@/service/hooks/useQuestions'
import { useEffect, useState } from 'react'
import { RenderMensageProps, renderMensage } from './helper/renderMessage'

export default function Resultado() {
  const { user } = UseAuth()
  const { getAnswers, answers } = UseQuestions()
  const [message, setMessage] = useState<RenderMensageProps>()

  useEffect(() => {
    if (user?.email) {
      getAnswers(user.email)
    }
  }, [user])

  useEffect(() => {
    if (answers) {
      setMessage(renderMensage(answers))
    }
  }, [answers])

  return (
    <main>
      <div
        className="flex flex-col items-start justify-start h-screen w-full p-1 md:p-10 lg:p-20
          text-white 
          bg-[url('../../public/mobile_main_content.svg')]
          lg:bg-[url('../../public/main_content.svg')] bg-no-repeat bg-center bg-cover"
      >
        <div className="gap-10 h-full w-full flex flex-col items-center lg:items-start justify-center animate-screenOpacity">
          <h1 className="text-4xl md:text-8xl font-semibold uppercase">
            Seu Resultado
          </h1>
          <h2
            className={`text-xl md:text-4xl font-semibold uppercase ${
              message?.value === 'red'
                ? 'text-red-500'
                : message?.value === 'orange'
                ? 'text-orange-500'
                : 'text-green-500'
            }`}
          >
            {message?.value}
          </h2>
          <span className="block md:w-3/4 font-light text-center lg:text-justify text-lg lg:text-2xl px-8 lg:p-0">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
            aliquam accusamus autem necessitatibus distinctio reiciendis dolore
            eius, neque sed fuga velit aperiam quae rem iure accusantium
            laboriosam consequatur eum quas!
          </span>
          <button className="h-12 w-60 flex items-center justify-center p-5 bg-white rounded-full text-pink transition-all border-2 border-transparent hover:border-pink">
            Visualizar Violentômetro
          </button>
        </div>
      </div>
    </main>
  )
}
