// spread operator :

/*
it allows an iteralble such as an array or string to be expanded in places where zero or more arguments are expected 
*/

let numbers = [1,3,2,5,6,7,3,9,2];

let maximum = Math.max(...numbers); 

console.log(maximum);

let class1 = ['shiva','krish','kartikey']

let class2 = ['shivansh','dhruv','bedansh']

class1.push(...class2);

console.log(...class1);

