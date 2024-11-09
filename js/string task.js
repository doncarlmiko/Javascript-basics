const VISITOR = prompt(`What's the “official” name of JavaScript?`,'');


if(VISITOR == 'ECMAScript'){
    alert('Right!');
}
else{
    alert(`You don't know? “ECMAScript”!`);
}

let inputNumber;
do{

    inputNumber = prompt(`Input a number:`,0);

    if(inputNumber > 0){
        alert(`greater than 0!`);
    }
    else if(inputNumber < 0){
        alert(`less than 0!`);
    }
    
    else if(inputNumber == 0){
        alert(`equal to zero!`);
        console.log(inputNumber);
    }
    else if (isNaN(inputNumber)==true || null){
        alert('Please enter a number!');
    }

}while(isNaN(inputNumber)==true);



