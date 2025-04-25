const array = [1, 2, 3];

// Randomly reorder the array
array.sort(() => Math.random() - 0.5);

console.log(array); // Example output: [3, 1, 5, 2, 4]
console.log(array); // Example output: [2, 4, 1, 5, 3]
console.log(array); // Example output: [5, 2, 4, 3, 1]  