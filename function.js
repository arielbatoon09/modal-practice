const open = document.getElementById('open');
const close = document.getElementById('close');
let modal_container = document.getElementById('modal-container');
let modal_background = document.getElementById('container');


open.addEventListener('click', () => {
    modal_container.classList.add('show');
    modal_background.classList.add('modal-background')
})

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
    modal_background.classList.remove('modal-background')
})