// The date object is used to work with dates & times

// let date = new Date()
// let date = new Date(0)
// let  date = new Date(2023,0,13,2,3,4)
// let  date = new Date("January 1, 2024,00:02:00")

// date.setFullYear(2025);
// date.setMonth(12);
// date.setDate(10);
// date.setHours(15);
// date.setMinutes(34);
// date.setSeconds(23);
// date.setMilliseconds(202);

// let year = date.getFullYear();
// let dayOfMonth = date.getDate();
// let dayOfWeek = date.getDay();
// let month = date.getMonth();
// let hour = date.getHours();
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();
// let milliSeconds = date.getMilliseconds();



// console.log(`${dayOfMonth} / ${month} / ${year} ${hour}:${minutes}:${seconds} ${milliSeconds}`);



// date = date.toLocaleString();

// console.log(date);

// document.getElementById("myLabel").innerHTML = date;



let date = new Date();

function formatDate(date){
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day  = date.getDate();

    return `${month}/${day}/${year}`
}

console.log(formatDate(date));


function formateTime(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amOrPm = hours >= 12 ? "PM" : "AM"

    hours = (hours % 12) || 12

    return `${hours}:${minutes}:${seconds} ${amOrPm}`
}


console.log(formateTime(date));

