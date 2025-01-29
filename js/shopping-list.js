const userInput = document.querySelector('#item');
const addItemButton = document.querySelector('button');
const shoppingList = document.querySelector('ul');

//userInput.value;
addItemButton.addEventListener('click',getUserInput);


function getUserInput(){
    const itemList = document.createElement('li');
    const listName = document.createElement('span');
    const deleteList= document.createElement('button');

    listName.textContent =userInput.value;
    deleteList.textContent='Delete';
    //itemList.textContent = `${listName.value}${deleteList.value}`;

    shoppingList.appendChild(itemList);
    itemList.appendChild(listName);
    itemList.appendChild(deleteList);

    userInput.value='';

    deleteList.addEventListener('click', ()=> shoppingList.removeChild(itemList));
}