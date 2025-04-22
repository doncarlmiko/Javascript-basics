let arr = [5, 3, 8, 1];

function filterRangeInPlace(arrayFilter,a,b) {
    
    //Step 1: Loop through the original array and check if each element is with values higher or equal to a and lower or equal to b
    for (let i = 0; i < arrayFilter.length; i++) {
        if(a <= arrayFilter[i] && arrayFilter[i] <= b) {
            //Step 2: If the element is within the range, we keep it in the array
            continue;
        }
        else{
            arrayFilter.splice(i,1); //Step 3: If the element is not within the range, we remove it from the array
            i--;
        }
    }
    return arrayFilter;
}

console.log(filterRangeInPlace(arr,5,9)); // removed the numbers except from a to b
console.log(`Numbers left on array: ${arr}`); // 5,3,8,1 (modified)