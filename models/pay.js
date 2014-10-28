var mongoose = require('mongoose');

var paySchema = new mongoose.Schema({
	bill_id  :String,
	user_id  :String
});

module.exports = mongoose.model('Pay', paySchema);

