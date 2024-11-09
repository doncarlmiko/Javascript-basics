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
        console.log(inputNumber);
    }
    else if(inputNumber < 0){
        alert(`less than 0!`);
        console.log(inputNumber);
    }
    
    else if(inputNumber == 0){
        alert(`equal to zero!`);
    }
    else if (isNaN(inputNumber)==true || null){
        alert('Please enter a number!');
        console.log(inputNumber);
    }

}while(isNaN(inputNumber)==true);

let result = (inputNumber + 80 < 4) ? 'Below' : 'Over';
console.log(result);

if (12 + 80 < 4) {
  result = 'Below';
} else {
  result = 'Over';
}

let login = 'Director';
let message = (login == 'Employee') ? 'Hello'
? (login == 'Director') :'Greetings'
? (login == '') : 'No login' : '';

console.log(login);

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

