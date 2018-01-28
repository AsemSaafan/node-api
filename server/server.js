var express = require ('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require ('./db/mongoose')
var {Guide} = require ('./models/guide')
var {Service} = require ('./models/service')

var app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/guides',(req , response)=>{
	// console.log(req.body);
	var guide = new Guide ({
		name : req.body.name,
    Adress:req.body.Adress,
    Rating:req.body.Rating
	});

	guide.save().then((doc)=>{
		response.send(doc);
	},(e)=>{
		response.status(400).send(e);
	});
});
app.get('/guides', (req, res) => {
  Guide.find().then((guides) => {
    res.send({guides});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/guides/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Guide.findById(id).then((guide) => {
    if (!guide) {
      return res.status(404).send();
    }

    res.send({guide});
  }).catch((e) => {
    res.status(400).send();
  });
});

app.listen(port , ()=>{
	console.log(`Started up at port ${port}`);
	
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