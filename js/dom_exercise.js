const redParagraphText = document.querySelector(".red");
const blueHeaderText = document.querySelector(".blue");
const container = document.querySelector(".container");

const headerFirstchild = document.createElement("h1");
const paragraphSibling = document.createElement("p");

//change color for classes 
redParagraphText.style.color = "red";
blueHeaderText.style.color = "blue";

//container.style.cssText = "color: blue; background: white;";
container.style["backgroundColor"] = "pink";
container.style.border = "5px solid black";
container.style["borderColor"] = "black";

headerFirstchild.textContent="I’m in a div";
paragraphSibling.textContent ="ME TOO!";

container.appendChild(headerFirstchild);
container.appendChild(paragraphSibling);

