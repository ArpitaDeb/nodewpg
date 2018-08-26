const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' });
});
app.get('/about', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' });
  });
  /about/:pageId
  ('about', req.params.pageId)
  and name ${req.params.name}``

app.listen(3000);
