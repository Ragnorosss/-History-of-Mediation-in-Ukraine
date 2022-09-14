const buttonAuthor = document.querySelector('.header__button')
const blockAuthor = document.querySelector('.registr ')
const formRegistr = document.querySelector('.form__registr ')

buttonAuthor.addEventListener('click', function(){
    blockAuthor.classList.toggle('hidden')
})