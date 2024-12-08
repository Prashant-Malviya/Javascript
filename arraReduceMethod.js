// array.reduce() = reduces array to a single value

let prices = [3,2,42,58,29,93];

let total = prices.reduce(checkout)

console.log(`the total is : $ ${total}`);


function checkout(total,element){
    return total + element;
}