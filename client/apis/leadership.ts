import request from 'superagent'
import { Players, PlayersId } from '../../models/player'

const rootUrl = '/api/v1'

export async function getLeadershipBoard() {
  const leadershipBoard = await request.get(`${rootUrl}/leadership`)
  return leadershipBoard.body as PlayersId[]
}

export async function addPlayer(data: Players) {
  return await request.post(`${rootUrl}/leadership`).send(data)
}
