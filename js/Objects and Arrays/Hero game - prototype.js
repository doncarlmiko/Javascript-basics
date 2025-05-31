// Initialize a constructor function for a new Hero
function Hero(name, level) {
  this.name = name;
  this.level = level;
}

// Initialize Warrior constructor
function Warrior(name, level, weapon) {
  //Chain constructor with call
  Hero.call(this, name, level);

  // Add a new property
  this.weapon = weapon;
}
function Healer(name, level, spell) {
  Hero.call(this, name, level);

  this.spell = spell;
}

// Link prototypes and add prototype methods
Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

//Prototypes
Warrior.prototype.attack = function () {
  return `${this.name} attacks with the ${this.weapon}.`;
}

Healer.prototype.heal = function () {
  return `${this.name} casts ${this.spell}.`;
}

// Add greet method to the Hero prototype
Hero.prototype.greet = function () {
  return `${this.name} says hello.`;
}

let hero1 = new Hero('Don', 1);
console.log(hero1); // Hero { name: 'Bjorn', level: 1 }
console.log(hero1.greet()); // Bjorn says hello.
console.log(Object.getPrototypeOf(hero1));

// Create instances of Warrior and Healer
const heroRole1 = new Warrior(hero1.name, 1, 'axe');
const heroRole2 = new Healer('Kanin', 1, 'cure');


console.log(heroRole1); // Warrior { name: 'Bjorn', level: 1, weapon: 'axe' }
console.log(heroRole2); // Healer { name: 'Kanin', level: 1, spell: 'cure' }
console.log(heroRole1.attack()); // Bjorn attacks with the axe.
console.log(heroRole2.heal()); // Kanin casts cure.
console.log(heroRole2.greet()); // Bjorn says hello.