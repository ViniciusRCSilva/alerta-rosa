import { AnswersProps } from '@/core/ProviderQuestion'

export interface RenderMensageProps {
  value: string
  message: string
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

  const maxValue = percentages.reduce((prev, current) =>
    prev > current ? prev : current,
  )

  if (maxValue === 0) {
    return {
      value: 'green',
      message: 'Provavelmente não corre risco de agressão!',
      redPercentage,
      orangePercentage,
      yellowPercentage,
    }
  } else {
    if (maxValue === redPercentage) {
      return {
        value: 'red',
        message: 'Alerta! Vida em perigo. Procure ajuda!',
        redPercentage,
        orangePercentage,
        yellowPercentage,
      }
    } else if (maxValue === orangePercentage) {
      return {
        value: 'orange',
        message: 'Tenha cuidado! Reaja! A violência pode aumentar.',
        redPercentage,
        orangePercentage,
        yellowPercentage,
      }
    } else if (maxValue === yellowPercentage) {
      return {
        value: 'yellow',
        message: 'Reaja, você está em risco, procure ajuda!',
        redPercentage,
        orangePercentage,
        yellowPercentage,
      }
    } else {
      return {
        value: 'normal',
        message: 'Alerta! Vida em perigo. Procure ajuda!',
        redPercentage,
        orangePercentage,
        yellowPercentage,
      }
    }
  }
}
