var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let split_value = lines.toString().split('.');
let notes = split_value.shift();
let coins = split_value.shift() / 100;

let notes_d = [100, 50, 20, 10, 5, 2];
let coins_d = [1, 0.50, 0.25, 0.10, 0.05, 0.01];
//let worked_hours = parseInt(lines.shift());
total = 0;
let div = (value) => {
    let split_value = lines.toString().split('.');
    let notes = split_value.shift();
    let coins = split_value.shift() / 100;

    let coins_division;

        let value_temp = value;
        value.map((v) => {
            note_amount = parseInt(value_temp / v);
            note_sub = v * note_amount;
            value_temp -= note_sub;
            console.log(`${note_amount} nota(s) de R$ ${v}`);
            total += note_sub;
        })

    coins_division = total - value;

        console.log("coins di " + coins_division)
        let coins_temp = value + coins_division;
        console.log(coins_temp)
        coins_temp.map((v) => {
            note_amount = parseInt(value / v);
            note_sub = v * note_amount;
            value -= note_sub;
            console.log(`${note_amount} nota(s) de R$ ${v}`);
        })
}
/**/

//console.log(total)
console.log(div(notes_d));
/*console.log(notes);
console.log(lines);
console.log(coins);*/