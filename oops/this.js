//this - reference to a particular object 
//      the object depends on the immeidate context



// const car1 = {
//     model: "Tesla",
//     color: "black",
//     year: 2023,

//     drive : function(){
//         console.log(`You drive the ${this.model}`);
//     }
// }
// const car2 = {
//     model: "Maruti",
//     color: "white",
//     year: 2023,

//     drive : function(){
//         console.log(`You drive the ${this.model}`);
//     }
// }

// car1.drive();          
// car2.drive();                


// if we use this keyword outside of an object  then 

console.log(this); //it basically refers to window object

this.name = 'krishna and radhika'

console.log(this.name);
