const sampleNumber = 7;
const sampleNumber2 = 6;
let capitalizedLetter = 'nadia';
let lastLetter = 'Don Carl Miko';

console.log(addNumber(sampleNumber));
console.log(multiplyNumber(sampleNumber,sampleNumber2));
console.log(capitalizeString(capitalizedLetter));
console.log(`Last letter is:${lastletter(lastLetter)}`);

function addNumber(add7){
    let getNumber = add7;
    let result = getNumber + 7;
    return result;
}

function multiplyNumber(sampleNumber,sampleNumber2){
    let getNumber = sampleNumber;
    let getNumber2 = sampleNumber2;
    let result = getNumber* getNumber2;
    return result;
}

function capitalizeString(getString){
    let char = getString.charAt(0);
    let convertedToUpper = char.toUpperCase();
    return convertedToUpper;
}

function lastletter(lastLetter){
    let letter= Number(lastLetter.length) - 1;
    let lastLetterResult = lastLetter.charAt(letter);
    return lastLetterResult;
}
