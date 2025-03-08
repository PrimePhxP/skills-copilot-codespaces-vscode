// Create web server
// npm install express
// npm install body-parser
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const comments = require('./comments.json');

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  comments.push(req.body);
  res.json(req.body);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

// Run the server
// node comments.js
// Open browser, go to http://localhost:3000/comments
// Open Postman, send POST request to http://localhost:3000/comments
// Add JSON data to request body