const userInput = document.querySelector('#item');
const addItemButton = document.querySelector('button');
const shoppingList = document.querySelector('ul');
const deleteAllList = document.querySelector('#DeleteAll');

//Event handling for Adding items and deleting all lists.
addItemButton.addEventListener('click',getUserInput);
deleteAllList.addEventListener('click',deleteAllItems);


function getUserInput(){
    const itemList = document.createElement('li');
    const listName = document.createElement('span');

    //delete button for each item.
    const deleteList= document.createElement('button');

    if(userInput.value != ''){
        
        //gets the user input and put it on the list item.
        listName.textContent =userInput.value;
        deleteList.textContent='Delete';
        
        itemList.setAttribute("class", "highlight");

        deleteAllList.style.display='block';

        //append itemList, listName and deleteList to their respective parents.
        shoppingList.appendChild(itemList);
        itemList.appendChild(listName);
        itemList.appendChild(deleteList);

        userInput.value='';

        deleteList.addEventListener('click', ()=> {
            shoppingList.removeChild(itemList);
            checkIfEmpty();

        });
    }

    else{
        alert('Please input an item!');
    }
    
}

function deleteAllItems(){
    shoppingList.textContent = '';
    deleteAllList.style.display='none';
}

function checkIfEmpty(){
    if(shoppingList.children.length === 0){
        deleteAllList.style.display='none';
    }
}

