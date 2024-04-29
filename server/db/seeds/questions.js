/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    {id: 1, colName: 'rowValue1'},
    {id: 2, colName: 'rowValue2'},
    {id: 3, colName: 'rowValue3'}
    {'In which Disney movie does Mickey Mouse appear?', 'Fantasia', 'Steamboat Willie', 'The Sorcerer''s Apprentice', 'Fantasia 2000', 'Mickey''s Once Upon a Christmas', 1},
    {'Where does Cinderella live?', 'Cinderella Castle', 'Beast''s Castle', 'Arendelle Castle', 'Elsa''s Ice Palace', 'Agrabah Palace', 5},
    {'What is Donald Duck''s residence?', 'Duckburg', 'Goofy''s Playhouse', 'Mickey''s Toontown', 'Arendelle', 'The Dwarfs'' Cottage', 3},
    {'Which Disney character lives in Mickey''s Toontown?', 'Minnie Mouse', 'Donald Duck', 'Goofy', 'Cinderella', 'Snow White', 2};
    {'Which Disney character sings "Let It Go"?', 'Elsa', 'Anna', 'Moana', 'Rapunzel', 'Merida', 6},
    {'What is the name of Moana''s pet rooster?', 'Heihei', 'Pua', 'Kakamora', 'Tamatoa', 'Maui', 7},
    {'Who is the father of Simba in "The Lion King"?', 'Mufasa', 'Scar', 'Timon', 'Rafiki', 'Zazu', 8},
    {'In which Disney movie does Elsa appear?', 'Frozen', 'Tangled', 'Moana', 'Brave', 'Coco', 6};
  ]);
};
