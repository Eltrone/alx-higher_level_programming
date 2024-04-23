#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const movie = JSON.parse(body);
    const charactersUrls = movie.characters;

    // Fonction récursive pour afficher les personnages dans le bon ordre
    const printCharacters = (index) => {
      if (index >= charactersUrls.length) {
        return;
      }
      request(charactersUrls[index], (error, response, body) => {
        if (error) {
          console.error(error);
        } else {
          const character = JSON.parse(body);
          console.log(character.name);
          printCharacters(index + 1); // Appel récursif pour passer au personnage suivant
        }
      });
    };

    // Commencer par le premier personnage
    printCharacters(0);
  }
});
