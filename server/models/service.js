var mongoose = require('mongoose');

/*Model Like Scema to determine what you want to add and what not to add
and then will creat instance from them
*/ 


var Service = mongoose.model('Service' , {
	name:{
		type:String,
		required:true,
		minlength:1,
		trim:true
	} ,
	MarketAdress:{
		type:String,
		required:true
	},
	Rating:{
		type:Number,
		default:null
	}
});


module.exports={Service};