const list = document.querySelector('.list');
const newItem = document.querySelector('.input-text');
const form = document.querySelector('.form')


form.addEventListener('submit', (event) => {

    event.preventDefault();
    addElements(event.target.elements['nome'].value);

})

function addElements(elemento){
    let li = document.createElement('li');
    li.classList.add('item');
    li.innerHTML = elemento;

    list.appendChild(li);
}

