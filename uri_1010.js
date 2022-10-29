var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let first_product = lines.shift().split(' ');
let sec_product = lines.shift().split(' ');

let first_code = parseInt(first_product.shift());
let first_unit = parseInt(first_product.shift());
let first_value = parseFloat(first_product.shift());

let sec_code = parseInt(sec_product.shift());
let sec_unit = parseInt(sec_product.shift());
let sec_value = parseFloat(sec_product.shift());

let result = (first_value * first_unit) + (sec_value * sec_unit);

console.log("VALOR A PAGAR: R$ " + result.toFixed(2));