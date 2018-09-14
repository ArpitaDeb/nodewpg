const express = require('express');
const app = express();

app.listen(3000);

app.get('/', (req, res) => {
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, function(err, client) {
	const db = client.db('comics');
	const collection = db.collection('superheroes');

	collection.find({}).toArray((error, documents) => {
		
		console.log(documents);
        client.close();
    })
	});
});

app.get('/', (req, res) => {
	MongoClient.connect(url, function(err, client) {
		const db = client.db('comics');
		const collection = db.collection('superheroes');

		collection.find({}).toArray((error, documents) => {
			client.close();
			res.render('index', { documents: documents });
		});
	});
});