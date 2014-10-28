var mongoose = require('mongoose');

var billSchema = new mongoose.Schema({
	description   :String,
	user_paid	  :String,
	totalCost	  :Number,
	partialCost   :Number,
	paid		  :Boolean,
	active		  :Boolean,
	date      	  :Date,
	obsolete	  :String
});

module.exports = mongoose.model('bill', billSchema);

