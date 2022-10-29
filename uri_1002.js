var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

//A = n * R2
var n = 3.14159;
var R = parseFloat(lines.shift());

let result = n * Math.pow(R.toFixed(2), 2);
let A = result.toFixed(4);

console.log("A="+A)