const inputName = document.querySelector("input[name='name']");
const span = document.querySelector('.container > span');

inputName.addEventListener('change', createText)


function createText(el) {

    let name = el.target.value;
    let text = `Hello ${name}`;

    span.innerHTML = '';
    span.insertAdjacentHTML('afterbegin', text);
}