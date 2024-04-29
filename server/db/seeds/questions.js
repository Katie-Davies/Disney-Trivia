/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    {
      id: 1,
      question_text: 'In which Disney movie does Mickey Mouse appear?',
      correct_answer: 'Fantasia',
      option1: 'Steamboat Willie',
      option2: 'The Sorcerers Apprentice',
      option3: 'Fantasia 2000',
      option4: 'Mickeys Once Upon a Christmas',
      character_id: 1,
    },
    {
      id: 2,
      question_text: 'Where does Cinderella live?',
      correct_answer: 'Cinderella Castle',
      option1: 'Beasts Castle',
      option2: 'Arendelle Castle',
      option3: 'Elsas Ice Palace',
      option4: 'Agrabah Palace',
      character_id: 5,
    },
    {
      id: 3,
      question_text: 'What is Donald Ducks residence?',
      correct_answer: 'Duckburg',
      option1: 'Goofys Playhouse',
      option2: 'Mickeys Toontown',
      option3: 'Arendelle',
      option4: 'The Dwarfs Cottage',
      character_id: 3,
    },
    {
      id: 4,
      question_text: 'Which Disney character lives in Mickeys Toontown?',
      correct_answer: 'Minnie Mouse',
      option1: 'Donald Duck',
      option2: 'Goofy',
      option3: 'Cinderella',
      option4: 'Snow White',
      character_id: 2,
    },
    {
      id: 5,
      question_text: 'Which Disney character sings "Let It Go"?',
      correct_answer: 'Elsa',
      option1: 'Anna',
      option2: 'Moana',
      option3: 'Rapunzel',
      option4: 'Merida',
      character_id: 6,
    },
    {
      id: 6,
      question_text: 'What is the name of Moanas pet rooster?',
      correct_answer: 'Heihei',
      option1: 'Pua',
      option2: 'Kakamora',
      option3: 'Tamatoa',
      option4: 'Maui',
      character_id: 7,
    },
    {
      id: 7,
      question_text: 'Who is the father of Simba in "The Lion King"?',
      correct_answer: 'Mufasa',
      option1: 'Scar',
      option2: 'Timon',
      option3: 'Rafiki',
      option4: 'Zazu',
      character_id: 8,
    },
    {
      id: 8,
      question_text: 'In which Disney movie does Elsa appear?',
      correct_answer: 'Frozen',
      option1: 'Tangled',
      option2: 'Moana',
      option3: 'Brave',
      option4: 'Coco',
      character_id: 6,
    },
  ])
}
