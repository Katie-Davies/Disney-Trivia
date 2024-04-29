/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('characters').del()

  // Inserts seed entries
  await knex('characters').insert([
    {
      id: 1,
      name: 'Mickey Mouse',
      movie_appearances: 'Fantasia, Steamboat Willie, The Sorcerers Apprentice',
      residence: 'Mickeys Toontown',
      image_url: 'https://example.com/mickey_mouse.jpg',
    },
    {
      id: 2,
      name: 'Minnie Mouse',
      movie_appearances:
        'Fantasia, Mickey, Donald, Goofy: The Three Musketeers',
      residence: 'Mickeys Toontown',
      image_url: 'https://example.com/minnie_mouse.jpg',
    },
    {
      id: 3,
      name: 'Donald Duck',
      movie_appearances:
        'The Three Caballeros, Mickey, Donald, Goofy: The Three Musketeers',
      residence: 'Duckburg',
      image_url: 'https://example.com/donald_duck.jpg',
    },
    {
      id: 4,
      name: 'Goofy',
      movie_appearances:
        'A Goofy Movie, Mickey, Donald, Goofy: The Three Musketeers',
      residence: 'Goofys Playhouse',
      image_url: 'https://example.com/goofy.jpg',
    },
    {
      id: 5,
      name: 'Cinderella',
      movie_appearances:
        'Cinderella, Cinderella II: Dreams Come True, Cinderella III: A Twist in Time',
      residence: 'Cinderella Castle',
      image_url: 'https://example.com/cinderella.jpg',
    },
    {
      id: 6,
      name: 'Snow White',
      movie_appearances: 'Snow White and the Seven Dwarfs',
      residence: 'The Dwarfs Cottage',
      image_url: 'https://example.com/snow_white.jpg',
    },
    {
      id: 7,
      name: 'Elsa',
      movie_appearances: 'Frozen, Frozen II',
      residence: 'Arendelle Castle',
      image_url: 'https://example.com/elsa.jpg',
    },
    {
      id: 8,
      name: 'Moana',
      movie_appearances: 'Moana',
      residence: 'Motunui Island',
      image_url: 'https://example.com/moana.jpg',
    },
    {
      id: 9,
      name: 'Simba',
      movie_appearances: 'The Lion King, The Lion King II: Simbas Pride',
      residence: 'Pride Rock',
      image_url: 'https://example.com/simba.jpg',
    },
  ])
}
