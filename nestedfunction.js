/*
nested functions;- 

functions inside other functions.
Outer functions have access to inner functions.
Inner functions are 'hidden' from outside the outer function.
used in closures 

*/

function login(){
    displayUserName = (userName)=> console.log(`Welcome ${userName}!`);

    displayInboxMessages = (messages)=> console.log(`You have ${messages} new messages:)`);

    displayUserName("Karitkey");
    displayInboxMessages(2);
}

login();