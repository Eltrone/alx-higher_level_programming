#!/usr/bin/node

const fs = require('fs');

// Fonction pour écrire chaîne de caractères dans fonction
function writeToFile (filePath, content) {
  fs.writeFile(filePath, content, 'utf-8', (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log(`Content written to ${filePath}`);
    }
  });
}

// Récupérer les chemins du fichier et le contenu à écrire à partir des arguments de la ligne de commande
const filePath = process.argv[2];
const content = process.argv[3];

// Vérifier si les chemins du fichier et le contenu sont fournis en tant qu'arguments
if (filePath && content) {
  // Écrire le contenu dans le fichier
  writeToFile(filePath, content);
} else {
  console.error('Usage: ./1-writeme.js <file-path> <content>');
}
