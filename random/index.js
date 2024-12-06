
let x
let y
let z

document.getElementById("roll").onclick = () => {
  x = Math.ceil(Math.random() * 6);
  y = Math.ceil(Math.random() * 6);
  z = Math.ceil(Math.random() * 6);

  document.getElementById("label1").innerHTML = x;
  document.getElementById("label2").innerHTML = y;
  document.getElementById("label3").innerHTML = z;
};
