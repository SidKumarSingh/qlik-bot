'use strict';

const projectId = 'qliksenseai';
const sessionId = 'quick-session';
const query = 'hi';
const languageCode = 'en-US';

const df = require('dialogflow');
const sessionClient = new df.SessionsClient();

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