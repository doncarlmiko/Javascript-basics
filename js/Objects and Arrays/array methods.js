const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumOfTripledEvens(array) {
      // Step 1: If the element is an even number (filter)
      // Step 2: Multiply this number by three (map)
      // Step 3: Add the new number to the total
      const filterArray = array.filter((num)=> num% 2 === 0).map((num) => num * 3).reduce((total, currentItem)=>total + currentItem);
      
    return filterArray; // Return the total sum of the tripled even numbers
  }
  console.log(`Total sum: ${sumOfTripledEvens(array)}`); // Outputs 90