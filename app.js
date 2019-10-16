const express = require('express');
const bodyParser = require('body-parser');
const data = require('./data');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
    res.setHeader('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    next();
});

app.use(bodyParser.json());

app.post('/api/customsearch', (req, res, next) => {
	console.log('Requesting data for page ' + req.body.page);
    res.status(200).json(data(+req.body.page));
});

module.exports = app;