const refuseGuest = document.querySelector(".refused");
const admitGuest = document.querySelector(".admitted");

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

let person;

admitGuest.textContent=`Admit:`;
refuseGuest.textContent=`Refuse:`;

for(person of people){
    
    if(person === 'Phil' || person === 'Lola'){
        refuseGuest.textContent +=`${person}, `;
    }
    else{
        admitGuest.textContent+=`${person},`;
    }

}

refuseGuest.textContent = refuseGuest.textContent.slice(0,refuseGuest.textContent.length-2) +'.';

admitGuest.textContent = admitGuest.textContent.slice(0,admitGuest.textContent.length-2) +'.';