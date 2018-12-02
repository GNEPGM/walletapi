'use strict';

var db = require('./db');

db.initCollection('movies');
db.initCollection('users');

module.exports = {
    findMovie: findMovie,
    buyTicket: buyTicket
};

function findMovie(req, res) {
    try {
        var results = db.getObjects('movies', {});
        return res.json(results);
    } catch (error) {
        return res.send(400, {
            message: error.message
        });
    }
  }

function buyTicket(req, res){
    try{
        var movieprice = db.getObject('movies',{}).price;
        var cardbalance = db.getObject('users',{}).balance;        
        if(cardbalance-movieprice>0){
            cardbalance=cardbalance-movieprice;
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