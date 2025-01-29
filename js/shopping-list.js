const userInput = document.querySelector('#item');
const addItemButton = document.querySelector('button');
const shoppingList = document.querySelector('ul');
const deleteAllList = document.querySelector('#DeleteAll');

//userInput.value;
addItemButton.addEventListener('click',getUserInput);
deleteAllList.addEventListener('click',deleteAllItems);


function getUserInput(){
    const itemList = document.createElement('li');
    const listName = document.createElement('span');
    const deleteList= document.createElement('button');
    //const deleteAllList= document.createElement('button');

    if(userInput.value != ''){
        listName.textContent =userInput.value;
        deleteList.textContent='Delete';
        
        deleteAllList.style.display='block';
        itemList.setAttribute("class", "highlight");


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

