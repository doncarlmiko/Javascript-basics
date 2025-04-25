const arrayNumbers = [5, 3, 8, 1];

function filterRange(arr, a, b) {
    //Step 1: Create a new array
    //Step 2: Loop through the original array and check if each element is with values higher or equal to a and lower or equal to b
    return arr.filter(item => (a <= item && item <= b));
}

let filtered = filterRange(arrayNumbers, 1, 8);


console.log(filtered); // 3,1 (matching values)

console.log(arrayNumbers); // 5,3,8,1 (not modified)