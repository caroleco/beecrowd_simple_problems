var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


let possible_notes = [100, 50, 20, 10, 5, 2, 1, 0.50, 0.25, 0.10, 0.05, 0.01];
let possible_coins = [1, 0.50, 0.25, 0.10, 0.05, 0.01];

let result = (lines, possible_values) => {
    possible_values.map((pv)=> {
        
        //value_defined = parseInt(lines / pv);
        log
        if(pv < 2){

            value_defined = lines / pv;
            console.log("lines " + lines);
            var pv_dec = pv * 100;
            console.log(`${value_defined} moedas de ${pv}`);
            lines = lines % pv;
        }

        else{
            value_defined = lines / pv;
            console.log(`${value_defined} notas de ${pv}`);
            lines = lines % pv;
        }

    
        lines = parseInt(lines % pv);
    })

    
}
result(lines, possible_notes)