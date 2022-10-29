var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var a = lines.shift();
var b = lines.shift();

var PROD = a * b;

console.log("PROD = " + PROD);