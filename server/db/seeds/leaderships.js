/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('leadership').del()
  await knex('leadership').insert([
    { id: 1, name: 'Katie', score: 3 },
    { id: 2, name: 'Buddy', score: 5 },
    { id: 3, name: 'Sam', score: 7 },
  ])
}
