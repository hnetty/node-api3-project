const express = require('express');

const server = express();

server.use(logger);


server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  req.name = req.headers.name;

  console.log(`${req.name} made a ${req.method} request to ${req.url} at ${req.timestamp}`)

  next();
}

module.exports = server;
