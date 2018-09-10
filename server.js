'use strict';
 
if(process.env.NODE_ENV !== 'prod') {
	require('dotenv').config();
}

const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const dialogflow = require('dialogflow');

const sessionClient = require('./scripts/dialogflow/df-conn');
 
const app = express();

require('./scripts/routes/routes-get')(app,sessionClient);
require('./scripts/routes/routes-post')(app);
 
const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Example app listening on port 3000!'));

app.use(bodyParser.json());