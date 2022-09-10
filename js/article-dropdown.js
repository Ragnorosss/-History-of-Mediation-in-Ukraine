const articlebutton = document.querySelector('.articles-items')
const articleDropMenu = document.querySelector('.article__dropmenu')
const buttonimg = document.querySelector('.dropmenu__btn-active ')
const articlepopup = document.querySelector('.article__popup')

articlebutton.addEventListener('click', function(e){
    articleDropMenu.classList.toggle('hidden')

   
})

buttonimg.addEventListener('click', function(e){
    articlepopup.classList.toggle('hidden')

})