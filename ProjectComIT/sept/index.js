const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' });
  });
  app.get('/fooddelivery', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' });
  });
  app.get('/contact', (req, res) => {
    res.render('form');
  });
  const MongoClient = require('mongodb').MongoClient;
  const url = 'mongodb://localhost:27017';
  app.get('/', (req, res) => {
	MongoClient.connect(url, function(err, client) {
		const db = client.db('');
		const collection = db.collection('');

		collection.find({}).toArray((error, documents) => {
			client.close();
			res.render('index', { documents: documents });
		});
	});
});
  const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
 app.post('/login.html', urlencodedParser, (req, res) => {
    const username = req.body.username;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const password = req.body.password;
    const email = req.body.email;   
    
    console.log(req.body);
    collection.insertMany(documents, (err, result) => {
        callback(result);
    });
    res.send(`We got the following values from the query string: ${username}, ${firstname}, ${lastname}, ${password} & ${email}`);
  });
  

app.use(express.static('public'));
app.listen(3000);
