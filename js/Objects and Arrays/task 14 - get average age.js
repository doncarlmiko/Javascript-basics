let arr = [ { name: "John", age: 25 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 28 },
    { name: "Don", age: 100 },
    { name: "Anna", age: 22 },
    { name: "Tom", age: 35 },
    { name: "Jerry", age: 50 },
 ];

function getAverageAge(arr) {
    //Get the sum of the ages of the people in the array
    const totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue.age, 0); 

    console.log(`Total average sum of ages: ${Math.round(totalSum/arr.length)}`); // Display the total Average sum of ages

    return totalSum; 
}

//Display the names and ages of the people in the array
getAverageAge(arr);
