const notes = require('express').Router();
//const { v4: uuidv4 } = require('uuid');
const {
    readFromFile,
    readAndAppend,
    writeToFile,
} = require('../helpers/fsUtils');


//------------------ GET ROUTE FOR RETREIVING NOTES ------------------//
notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

//------------------ POST ROUTE FOR A NEW NOTE ------------------//
notes.post('/', (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title, 
            text,
            //note_id: uuidv4(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json(`Note added succcessfully`);
    } else {
        res.error(`Error in adding note`);
    }
});

/* ------------------------Couldn't get to work ------------//
notes.delete('./:note_id', (req, res) => {
    const noteId = req.params.note_id;
    readFromFile('./db/db.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
            const result  = json.filter((note) => note.note_id !== noteId);

            writeToFile('./db/db.json',result);
            res.json(`Item ${noteId} has been deleted`);

        });

});
*/
module.exports = notes;