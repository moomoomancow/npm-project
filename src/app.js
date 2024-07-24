const express = require('express');
const app = express();
const port = 8081;

app.get('/', (req, res) => {
  res.send('Application up and running')
})

app.listen(port, () => {
  console.log('poopy doopy')
})