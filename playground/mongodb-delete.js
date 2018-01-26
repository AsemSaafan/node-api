//Destructiong
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient , ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/Elguide' , (err , database)=>{

	if (err){
		console.log('Unable to connect to Mongodb server');
	}
	console.log('connect to mongodb server');
	const dataBase = database.db('Elguide');

	// deleteMany >> removing many which have this or these property
	
	// dataBase.collection('Guides').deleteMany({name : 'فجر الاسلام'}).then((result)=>{
	// 	console.log(result);
	// });
	
	// deleteOne >> removing one and told you that it is comleted  // if more than one have the same property it delete the first one 
	
	// dataBase.collection('Guides').deleteOne({name : 'فجر الاسلام'}).then((result)=>{
	// 	console.log(result);
	// });

	// findOneAndDelete >> show me what it remove and remove it 
	
	// dataBase.collection('Guides').findOneAndDelete({name : 'فجر الاسلام'}).then((result)=>{
	// 	console.log(result);
	// });

	database.close();

});