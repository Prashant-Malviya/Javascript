let cards = ["A", "2", "4", "D", "20", "E"];

console.log(cards);

const suffle = (array) => {
  let currentIndex = array.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * array.length);

    currentIndex -= 1;

    swap(currentIndex, randomIndex, array);
  }
  return array;
};

const swap = (x, y, array) => {
  let temp = array[x];
  array[x] = array[y];
  array[y] = temp;
};

for(let i = 0; i < cards.length; i++) {
    suffle(cards);
    console.log("suffled cards:- ", cards);
}
