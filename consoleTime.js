/*

console.time() = Starts a timer you can use to
                - track how long an operatoin takes
                - Give each timer a unique name. 

*/
//start
console.time("Response Time");

alert("click the ok button");

setTimeout(()=>console.log('running settimeout function'),1000
)

//end
console.timeEnd("Response End")