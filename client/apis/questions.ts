import request from 'superagent'
import { Questions } from '../../models/questions'

const rootUrl = '/api/v1'

export async function getAllQuestions() {
  const questions = await request.get(`${rootUrl}/questions`)
  return questions.body as Questions[]
}
