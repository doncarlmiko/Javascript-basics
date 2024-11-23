const textBox2 = document.querySelector('#textBox2');
let output2 = document.querySelector('#output2');

const textBox3 = document.querySelector('#textBox3');
let output3= document.querySelector('#output3');

const textBox4 = document.querySelector('#textBox4');
let output4 = document.querySelector('#output4');

const textBox5 = document.querySelector('#textBox5');
let output5= document.querySelector('#output5');
//const passOutput = displayOutput(output2);


const min = (a, b) =>{
    const getMin = (a < b) ? a : b;
    const getMax = (a > b) ? a : b;
   return {min: getMin, max: getMax };
}

const calcMinAndMax =(inputbox1,inputbox2,outputBox1,outputBox2) =>{
    const input1 = Number(inputbox1.value);
    const input2 = Number(inputbox2.value);
    const {min: passMin, max: passMax } = min(input1,input2);
    
   // output2.textContent = `Minimum number is ${passMin}`;
    //output3.textContent = `Maximum number is ${passMax}`;

    if(passMin == input1 && passMax == input2){
        outputBox1.textContent =`Minimum number ${passMin}`;
        outputBox2.textContent = `Maximum number ${passMax}`;
    }
    else {
        outputBox1.textContent = `Maximum number`;
        outputBox2.textContent = `Minimum number`;
    }
    
    //output2.textContent = passMin;
    //output3.textContent = passMin;
}

//const passNumber = min(30, 12);
//console.log(`The minimum number is ${passNumber}`);
textBox2.addEventListener('input', ()=>calcMinAndMax(textBox2,textBox3,output2,output3));
textBox3.addEventListener('input', ()=>calcMinAndMax(textBox2,textBox3,output2,output3));
textBox4.addEventListener('input', ()=>calcMinAndMax(textBox4,textBox5,output4,output5));
textBox5.addEventListener('input', ()=>calcMinAndMax(textBox4,textBox5,output4,output5));