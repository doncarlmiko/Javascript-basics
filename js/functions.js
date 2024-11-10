
function favoriteAnimal(animal) {
    return animal + " is my favorite animal!";
}

console.log(favoriteAnimal('Dog'));

alert(favoriteAnimal('Sheep'));

const textBox = document.querySelector("#textBox");
let output = document.querySelector("#output");

textBox.addEventListener("keydown", (event) => {
  output.textContent = `You pressed "${event.key}".`;
});