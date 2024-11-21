let textBox2 = document.querySelector('#textBox2');
let output2 = document.querySelector('#output2');
let textBox3 = document.querySelector('#textBox3');
let output3= document.querySelector('#output3');
//const passOutput = displayOutput(output2);

function min(a, b){
    const getMin = (a < b) ? a : b ;
    return getMin;
}

function calcMinAndMax (){
    const input1 = textBox2.value;
    const input2 = textBox3.value;
    const result = min(input1,input2);

    const outputMin = ( result > input1 ) ? output2.textContent= `This is the minimum number` : output3.textContent= `This is the maximum number`;
}

//const passNumber = min(30, 12);
//console.log(`The minimum number is ${passNumber}`);
textBox2.addEventListener('input', calcMinAndMax);
textBox3.addEventListener('input', calcMinAndMax);
