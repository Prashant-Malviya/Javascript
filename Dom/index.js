// DOM  - Document object model (api)
//      an interface for changing the content of a page

// console.dir(document);

// console.log(document.title);

// console.log(document.URL)

// document.title = 'this title goes here'

// document.loaction = "http://www.google.com"


// document.body.style.backgroundColor = "skyblue"

// document.getElementById("myDiv").innerHTML = "hi"



// ---------------------------------------------------------

// let element = document.getElementById("intro")

// element.style.backgroundColor = "lightyellow"


// let fruits = document.getElementsByName("fruits")

// fruits.forEach(fruit => {
//     if(fruit.checked)
//         console.log(fruit.value);
        
// })


// let vegetables = document.getElementsByTagName("li")

// vegetables[0].style.backgroundColor = "orange"


// let dessets = document.getElementsByClassName("desserts");
// dessets[0].style.backgroundColor = "yellow"


// let element = document.querySelector("#intro")
// let element1 = document.querySelector(".desserts")

// element1.style.backgroundColor = 'blue'



// let elements = document.querySelectorAll("[for]")

// elements.forEach(element => {
   
//         element.style.backgroundColor = "red"
        
// })



// =======================================

// let element = document.body;
// let element = document.querySelector("#vegetables");

// let child = element.lastElementChild;
// let child = element.children[1];
// let parent = element.parentElement;

// let children = Array.from(element.children);

// children.forEach(child => child.style.backgroundColor = 'pink')

// console.log(parent);

// child.style.backgroundColor = 'yellow'


//--------------------------------

//add change html elements

//.innerHTML (vulnerable to xss attacks)

//.textContent (more secure)

// const nameTag = document.createElement("h1")

// nameTag.innerHTML = "" it could be dangerous as if we take something as input and we directly change in html element then someone can put some mulicious script , which can cause virus and data leaking instead that we can use textContent which passes content as  text;

// nameTag.textContent = window.prompt("enter your name")

// document.body.append(nameTag)


// const myList = document.querySelector("#vegetables");

// const listItem = document.createElement("li")

// listItem.textContent = "tomato"

// // myList.prepend(listItem)
// // myList.append(listItem)

// myList.insertBefore(listItem,myList.getElementsByTagName('li')[2])




//----------------------------------------

// const title = document.getElementById("heading")

// // title.style.backgroundColor = "red"

// title.style.color = "rgb(50,200,100"

// title.style.fontFamily = "consolas"

// title.style.textAlign = "center";

// title.style.border = "2px solid";

// title.style.display = "block"

// const element = document.getElementById("myButton");

// element.onclick = doSomething;

// function doSomething(){
//     element.style.backgroundColor = 'yellow'
// }
// function doSomethingElse(){
//     element.style.backgroundColor = 'orange'
// }


// const element = document.body;

// element.onload = doSomething;

// const element = document.getElementById("myInput")
// heading.style.color = 'blue'

// element.onchange = doSomething;


// const element = document.getElementById("myDiv")

// element.style.height = '100px'
// element.style.width = '100px'
// element.style.backgroundColor = 'red'
// element.style.border = '2px solid white'


// element.onmouseover = doSomething;
// element.onmouseout = doSomethingElse;


// -----------------------------

//.addEventListener (event,function,useCapture)
// you can add many event handlers to one element.
// even the same event that invokes different function

// const outerElement = document.getElementById("outerDiv");

// outerElement.style.height = '300px'
// outerElement.style.width = '300px'
// outerElement.style.backgroundColor = 'blue'

// element.addEventListener("click",changeOnClickColor)
// outerElement.addEventListener("click",changeOnClickColor,true)

// function changeOnClickColor(){
//     alert(`You selected ${this.id}`)
//     this.style.backgroundColor = "lightgreen"
// }

// function changeColor(){
//     element.style.backgroundColor = "orange"
// }
// function changeAnotherColor(){
//     element.style.backgroundColor = "yellow"
// }

// element.addEventListener("mouseover",changeColor);
// element.addEventListener("mouseout",changeAnotherColor);


// -------------------------------
// js show hide html elements 

// const myBtn = document.querySelector("#myBtn");

// const image = document.querySelector("#img");

// const newElement = document.createElement("p")

// newElement.textContent = 'Press the button...'

// document.body.append(newElement)

// image.style.width = '400px'
// image.style.height = "200px"
// image.style.visibility = "hidden"



// myBtn.addEventListener("click",()=>{
    // if(image.style.display == "none"){
    //     image.style.display = "block"
    // }else{
    //     image.style.display = "none"
    // }

//     if(image.style.visibility == "hidden"){
//         image.style.visibility = "visible"
//     }else{
//         image.style.visibility = "hidden"
//     }
// })

// const myDiv = document.getElementById("myDiv")

// window.addEventListener("keydown",move)

// let x = 0, y = 0;

// function move(event){
//     switch(event.key){
//         case "ArrowDown":
//             y += 5
//             myDiv.style.top = y + "px"
//             break;

//         case "ArrowUp":
//             y -= 5
//             myDiv.style.top = y + "px"
//             break;

//         case "ArrowRight":
//             x += 5
//             myDiv.style.left = x + "px"
//             break;
        
//         case "ArrowLeft":
//             x -= 5
//             myDiv.style.left = x + "px"
//             break;
        
//         default:
//             break; 


//     }
// }


// ------------------------------

// js animation 

// const myButton = document.getElementById("myButton");
// const myAnimation = document.getElementById("myDiv");

// myAnimation.style.top = '10rem'
// myAnimation.style.left = '10rem'

// myButton.addEventListener("click",begin);

// function begin(){
//     let timerId = null;

//     // let x = 0;

//     // let y = 0;

//     // let degrees = 0;

//     let scaleX = 1;
//     let scaleY = 1;

//     timerId = setInterval(frame,5);

//     function frame(){
//         // if(y >= 200 || x >= 300){ 
//         // if(x >= 400 || y >= 400 || degrees >= 360){
//         // if(scaleX >= 2 || scaleY >= 2){
//         if(scaleX <= 0.1 || scaleY <= 0.1){
//             clearInterval(timerId);
//         }else{
//             // degrees += 2;
//             // x += 1;
//             // y += 1;
//             // myAnimation.style.left = x + "px";
//             // myAnimation.style.top = y + "px";
//             // myAnimation.style.transform = "rotateZ("+degrees+"deg)"

//             scaleX -= 0.01;
//             scaleY -= 0.01;
//             myAnimation.style.transform = "scale("+scaleX+","+scaleY+")";
//         }
//     }
// }


// ---------------------------------- 








