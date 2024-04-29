import { useQuery } from '@tanstack/react-query'

import { getLeadershipBoard } from '../apis/leadership'

export function useGetLeaders() {
  return useQuery({
    queryKey: ['Leaderboard'],
    queryFn: () => getLeadershipBoard(),
  })
}
