const articlebutton = document.querySelector('.articles-items')
const articleDropMenu = document.querySelector('.article__dropmenu')

articlebutton.addEventListener('click', function(e){
    articleDropMenu.classList.toggle('hidden')

   
})