// Array.filter() = creates a new array with all elements that pass the test provided by a function

let ages = [28,18,21,39,29];

let adults = ages.filter(checkAge);

adults.forEach(print);

function checkAge(element){
    return element >=25;
}


function print(element){
    console.log(element);
    
}

