/*

synchronous code = In an ordered sequence.
                - step by step linear instructions
                - (start now, finish now)

asynchronous code = Out of sequence.
                - Ex. Acccess a database
                - Fetch a file
                - Tasks that take time
                (start now, finish sometime later)

*/

// synchrounous 

// console.log("Start");
// console.log("This step is synchronous");
// console.log("End");

// asynchronous 
console.log("Start");
setTimeout(()=> console.log("asynchronous code"),5000
)
console.log("end");

