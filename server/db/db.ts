import connection from './connection.ts'

import { Players } from '../../models/player.ts'

const db = connection

// get all questions
export async function getAllQuestions() {
  return db('questions').select()
}

// get leadership board
export async function getLeadershipBoard() {
  return db('leaderhip').select()
}

//add player to leadership
export async function addPlayer(data: Players) {
  return db('leadership').insert(data)
}
