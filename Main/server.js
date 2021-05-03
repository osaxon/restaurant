const express = require('express');
const path = require('path');
const restuarant = require('./restaurant.js');

const elSaxo = new restuarant({name: "El Saxo", tblCount: 5,});

const app = express();
const PORT = 3000;
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '/assets'))


app.get('/', (req, res) => res.sendFile(path.join(__dirname,"index.html")));
app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname,"reserve.html")));
app.get('/tables', (req, res) => res.sendFile(path.join(__dirname,"tables.html")));

app.get('/api/table_count', (req, res) => res.json(elSaxo.tblCount));
app.get('/api/tables', (req, res) => res.json(elSaxo.getReservations()))

app.post('/api/tables', (req, res) => {
    const newRes = req.body;
    console.log(newRes);
    console.log(elSaxo.checkAvailability())
    elSaxo.addReservation(newRes);
    res.json(newRes);
})

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));