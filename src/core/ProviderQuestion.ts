import { QuestionProps } from './Question'

export interface AnswersProps {
  id: string
  categorie: string
  answer: boolean
}

export interface ProviderQuestionProps {
  create(): Promise<void>
  get(): Promise<QuestionProps[]>
  submitAnswer(user: string, answer: AnswersProps[]): Promise<void>
}

export class ProviderQuestion {
  private _providerRoom: ProviderQuestionProps

  constructor(provider: ProviderQuestionProps) {
    this._providerRoom = provider
  }

  async create(): Promise<void> {
    await this._providerRoom.create()
  }

  async get(): Promise<QuestionProps[]> {
    const questions = await this._providerRoom.get()

    return questions
  }

  async submitAnswer(user: string, answers: AnswersProps[]) {
    await this._providerRoom.submitAnswer(user, answers)
  }
}
