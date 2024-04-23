#!/usr/bin/node
// Script to count the number of films featuring the character Wedge Antilles (character ID 18).

const request = require('request');

if (process.argv.length !== 3) {
  console.error('Usage: ./4-starwars_count.js <API URL>');
  process.exit(1);
}

const apiUrl = process.argv[2];

request(apiUrl, { json: true }, (error, response, body) => {
  if (error) {
    return console.log(error);
  }

  if (response.statusCode !== 200) {
    return console.log('Failed to retrieve data from API');
  }

  let count = 0;
  const films = body.results;

  films.forEach(film => {
    const characters = film.characters;
    if (characters.includes(`https://swapi-api.alx-tools.com/api/people/18/`)) {
      count++;
    }
  });

  console.log(count);
});
