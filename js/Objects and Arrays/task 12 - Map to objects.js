let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

const users = [ john, pete, mary ];


const usersMapped = [
  { fullName: users[0].name +' '+ users[0].surname, id: 1 },
  { fullName: users[1].name +' '+ users[1].surname, id: 2 },
  { fullName: users[2].name +' '+ users[2].surname, id: 3 }
];

console.log(  ) // 1
console.log( `Full name: ${usersMapped[2].fullName}, ID: ${usersMapped[2].id}`); // John Smith