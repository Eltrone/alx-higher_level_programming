#!/usr/bin/node

const fs = require('fs');

// Function to read and print the content of a file
function readFileContent (filePath) {
  fs.readFile(filePath, 'utf-8', (error, data) => {
    if (error) {
      console.error(error);
    } else {
      console.log(data);
    }
  });
}

// Get the file path from the command line arguments
const filePath = process.argv[2];

// Check if a file path is provided
if (filePath) {
  // Read and print the content of the file
  readFileContent(filePath);
} else {
  console.error('Usage: ./0-readme.js <file-path>');
}
