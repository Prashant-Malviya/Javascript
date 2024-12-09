
document.getElementById("login").onclick = login();

function login(){
    let username = 'Shidhartha'
    let userInbox = 1;

    function alertUser(){
        alert(`${username} you have ${userInbox} new messages!`);
        userInbox = 0;
    }

    return alertUser;
}


