let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj){
  for(let multiplyNumeric in obj){
    if(typeof obj[multiplyNumeric] === 'number'){ // check if the property is a number
      obj[multiplyNumeric] *= 2; // multiply the property by 2
    }
  }
}

console.log(multiplyNumeric(menu)); // call the function to multiply the numeric properties by 2

console.log(menu.width); 