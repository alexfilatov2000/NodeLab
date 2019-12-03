const express = require('express');

const app = express();

const PORT = process.env.PORT || 80;

app.get('/about', (req, res) => {
  res.end('<div><ul><li><a href="/">about</a></li><li><a href="/about">about</a></li></ul><h1>Home page</h1></div>');
});

app.get('/', (req, res) => {
  res.end('<div><ul><li><a href="/">home</a></li><li><a href="/about">about</a></li></ul><h1>Home page</h1></div>');
});

app.listen(PORT, () => {
  console.log('server has been started...');
});
