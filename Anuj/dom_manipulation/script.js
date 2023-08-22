const box1 = document.getElementById("box-1");
// box1.innerHTML = "<p>Ini diubah dari javascript</p>";

box1.style.backgroundColor = "salmon";

box1.classList.add("active");
console.log(box1);
box1.classList.remove("active");
console.log(box1);

// Creating new element

const newParagraph = document.createElement("p");
newParagraph.innerHTML = "Ini dibuat dari javascript";
newParagraph.classList.add("box");

const container = document.getElementById(".container");
container.appendChild(newParagraph);

// const myBody = document.body;
// console.log(myBody);

// const box2 = document.getElementById("box-2");
// console.log(box2);

// const divs = document.getElementsByTagName("p");
// console.log(divs);

// const divs2 = document.getElementsByClassName("box");
// console.log(divs2);

// const divs3 = document.querySelector("#box-2");
// console.log(divs3);
