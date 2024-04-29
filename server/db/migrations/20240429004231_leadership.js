/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('leadership', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.integer('score')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('leadership')
}
