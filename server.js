// content of index.js
const http = require('http');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello world from node.js server!'));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('Example app listening on port 3000!'));