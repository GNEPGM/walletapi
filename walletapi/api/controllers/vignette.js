'use strict';

var db = require('./db');

db.initCollection('vignette');
db.initCollection('users');

module.exports = {
    findVignette: findVignette,
    buyVignette: buyVignette
};

function findVignette(req, res) {
    try {
        var results = db.getObjects('vignette', {});
        return res.json(results);
    } catch (error) {
        return res.send(400, {
            message: error.message
        });
    }
  }

function buyVignette(req, res){
    try{
        var vignetteprice = db.getObject('vignette',{}).price;       
        var cardbalance = db.getObject('users',{}).balance;        
        if(cardbalance-vignetteprice>0){
            cardbalance=cardbalance-vignetteprice;
            db.getObject('users',{}).balance=cardbalance;
        }else{
            return res.send(1,{
                message: "Your balance is not enough for the transaction."
            })
        }
        return price;
    } catch(error){
        return res.send(400, {
            message: error.message
        });
    }

}