'use strict';

const dialogflow = require('dialogflow');

const pk = (process.env.NODE_ENV === 'prod') ? JSON.parse(process.env.DIALOGFLOW_PRIVATE_KEY) : process.env.DIALOGFLOW_PRIVATE_KEY;
const email = process.env.DIALOGFLOW_CLIENT_EMAIL;

const config = {
 	"credentials": {
 		"private_key": pk,
 	  	"client_email": email
	}
};

const sessionClient = new dialogflow.SessionsClient(config);

module.exports = sessionClient;