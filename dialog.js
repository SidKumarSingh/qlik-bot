'use strict';

require('dotenv').config();

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

const req = {
	session: sessionPath,
	queryInput: {
		text: {
			text: query,
			languageCode: languageCode
		}
	}
};

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
	});