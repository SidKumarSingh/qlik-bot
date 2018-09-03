// content of index.js
const http = require('http');
const express = require('express');
//const app = express();

const glx = require('greenlock-express').create({
	server: 'https://acme-staging-v02.api.letsencrypt.org/directory',
	version: 'draft-11',
	configDir: './config/cert/',
	email: 'sks3286@gmail.com',
	approveDomains: ['qlik-bot.herokuapp.com'],
	agreeTos: true,
	communityMember: true,
	telemetry: true
});


//const port = process.env.PORT || 3000;

//app.listen(port, () => console.log('Example app listening on port 3000!'));

const app = glx.listen(80, 443, () => console.log("Listening on port 80 for ACME challenges and 443 for express app."));

//app.get('/', (req, res) => res.send('Hello world from node.js server!'));

//app.post('/', (req, res) => {

//});

/*

var glx = require('greenlock-express').create({
  server: 'https://acme-v02.api.letsencrypt.org/directory'
  // Note: If at first you don't succeed, stop and switch to staging:
  // https://acme-staging-v02.api.letsencrypt.org/directory
, version: 'draft-11' // Let's Encrypt v2 (ACME v2)

  // If you wish to replace the default account and domain key storage plugin
, store: require('le-store-certbot').create({
    configDir: require('path').join(require('os').homedir(), 'acme', 'etc')
  , webrootPath: '/tmp/acme-challenges'
  })

  // Contribute telemetry data to the project
, telemetry: true

, approveDomains: approveDomains
});

var server = glx.listen(80, 443, function () {
  console.log("Listening on port 80 for ACME challenges and 443 for express app.");
});*/