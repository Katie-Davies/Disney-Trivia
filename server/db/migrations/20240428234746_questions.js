/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function up(knex) {
  return knex.schema.createTable('questions', (table) => {
    table.increments('id').primary()
    table.string('question_text')
    table.string('image_url')
    table.string('correct_answer')
    table.string('option1')
    table.string('option2')
    table.string('option3')
    table.string('option4')
    table.string('character_id').references('characters.id')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('questions')
}
