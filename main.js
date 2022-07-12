// const cartFruits = ['Banana', 'Uva', 'Laraja', 'Kiwi', 'Abacate', 'Mamão'];

// const list = document.querySelector('.list');


// cartFruits.forEach(element => {
//     let item = element;
//     let newItem = document.createElement('li')
    
//     newItem.classList.add('item');
//     newItem.innerHTML = element;

//     list.appendChild(newItem);

// })



const list = document.querySelector('.list');

const newItem = document.querySelector('.input-text');
const form = document.querySelector('.form')


form.addEventListener('submit', (event) => {
    event.preventDefault()

    console.log(event.target.elements['nome'].value)
})


