const notes = require(`express`).Router();
const { readFromFIle, writeToFile, readAndAppend} = require(`.helpers/fsUtils`);

notes.get(`/`, (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.post(`/`, (req, res) => {
    console.log(req.body);
    const {title, text} = req.body;

    if(req.body) {
        const newNote = {
            title,
            text,
            id: crytpo.randomUUID()
        };

        readAndAppend(newNote, `./db/db.json`);
        res.json(`Succesfully added note!`);
    } else {
        res.errored(`Error adding note`);
    }
});

module.exports = notes;