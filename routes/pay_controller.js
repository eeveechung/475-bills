var Pay = require('../models/pay.js');

exports.post = function(req, res){
    console.log("--- REQ.BODY.description: ", req.body.description,+" ---");
    new Assign({
        user_id:
        bill_id:req.body.description,
        
        }).save();
    res.redirect('pay_add');
};