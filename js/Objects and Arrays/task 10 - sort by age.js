 let arr = [ { name: "John", age: 25 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 28 },
    { name: "Don", age: 100 },
    { name: "Anna", age: 22 },
    { name: "Tom", age: 35 } ];

function sortByAge(arr) {
    // Step 1: Sort the array by age
    arr.sort((a,b) => a.age > b.age ? 1: -1).forEach(element => { 
        //Step 2: loop through the array to dynamically display the names based on their age
       console.log(`Name: ${element.name}, Age: ${element.age}`);
    });
    return arr; // Step 3: Return the sorted array
}

//Display the names and ages of the people in the array
sortByAge(arr);
