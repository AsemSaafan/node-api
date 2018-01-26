//Destructiong
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient , ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/Elguide' , (err , database)=>{

	if (err){
		console.log('Unable to connect to Mongodb server');
	}
	console.log('connect to mongodb server');
	const dataBase = database.db('Elguide');

	// dataBase.collection('Guides').insertOne({
	// 	name : 'فجر الاسلام' ,
	// 	adress : 'أمام المستشفى'
	// },(err , result)=>{
	// 	if (err){
	// 		return console.log('Unable to insert guides' , err);
	// 	}

	// 	console.log(JSON.stringify(result.ops , undefined , 2));
	// });

	// dataBase.collection('Services').insertOne({
	// 	Service: 'عرض مجانى' ,
	// 	adress : 'فجر الاسلام',
	// 	details: 'اقرأ المزيد'
	// },(err , result)=>{
	// 	if (err){
	// 		return console.log('Unable to insert guides' , err);
	// 	}

	// 	console.log(JSON.stringify(result.ops , undefined , 2));
	// });

	database.close();

});