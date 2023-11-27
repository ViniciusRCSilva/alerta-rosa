'use client'
import { AnswersProps } from '@/core/ProviderQuestion'
import UseAuth from '@/service/hooks/useAuth'
import UseQuestions from '@/service/hooks/useQuestions'
import { Progress } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

export default function Form() {
  const { get, questions, submitAnswer } = UseQuestions()
  const { user } = UseAuth()
  const { push } = useRouter()
  const [answers, setAnswers] = useState<AnswersProps[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  function handleGetAnswer(answer: boolean) {
    const questionAnswer: AnswersProps = {
      id: `${questions[currentIndex].id}`,
      categorie: questions[currentIndex].categorie,
      answer,
    }

    const alreadyAnswered = answers.find(
      (answer) => answer.id === questionAnswer.id,
    )

    if (alreadyAnswered) {
      const newAnswers = answers.filter(
        (answer) => answer.id !== `${questions[currentIndex].id}`,
      )
      setAnswers([...newAnswers, questionAnswer])
      return
    }

    setAnswers((answers) => [...answers, questionAnswer])
  }

  function handleNextQuestions() {
    setCurrentIndex((currentIndex) => {
      if (currentIndex < questions.length - 1) {
        return currentIndex + 1
      } else {
        return currentIndex
      }
    })
  }

  function handlePreviousQuestions() {
    setCurrentIndex((currentIndex) => Math.max(currentIndex - 1, 0))
  }

  useEffect(() => {
    get()
  }, [])

  return (
    <div
      className="h-screen w-full text-white flex flex-col items-start justify-start
        bg-[url('../../public/mobile_main_content.svg')]
        lg:bg-[url('../../public/main_content.svg')] bg-no-repeat bg-center bg-cover"
    >
      <div className="mt-24 w-full flex items-center justify-start">
        <Progress
          colorScheme="pink"
          size="md"
          value={
            currentIndex + 1 === questions.length
              ? 100
              : (currentIndex / questions.length) * 100
          }
          h={5}
          className="w-96 ml-10 rounded-full"
        />
        <span className="mx-5 text-2xl font-semibold">
          {questions.length ? currentIndex + 1 : 0}/{questions.length}
        </span>
      </div>
      <div className="h-96 w-full py-10 px-20 text-xl flex items-start lg:items-center text-center justify-center overflow-y-auto animate-screenOpacity">
        <p className="text-4xl">{questions[currentIndex]?.enunciation}</p>
      </div>
      <div className="fixed bottom-0 h-44 w-full flex items-center justify-between bg-white text-dark-blue shadow-form-shadow">
        <button
          onClick={handlePreviousQuestions}
          className="ml-5 flex items-center justify-between text-base lg:text-xl cursor-pointer"
        >
          <div className="text-lg lg:text-4xl text-pink">
            <HiChevronLeft />
          </div>
          <p className="font-light">Voltar</p>
        </button>
        <div
          className={`w-36 lg:w-96 flex items-center ${
            currentIndex + 1 === questions.length
              ? 'justify-center'
              : 'justify-between'
          }`}
        >
          {currentIndex + 1 === questions.length ? (
            <>
              {' '}
              <button
                onClick={() => {
                  submitAnswer(user?.email ?? '', answers)
                  push('/resultado')
                }}
                className="h-12 w-36 lg:w-48 flex items-center justify-center border-2 border-pink text-pink rounded-full font-bold cursor-pointer transition-all opacity-60 hover:opacity-100"
              >
                Enviar questionário
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  handleGetAnswer(true)
                  handleNextQuestions()
                }}
                className="h-10 w-16 lg:w-32 flex items-center justify-center border-2 border-pink text-pink rounded-full font-bold cursor-pointer transition-all opacity-60 hover:opacity-100"
              >
                Sim
              </button>
              <button
                onClick={() => {
                  handleGetAnswer(false)
                  handleNextQuestions()
                }}
                className="h-10 w-16 lg:w-32 flex items-center justify-center border-2 border-pink text-pink rounded-full font-bold cursor-pointer transition-all opacity-60 hover:opacity-100"
              >
                Não
              </button>
            </>
          )}
        </div>
        <button
          onClick={handleNextQuestions}
          className="mr-5 flex items-center justify-between text-base lg:text-xl cursor-pointer"
        >
          <p className="font-light">Continuar</p>
          <div className="text-lg lg:text-4xl text-pink">
            <HiChevronRight />
          </div>
        </button>
      </div>
    </div>
  )
}
