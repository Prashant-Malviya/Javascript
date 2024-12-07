// rest paramenters = represents an indefinite number of parameters (packs arguments into an array)

let a = 1;
let b = 3;
let c = 2;
let d = 20;
let e = 21;

console.log(sum(a,b,c,d,e));

// function sum(...numbers){

function sum(x, y, ...numbers){
    let total = 0;
    console.log(x,y);
    
    for(let number of numbers){
        total += number;
    }
    return total;
}
