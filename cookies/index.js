// cookie = a small text file stored on your computer used to rember information about the user saved in name=value pairs


// document.cookie = "firstName = Krishna; expires=Sun, 1 January 2030 12:00 AM; path=/";
// document.cookie = "lastName = Malviya; expires=Sun, 1 January 2002 12:00:00 IST; path=/";

// console.log(document.cookie);

function setCookie(name,value,daysToLive){
    const date = new Date();

    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000)

    let expires = "expires=" + date.toUTCString();

    document.cookie = `${name}=${value}; ${expires}; path=/`
}


setCookie("email","prashant@gmail.com",365)
setCookie("Prashant","Malviya",365)

// console.log(document.cookie);


function deleteCookie(name){
    setCookie(name,null,null);
}

// console.log(document.cookie);

// deleteCookie("firstName")
// deleteCookie("lastName")
// deleteCookie("email")

function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);

    const cArray = cDecoded.split("; ");

    let result = null;

    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1)
        }
    })


    console.log(cDecoded);
    
}

console.log(getCookie("firstName"))
console.log(getCookie("lastName"))


