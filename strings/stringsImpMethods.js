let username = 'prashant'

let name = '  raja  '

let phoneNumber = '123-232-2123'

// console.log(username.length);
// console.log(username.charAt(4));
// console.log(username.indexOf('a'))
// console.log(username.lastIndexOf('a'))
// name = name.trim();
// console.log(name);

// console.log(username.toUpperCase());
// console.log(username.toLowerCase());

// phoneNumber = phoneNumber.replaceAll('-','');

// console.log(phoneNumber);


//slice method <----------------

// slice method trim somethind from starting index to index-1 posstion 

let fullName = 'Prashant Malviya'

let firstName;
let lastName;

// firstName = fullName.slice(0,8)
// lastName = fullName.slice(9)

firstName = fullName.slice(0,fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ")+1);

console.log(firstName);
console.log(lastName);


