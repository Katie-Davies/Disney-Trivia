/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('characters', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('movie_appearances')
    table.string('residence')
    table.string('image_url')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('characters')
}
