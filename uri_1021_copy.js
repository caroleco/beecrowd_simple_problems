var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let split_value = lines.toString().split('.');
let notes = split_value.shift(); //576
let coins = split_value.shift() / 100; //0.73

let possible_notes = [100, 50, 20, 10, 5, 2];
let possible_coins = [1, 0.50, 0.25, 0.10, 0.05, 0.01];

let notes_division = (total_value, possible_value) => {
    let possible_word;

    if(total_value < 2){
        possible_word = "MOEDA"
    }
    else
        possible_word = "NOTA"

    possible_value.map((pv)=>{
        let value_defined = parseInt(total_value / pv);
        total_value -= value_defined * pv;
        console.log(`${value_defined} ${possible_word} de ${pv}`)
    })
    return total_value;
}

console.log(notes_division(notes, possible_notes))

coins += notes_division(notes, possible_notes);
console.log(notes_division(coins, possible_coins))