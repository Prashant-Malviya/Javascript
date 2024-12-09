// Map = an object that holds key-value pairs of any data type 


const store = new Map([
    ["t-shirt",20],
    ["jeans",30],
    ["socks",10],
    ["undewear",30]
])

console.log(store.get("t-shirt"))
store.set("hat",40);
// console.log(store);

store.delete("hat")
console.log(store.has("underwear"));
console.log(store.size);
console.log(store);




store.forEach((value,key)=>console.log(`${key} $${value}`) )
