/*
The idea behind a module is that it's a file of reusable code
We can import sections of pre-written code to use whenever 
great for any general utility values and functions
Helps to make your code more reusable and maintanalbe

think of modules as seperate chapters of a book

*/

// import {PI,getCircumference,getArea} from "./math_utils.mjs"

// another way of importing file 

import * as MathUtil from "./math_utils.mjs"

console.log(MathUtil.PI);


let circumference = MathUtil.getCircumference(10);

console.log(circumference);


let area = MathUtil.getArea(10);

console.log(area);
