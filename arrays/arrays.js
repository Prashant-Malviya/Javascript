// arrays contains multiple values 

// let fruits = ['apple','orange','banana']

// fruits.push('lemon') // add an elelemtn

// fruits.pop()

// fruits.unshift('mango') // add element to begining
// fruits.shift() //removes element from begining

// let length = fruits.length

// let index = fruits.indexOf('kiwi')

// console.log(index);
// console.log(fruits);

// different ways of array iteration

let prices = [1,3,5,6,720]

// for (let price = 0; price<prices.length; price++){
//     console.log(prices[price]);
    
// }

// for(let price of prices){
//     // console.log(price);
    
// }

//shorting methods for strings and numbers

let names = ['krishna','radha','gopal','ghansyam']

names.sort()
// console.log(names);

names.sort().reverse()

// console.log(names);


//2d arrays

let vegetables = ['carrots','onion','potatoes'];

let fruits = ['apples','oranges','potatoes'];

let meats = ['eggs','chicken','fish']

let groceryList = [vegetables,fruits,meats]

groceryList[2][3] = 'tomatoes'

console.log(groceryList);

for(let list of groceryList){
    for(let food of list){
        console.log(food);
        
    }
}
