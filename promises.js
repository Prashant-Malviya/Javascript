/*

proomise = object that encapsulates the result of an asynchronous operation
let asynchronous methods return values like synchronous methods
"I promise to return something in the future"

the state is 'pending' then: 'fulfilled' or 'rejected'
the result is what can be returned
2 parts producing & consuming

*/

// let fileLoaded = true;
// const promise = new Promise((resolve, reject) => {
//   if (fileLoaded) {
//     resolve("File Loaded");
//   } else {
//     reject("File Not Loaded");
//   }
// });

// promise.then((value) => console.log(value)).catch()((error) =>
//   console.log(error)
// );


// const promise = new Promise(resolve => {
//     setTimeout(resolve,5000);
// });
// promise.then(()=> console.log("Thanks for waiting"))


const wait = time => new Promise(resolve => {
    setTimeout(resolve,time);
});
wait(3000).then(()=> console.log("Thanks for waiting"))
