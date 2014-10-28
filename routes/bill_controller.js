var bills = require("../models/mymongo.js"),
    this_user = require('../models/auth').this_user;
var bill= require('../models/bill');

exports.addBil = function(req, res){
    console.log("--- REQ.BODY.description: ", req.body.description,+" ---");
    var newBill = {
        description: req.body.description,
        user_paid: req.body.user_paid,
        totalCost: req.body.totalCost,
        partial: req.body.partial,
        paid: req.body.paid,
        active: req.body.active,
        date: req.body.date,
        obsolete:"1"
    };
    bills.insert(
        "housemates",
        "bills",
        newBill,
        function(model) {
            res.render('bill', {
                user:this_user,
                description: newBill.description,
                user_paid : newBill.user_paid,
                totalCost: newBill.totalCost,
                partial: newBill.partial,
                paid: newBill.paid,
                active: newBill.active,
                date: newBill.date
            });
        }
    );
}
