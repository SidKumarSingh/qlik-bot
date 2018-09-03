// content of index.js
const http = require('http');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello world from node.js server!'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));