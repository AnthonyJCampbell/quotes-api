const express = require('express');
const cors = require('cors')
const helmet = require('helmet');

const server = express();

const quotes = require('./quotes')

server.use(helmet())
server.use(express.json());
server.use(cors())

server.get('/', (req, res) => {
  return res.status(200).json({"quotes": quotes})
})

module.exports = server;