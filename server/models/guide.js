var mongoose = require('mongoose');

/*Model Like Scema to determine what you want to add and what not to add
and then will creat instance from them
*/ 


var Guide = mongoose.model('Guide' , {
	name:{
		type:String,
		required:true,
		minlength:1,
		trim:true
	} ,
	Adress:{
		type:String,
		// required:true
	},
	Rating:{
		type:Number,
		default:null
	}
});

module.exports={Guide};