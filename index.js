const express = require('express');
const path = require('path');
var zodiacs = require('./zodiacs');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));
app.get('/zodiacs', (req, res) => res.json(zodiacs));

app.listen(3000, () => console.log('Example app listening on port 3000!'));