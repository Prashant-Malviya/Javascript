/*
array.map() = executes a provided callback function once for each array element and creates a new array
*/

let numbers = [1,3,4,5,56,3,2,1];

let squares = numbers.map(square);
let cubes = numbers.map(cube)

console.log("squares -------");
squares.forEach(print)

console.log("cubes -------");
cubes.forEach(print)

function square(element){
    return Math.pow(element,2)
}

function cube(element){
    return Math.pow(element,3)
}

function print(element){
    console.log(element);
    
}