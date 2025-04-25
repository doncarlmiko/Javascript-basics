let schedule = {};

function isEmpty(obj) {
   // check if the object has no properties
   for(let emptyObj in obj){
      return false; // if the object has properties, return false
   }
   return true; // if the object has no properties, return true
}

alert( isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule)); // false    

console.log(schedule['8:30']);