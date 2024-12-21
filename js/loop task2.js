
const Inputname = 'Mustafa';
    const para = document.createElement('p');
    const phonebook = [
      { name : 'Chris', number : '1549' },
      { name : 'Li Kang', number : '9634' },
      { name : 'Anne', number : '9065' },
      { name : 'Francesca', number : '3001' },
      { name : 'Mustafa', number : '6888' },
      { name : 'Tina', number : '4312' },
      { name : 'Bert', number : '7780' },
      { name : 'Jada', number : '2282' },
    ]
    
    //console.log(phonebook[0]);
    // Add your code here
    let phonebookItem;
    //console.log(phonebook[2]);
    
    //let found = false;
    
    for(phonebookItem = 0; phonebookItem <=phonebook.length-1; phonebookItem++){
        if (phonebook[phonebookItem].name === Inputname){
            
            para.textContent = `name: ${phonebook[phonebookItem].name} number: ${phonebook[phonebookItem].number}`;
            //found = true;
            break;
        }
        else{
            para.textContent=`Not found`;
            console.log(phonebook[phonebookItem].name);
        }
        
    }

    // Don't edit the code below here!
    const section = document.querySelector('section');
    section.appendChild(para);