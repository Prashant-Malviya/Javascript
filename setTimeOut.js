// setTimeout - invokes a function after a number of milliseconds 
//asynchronous function (doesn't pause execution)


let item = 'cryptocurrency';
let price = 340.20;

let timer1 = setTimeout(firstMessage,3000,item,price);
let timer2 = setTimeout(secondMessage,6000);
let timer3 = setTimeout(thirdMessage,9000);

document.getElementById("myButton").onclick = function(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert(`Thanks for buying < 3`)
}


function firstMessage(item,price){
    console.log(`Buy this ${item} course for $${price}`);
}
function secondMessage(){
    console.log(`This isn't a scam`);
}
function thirdMessage(){
    console.log(`DO IT!`);
}
