const myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
    const list = document.createElement('ul');
    
    // Add your code here
    let foodList;
   for(foodList of myArray){
    const listItems=document.createElement('li');
     listItems.textContent=foodList;
     
     list.appendChild(listItems);
    }
    // Don't edit the code below here!

    const section = document.querySelector('section');
    section.appendChild(list);