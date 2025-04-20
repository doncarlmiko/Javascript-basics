function camelize(str){
    //Step 1: Split the string into an array of words using '-' as the delimiter
     const words = str.split('-');

     //Step 2: Capitalize the first letter of each word except the first one
     const nextWords = words.map((word, index) => {
        if(index === 0) return word; // Return the first word as is
        return word.charAt(0).toUpperCase() + word.slice(1); // Capitalize the first letter of each subsequent word
     });
     return nextWords.join(''); // Join the words back together without any spaces
}

console.log(camelize("background-color")); // 'backgroundColor'
