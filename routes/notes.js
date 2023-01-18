const notes = require('express').Router();
//const { v4: uuidv4 } = require('uuid');  //-------------used in 28 but do we need this for this project? 
const {
    readFromFile,
    readAndAppend,
    writeToFile,
} = require('../helpers/fsUtils');


//------------------ GET ROUTE FOR RETREIVING ALL THE NOTES ------------------//
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
        };

        readAndAppend(newNote, './db/db.json');
        res.json(`Note added succcessfully`);
    } else {
        res.error(`Error in adding tip`);
    }
});

module.exports = notes;