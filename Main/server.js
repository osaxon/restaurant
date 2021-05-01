const express = require('express');
const path = require('path');

const app = express();
const PORT = 3100;
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const reservations = [];
const waitList = [];

app.get('/', (req, res) => res.sendFile(path.join(__dirname,"index.html")))
app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname,"reserve.html")))
app.get('/tables', (req, res) => res.sendFile(path.join(__dirname,"tables.html")))

app.get('/api/tables', (req, res) => res.json(reservations))

app.post('/api/tables', (req, res) => {
    const newRes = req.body;
    console.log(newRes);
    reservations.push(newRes);
    res.json(newRes);
})

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));