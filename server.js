'use strict';

//require('dotenv').config();

const http = require('http');
const express = require('express');

const projectId = 'qliksenseai';
const sessionId = 'quick-session';
const query = 'hi';
const languageCode = 'en-IN';

const pk = process.env.DIALOGFLOW_PRIVATE_KEY;
const email = process.env.DIALOGFLOW_CLIENT_EMAIL;

const config = {
	"credentials": {
		"private_key": pk,
	  	"client_email": email
	}
};

const df = require('dialogflow');
const sessionClient = new df.SessionsClient(config);

const sessionPath = sessionClient.sessionPath(projectId, sessionId);

const request = {
	session: sessionPath,
	queryInput: {
		text: {
			text: query,
			languageCode: languageCode
		}
	}
};

const app = express();

app.get('/', (req, res) => {
	sessionClient
	.detectIntent(request)
	.then(results => {
		var body  = 'Detected intent';
		const result = results[0].queryResult;
		body += '  Query: ' + result.queryText;
		body += '  Response: ' + result.fulfillmentText;
	    //res.send(`  Query: ${result.queryText}`);
	    //res.send(`  Response: ${result.fulfillmentText}`);
	    if (result.intent) {
	    	body += '  Intent: ' + result.intent.displayName;
	      //res.send(`  Intent: ${result.intent.displayName}`);
	    } else {
	    	body += '  No intent matched.';
	      //res.send(`  No intent matched.`);
	    }
	    res.send(body);
	})
	.catch(err => {
		res.send('ERROR:', err);
	});
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('Example app listening on port 3000!'));
/*
sessionClient
	.detectIntent(req)
	.then(res => {
		console.log('Detected intent');
	    const result = res[0].queryResult;
	    console.log(`  Query: ${result.queryText}`);
	    console.log(`  Response: ${result.fulfillmentText}`);
	    if (result.intent) {
	      console.log(`  Intent: ${result.intent.displayName}`);
	    } else {
	      console.log(`  No intent matched.`);
	    }
	})
	.catch(err => {
		console.error('ERROR:', err);
	});*/