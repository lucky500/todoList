'use strict';

const http = require('http');
const todosFileName = require('./todos.json');
var path  = require('path');
var fs = require('fs');
var bodyParser = require('body-parser')
const express = require('express');
const app  = require();
app.set('port', process.env.PORT || 3000);

app.use(express.static('public'));


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

http.createServer((req, res) => {
	res.writeHead(200, {'Content-type': 'text/html'});
	res.end('<h1>Hello NodeJS</h1>');
})

app.listen(app.get('port'), () => console.log('Server running on port 3000'));


app.get('/', (req, res, next) => {
	res.send('<h1>Hello Express</h1>');
});