const express = require('express');
const path = require('path');
const api = require('./routes/index');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}))

//------------------------ALLOWS ACCESS TO THE PUBLIC PATH------------------------//
app.use(express.static('public'));


//------------------------GET ROUTE FOR HOMEPAGE------------------------//
app.get('/', (req, res) =>
    res.sendFile(path.join(_dirname, '/public/index.html'))
);


//------------------------GET ROUTE FOR NOTES PAGE------------------------//
app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);


//------------------------LISTEN METHOD BINDS WITH HOST/ PORT------------------------//
app.listen(PORT, () => console.log(`App listening on port http://localhost:${PORT}`));

