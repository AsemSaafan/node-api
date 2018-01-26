//Destructiong
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient , ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/Elguide' , (err , database)=>{

	if (err){
		console.log('Unable to connect to Mongodb server');
	}
	console.log('connect to mongodb server');
	const dataBase = database.db('Elguide')

	// dataBase.collection('Guides').find().count().then((count)=>{
	dataBase.collection('Guides').find().toArray().then((docs)=>{
		console.log('Guides');
		// console.log(`Guides count :${count}`);
		console.log(JSON.stringify(docs , undefined , 2));
	}, (err)=>{
		console.log('Unable to fetch Data');

	});

	database.close();

});