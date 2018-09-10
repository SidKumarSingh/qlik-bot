'use strict';

module.exports = (app, sessionClient) => {
	app.get('/', (req, res) => {
	 	const projectId = 'qliksenseai';
		const sessionId = 'quick-session';

		const query = 'what is sales';
		const languageCode = 'en-IN';

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
};