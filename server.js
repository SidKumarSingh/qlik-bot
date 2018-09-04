// content of index.js
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.get('/', (req, res) => res.send('Hello world from node.js server!'));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('Example app listening on port 3000!'));

app.all('/', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  next();
 });

app.use(bodyParser.json());

app.post('/', (req, res) => {
	console.log(req.body);
	res.send('Hello ' + req.body.fname + ' ' + req.body.lname + '! How are you?');
});