import { useQuery } from '@tanstack/react-query'
import { getAllQuestions } from '../apis/questions'

export function useGetQuestions() {
  return useQuery({
    queryKey: ['questions'],
    queryFn: () => getAllQuestions(),
  })
}
