// async - makes a function return a Promise 
// await - makes a function wait for a Promise 

// const loadFile = new Promise((resolve,reject)=>{
//     let fileLoaded = true;

//     if(fileLoaded){
//         resolve("file loaded")
//     }else{
//         reject("file not loaded")
//     }
// })

// loadFile.then(value => console.log(value).catch(error => console.log(error))
// )

// async function loadFile() {
//     let fileLoaded = true;

//     if(fileLoaded){
//         return 'file loaded'
//     }else{
//         throw 'file not loaded'
//     }
// }

// loadFile().then(value => console.log(value)
// ).catch(error => console.log(error)
// )


function loadFile() {
    let fileLoaded = true;

    if(fileLoaded){
        return Promise.resolve("file loaded")
    }else{
        throw Promise.reject("file not loaded")
    }
}

Promise.then(value => console.log(value)
).catch(error => console.log(error)
)