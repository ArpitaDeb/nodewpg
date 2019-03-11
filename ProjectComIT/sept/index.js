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
  
  const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
 app.post('/login.html', urlencodedParser, (req, res) => {
    const username = req.body.username;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const password = req.body.password;
    const email = req.body.email;
    const subject= req.body.subject;  
   
      MongoClient.connect(url, function(err, client) {
        const db = client.db('');
        const collection = db.collection('documents');
        console.log(req.body);
        const documents = { "username": username, "firstname": firstname, "lastname": lastname, "email": email, "subject": subject};
    collection.insertOne(documents, (err, result) => {
      res.send(`We received the following details from your reservation request: ${firstname}, ${lastname}, ${email}, ${subject} & ${username}`);
        }); 
      });
    }); 
app.use(express.static('public'));
app.listen(3000);

tomake ektu call kora jabe? kichu katha bolar chilo tomay. 
ami tomake ja bolbo seta tumi kaauke bolona please
ami jani je tumi khub valo meye. 