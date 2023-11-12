'use client'
import { AnswersProps, ProviderQuestion } from '@/core/ProviderQuestion'
import { QuestionProps } from '@/core/Question'
import { QuestionProvider } from '@/provider/QuestionProvider'
import { createContext, useState } from 'react'

interface QuestionsContextProps {
  questions: QuestionProps[]
  get(): Promise<void>
  submitAnswer(user: string, answers: AnswersProps[]): Promise<void>
}

const QuestionsContext = createContext<QuestionsContextProps>({
  questions: [],
  get: async () => Promise.resolve(),
  submitAnswer: async () => Promise.resolve(),
})

export function QuestionsProvider(props: any) {
  const [questions, setQuestions] = useState<QuestionProps[]>([])
  const providerQuestions = new ProviderQuestion(new QuestionProvider())

  async function get() {
    const questions = await providerQuestions.get()
    setQuestions(questions)
  }

  async function submitAnswer(user: string, answers: AnswersProps[]) {
    await providerQuestions.submitAnswer(user, answers)
  }

  return (
    <QuestionsContext.Provider
      value={{
        questions,
        get,
        submitAnswer,
      }}
    >
      {props.children}
    </QuestionsContext.Provider>
  )
}

export default QuestionsContext
