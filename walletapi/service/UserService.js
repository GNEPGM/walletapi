'use strict';

exports.createUser = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


exports.deleteUser = function(username) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


exports.loginUser = function(username,password) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


exports.logoutUser = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


exports.updateUser = function(username,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

exports.getUserBalance = function(username) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "balance" : "balance",
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}