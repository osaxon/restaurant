const express = require('express');
const path = require('path');

const app = express();
const PORT = 3100;

const reservations = [
    {
        customerName: "Oli Saxon",
        TabaleID: 71,
        time: "18:00",
        partySize: 6
    },
    {
        customerName: "Oli Saxon",
        TabaleID: 71,
        time: "20:00",
        partySize: 6
    },
];
const waitList = [];

app.get('/', (req, res) => res.sendFile(path.join(__dirname,"index.html")))
app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname,"reserve.html")))
app.get('/tables', (req, res) => res.sendFile(path.join(__dirname,"tables.html")))

app.get('/api/tables', (req, res) => res.json(reservations))

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));