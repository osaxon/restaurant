const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

const reservations = [];

app.get('/', (req, res) => res.sendFile(path.join(__dirname,"index.html")))
app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname,"reserve.html")))

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));