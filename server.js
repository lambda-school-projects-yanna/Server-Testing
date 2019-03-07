
const express = require('express');
const server = express();
server.use(express.json());


server.get('/api', (req, res) => {
  res.status(200).json({ api: 'running' });
});

server.post('/api/cohorts', (req, res) => {
    res.status(201).json({message: "cohort created"})
});

server.delete('/api/cohorts/1', (req, res) => {
    res.status(200).end()
});

module.exports = server;