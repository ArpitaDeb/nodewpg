const express = require('express');
const app = express();
app.get('/', function(request, response) {
    response.send('Hello Node.js World!');
  });
  app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
  });
  app.get('/', function(req, res) {
    res.send('hi welcome');
  });
  
  var oneLinerJoke = require('one-liner-joke');
  var getRandomJoke = oneLinerJoke.getRandomJoke();
  app.get('/joke', function(req, res) {
    res.send(getRandomJoke);
  });
  
  app.get('/jokes', function(req, res) {
    res.send(getRandomJoke.body + getRandomJoke.body);
  });

  app.post('/', function(req, res) {
    res.send('my jokes are too funny, I\'m not getting new ones from you..');
  });
  
  app.put('/', function(req, res) {
    res.send('no, no, no.. not changing my act dude!');
  });
  
  app.delete('/', function(req, res) {
    res.send('good jokes never get to old');
  });
  app.all('/', function(req, res) {
    res.send(' I know I\'m so good that you\'re looking for jokes everywhere');
  });