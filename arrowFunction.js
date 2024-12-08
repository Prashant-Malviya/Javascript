// arrow function : compact alternative to a tradtitional function expression 

const greet = (username)=> console.log('username: - ',username);

greet('prashant')

const percent = (x,y) => x/y * 100;

console.log(`${percent(48,1000)}%`);


let grades = [200,28,129,29,49,29,49]

grades.sort((x,y) => x-y)

grades.forEach((element)=>console.log(element))