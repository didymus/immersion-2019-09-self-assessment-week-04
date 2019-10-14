/**
 * Depending on how you run this file you might need to pass 'absolute paths' to getTotalWordCount:
 * Ex: absolute path: "/Users/bob/path/to/assessment/async-word-count/files/fileOne.txt"
       relative path: "./files/fileOne.txt
 * Check the documentation for node's `path.resolve`
 * https://nodejs.org/docs/latest/api/path.html
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
  filePathOne = path.resolve('./files/fileOne.txt');
  filePathTwo = path.resolve('./files/fileTwo.txt');
  let totalCount = 0;
  getWordCount(filePathOne, (err, wordCount) => {
    if(err){
      callback(err, null)
    }
    totalCount += wordCount;
    getWordCount(filePathTwo, (err, wordCount) => {
      if(err){
        callback(err, null);
      }
      totalCount += wordCount;
      callback(null, totalCount);
    })
  })
};


module.exports = getTotalWordCount;
