import { useQuery } from '@tanstack/react-query'

import { getLeadershipBoard } from '../apis/leadership'

export function useGetQuestions() {
  return useQuery({
    queryKey: ['Leaderboard'],
    queryFn: () => getLeadershipBoard(),
  })
}
