import { AnswersProps } from '@/core/ProviderQuestion'

export interface RenderMensageProps {
  value: string
  redPercentage: number
  orangePercentage: number
  yellowPercentage: number
}

export function renderMensage(list: AnswersProps[]): RenderMensageProps {
  const total: number = list.length
  const redQuestions: AnswersProps[] = []
  const orangeQuestions: AnswersProps[] = []
  const yellowQuestions: AnswersProps[] = []

  list.forEach((question) => {
    question.categorie === 'red' && redQuestions.push(question)
    question.categorie === 'yellow' && yellowQuestions.push(question)
    question.categorie === 'orange' && orangeQuestions.push(question)
  })

  const redFilter = redQuestions.filter((question) => question.answer).length
  const orangeFilter = orangeQuestions.filter(
    (question) => question.answer,
  ).length
  const yellowFilter = yellowQuestions.filter(
    (question) => question.answer,
  ).length

  const redPercentage = (redFilter / total) * 100
  const orangePercentage = (orangeFilter / total) * 100
  const yellowPercentage = (yellowFilter / total) * 100
  const percentages = [redPercentage, orangePercentage, yellowPercentage]

  console.log('redFilter :>> ', redFilter)
  console.log('orangeFilter :>> ', orangeFilter)
  console.log('yellowFilter :>> ', yellowFilter)
  console.log('percentages :>> ', percentages)

  const maxValue = percentages.reduce((prev, current) =>
    prev > current ? prev : current,
  )

  if (maxValue === 0) {
    return {
      value: 'invalid',
      redPercentage,
      orangePercentage,
      yellowPercentage,
    }
  } else {
    if (maxValue === redPercentage) {
      return {
        value: 'red',
        redPercentage,
        orangePercentage,
        yellowPercentage,
      }
    } else if (maxValue === orangePercentage) {
      return {
        value: 'orange',
        redPercentage,
        orangePercentage,
        yellowPercentage,
      }
    } else if (maxValue === yellowPercentage) {
      return {
        value: 'yellow',
        redPercentage,
        orangePercentage,
        yellowPercentage,
      }
    } else {
      return {
        value: 'normal',
        redPercentage,
        orangePercentage,
        yellowPercentage,
      }
    }
  }
}
