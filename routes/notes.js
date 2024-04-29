const notes = require(`express`).Router();
const { readFromFIle, writeToFile, readAndAppend} = require(`.helpers/fsUtils`);