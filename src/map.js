const head = require('./head');
const tail = require('./tail');

const map = (list, callback) => 
    head(list) === undefined 
        ? [] 
        : [callback(head(list)),...map(tail(list), callback)];

module.exports = map;
