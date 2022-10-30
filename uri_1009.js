var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

lines.shift();
let salary = parseFloat(lines.shift());
let products_sold_bonus = parseFloat(lines.shift() * 0.15) ;

let total_salary = salary + products_sold_bonus;

console.log("TOTAL = R$ "+ total_salary.toFixed(2));