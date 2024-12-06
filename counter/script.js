let count = 0;

document.getElementById("button-increase").onclick = () => {
  count += 1;
  document.getElementById("countingNumber").innerHTML = count;
};
document.getElementById("button-reset").onclick = () => {
  count = 0;
  document.getElementById("countingNumber").innerHTML = count;
};
document.getElementById("button-decrease").onclick = () => {
  count -= 1;
  document.getElementById("countingNumber").innerHTML = count;
};




