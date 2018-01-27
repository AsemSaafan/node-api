var express = require ('express');
var bodyParser = require('body-parser');

var {mongoose} = require ('./db/mongoose')
var {Guide} = require ('./models/guide')
var {Service} = require ('./models/service')

var app = express();

app.use(bodyParser.json());

app.post('/guides',(req , response)=>{
	// console.log(req.body);
	var guide = new Guide ({
		name : req.body.name
	});

	guide.save().then((doc)=>{
		response.send(doc);
	},(e)=>{
		response.status(400).send(e);
	});
});

app.listen(3000 , ()=>{
	console.log('Started on port 3000');
	
});


// var newGuide = new Guide({
// 	name : 'Omar Saafan',
// 	Adress:'Halafi'
// });

// newGuide.save().then((docs)=>{
// 	console.log('Saved Guide',docs)
// },(e)=>{
// 	console.log ('Unanable To save New Guide')
// });

module.exports = {app};