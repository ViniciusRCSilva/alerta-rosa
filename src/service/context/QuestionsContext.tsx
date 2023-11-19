'use client'
import { AnswersProps, ProviderQuestion } from '@/core/ProviderQuestion'
import { QuestionProps } from '@/core/Question'
import { QuestionProvider } from '@/provider/QuestionProvider'
import { createContext, useState } from 'react'

interface QuestionsContextProps {
  questions: QuestionProps[]
  answers: AnswersProps[] | null
  get(): Promise<void>
  submitAnswer(user: string, answers: AnswersProps[]): Promise<void>
  getAnswers(user: string): Promise<void>
}

const QuestionsContext = createContext<QuestionsContextProps>({
  questions: [],
  answers: [],
  get: async () => Promise.resolve(),
  submitAnswer: async () => Promise.resolve(),
  getAnswers: async () => Promise.resolve(),
})

export function QuestionsProvider(props: any) {
  const [questions, setQuestions] = useState<QuestionProps[]>([])
  const [answers, setAnswers] = useState<AnswersProps[] | null>([])
  const providerQuestions = new ProviderQuestion(new QuestionProvider())

  async function get() {
    const questions = await providerQuestions.get()
    setQuestions(questions)
  }

  async function submitAnswer(user: string, answers: AnswersProps[]) {
    await providerQuestions.submitAnswer(user, answers)
  }

  async function getAnswers(user: string) {
    const answers = await providerQuestions.getAnswers(user)
    setAnswers(answers)
  }

  return (
    <QuestionsContext.Provider
      value={{
        questions,
        get,
        submitAnswer,
        getAnswers,
        answers,
      }}
    >
      {props.children}
    </QuestionsContext.Provider>
  )
}

export default QuestionsContext
