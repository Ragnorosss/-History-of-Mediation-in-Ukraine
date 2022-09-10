const buttonAuthor = document.querySelector('.header__button')
const blockAuthor = document.querySelector('.registr ')

buttonAuthor.addEventListener('click', function(){
    console.log("click!")
    blockAuthor.classList.toggle('hidden')
})