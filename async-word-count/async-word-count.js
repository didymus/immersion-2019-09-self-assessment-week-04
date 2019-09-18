/**
 * Depending on how you run this file you might need to pass 'absolute paths' to getTotalWordCount:
 * Ex: absolute path: "/Users/bob/path/to/assessment/async-word-count/files/fileOne.txt"
       relative path: "./files/fileOne.txt
 * Check the documentation for node's `path.resolve`
 */

const fs = require('fs');
const path = require('path');

const getWordCount = (filePath, callback) => {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      callback(err, null);
      return;
    }

    const wordCount = data.trim().split(' ').length;
    callback(null, wordCount);
  });
};

const getTotalWordCount = (filePathOne, filePathTwo, callback) => {
  // YOUR CODE HERE
};


module.exports = getTotalWordCount;
