//setInterval() - invokes a function repeatedly after a number of milliseconds
//it is an asynchronous function (doesn't pause execution)

let count = 0

// let max = window.prompt("Count up to twhat #? ");

let max = 10;

max = Number(max);

const myTimer = setInterval(countUp,1000,max);


function countUp(max){
    count += 1;
    console.log(count);
    if(count >= max)
        clearInterval(myTimer)
    
}