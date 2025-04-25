function unique(arr) {
   const sortUnique = arr.filter((item, index) => arr.indexOf(item) === index);
    return sortUnique; // Step 3: Return the unique array
  }
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
console.log(`Unique items: ${unique(strings)}` ); // Hare, Krishna, :-O