'use strict';
 
if(process.env.NODE_ENV === 'dev') {
	require('dotenv').config();
}

const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const dialogflow = require('dialogflow');
const projectId = 'qliksenseai';
const sessionId = 'quick-session';

const query = 'what is sales';
const languageCode = 'en-IN';

const pk = (process.env.NODE_ENV === 'prod') ? JSON.parse(process.env.DIALOGFLOW_PRIVATE_KEY) : process.env.DIALOGFLOW_PRIVATE_KEY;
const email = process.env.DIALOGFLOW_CLIENT_EMAIL;
 
const config = {
 	"credentials": {
 		"private_key": pk,
 	  	"client_email": email
	}
};

const sessionClient = new dialogflow.SessionsClient(config);
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

app.use(bodyParser.json());
app.post('/query', (req, res) => {
 	if(req.body.queryResult.action === 'get_data') {
		var kpi = req.body.queryResult && req.body.queryResult.parameters && req.body.queryResult.parameters.kpi ? req.body.queryResult.parameters.kpi : 'Unknown';
	} else {
		var kpi = 'Unknown';
	};
 	if(kpi==='Unknown') {
		return res.json({
			"fulfillmentText": "KPI not found",
			'source': 'Qlik Sense'
		});
	} else {
		return res.json({
			'fulfillmentText': "We found KPI revenue for you",
			'source': 'Qlik Sense'
		});
	};
}); 