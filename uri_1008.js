var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let number = parseInt(lines.shift());
let worked_hours = parseInt(lines.shift());
let amount_per_hour = parseFloat(lines.shift());

console.log("NUMBER = "+ number);
console.log("SALARY = U$ "+ (worked_hours * amount_per_hour).toFixed(2));