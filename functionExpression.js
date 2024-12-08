// funtion expression = function without a name (anoymous function) avoid polluting the global scope with names write it, then forget about it 


function sayNamaste(){
    console.log('namaste!');
    
}


const greeting = function(){
    console.log('Namaste!');
    
}

greeting();


const greetings = ()=> console.log("Namste and Hello");


greetings()

//coutner application using function expression

// document.getElementById('increaseButton').onclick = ()=>{
//     count+= 1;
//     document.getElementById('myLabel1').innerHTML = count;
// }
// document.getElementById('decreaseButton').onclick = ()=>{
//     count -= 1;
//     document.getElementById('myLabel2').innerHTML = count;
// }

