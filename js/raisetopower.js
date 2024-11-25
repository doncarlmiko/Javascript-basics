const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');

button1.addEventListener('click',checkInput);
button2.addEventListener('click',checkInput);

function calcIntegerExponent(integerInput,integerExponent){
    let result = integerInput;
    let exponent = integerExponent;
    let i;
    for(i = 1 ; i < exponent; i++){
        result *=  result;
        
    }
    return result;

}

function checkInput(){
    let integerInput;
    let integerExponent;

    do{
        // Prompt for integer input
        integerInput = prompt('Input an integer','');
        if (integerInput === null) {
            alert('Operation cancelled.');
            return; // Exit the function immediately
        }
        else if(integerInput <= 0){
            alert(`Input must be greater than zero!`);
        }
        else if (isNaN(integerInput)==true || null){
            alert('Please enter a number!');
        }
        integerInput = Number(integerInput);
    }while(isNaN(integerInput)==true || integerInput === 0 || integerInput <0 || integerInput === null);

    do{
        integerExponent= prompt('Enter an exponent','');
        
        if (integerExponent === null) {
            alert('Operation cancelled.');
            return; // Exit the function immediately
        }
        else if(integerExponent <= 0){
            alert(`Input must be greater than zero!`);
        }
        else if (isNaN(integerExponent)==true || null){
            alert('Please enter a number!');
        }
        integerExponent = Number(integerExponent);
    
    }while(isNaN(integerExponent)==true || integerExponent == 0 || integerExponent <0  || integerExponent == null);
     
    alert(`Result for ${integerInput} raise to ${integerExponent}: 
    ${calcIntegerExponent(integerInput,integerExponent)}`);

}

 /*const ask = (question, yes, no) => {
    confirm(question) ? yes() : no();
  }
  
  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  ); */


