import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Players } from '../../models/player'
import { addPlayer } from '../apis/leadership'

export function useAddPlayer() {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (values: Players) => addPlayer(values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['leaderboard'] })
    },
  })

  return mutation
}
