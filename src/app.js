const express = require('express');
const app = express();
const port = 8081;

const knex = require('knex')(require('../knexfile.js')["development"])

app.get('/', (req, res) => {
  res.send('Application up and running')
})

app.get('/pets', (req, res) => {
  knex('pet')
    .select('*')
    .then(data => {
      // var petnames = data.map(pet => pet.name)
      res.json(data);
    })
})

app.listen(port, () => {
  console.log('poopy doopy')
})