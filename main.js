const cartFruits = ['Banana', 'Uva', 'Laraja', 'Kiwi', 'Abacate', 'Mamão'];

const list = document.querySelector('.list');

cartFruits.forEach(element => {
    let item = element;
    let newItem = document.createElement('li')
    
    newItem.classList.add('item');
    newItem.innerHTML = element;

    list.appendChild(newItem);

})



