//Destructiong
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient , ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/Elguide' , (err , database)=>{

	if (err){
		console.log('Unable to connect to Mongodb server');
	}
	console.log('connect to mongodb server');
	const dataBase = database.db('Elguide');

	//findOneAndUpdate 
	dataBase.collection('Guides').findOneAndUpdate({
		_id: new ObjectID('5a6b2626c7187d2bf0f24965')
	},{
		$set:{
			adress:'أماما باب المستشفى العام'
		}

	},{
		returnOriginal:false
	}).then((result)=>{
		console.log(result);
	});

	database.close();

});