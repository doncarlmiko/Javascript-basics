let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };

let sum = 0; // call the calcSum method to get the sum of the salaries

for(let salary in salaries){ // loop through the salaries object
    sum += salaries[salary]; // add the salary to the sum
}

console.log(`The total salaries of the employees: ${sum}`); // 390