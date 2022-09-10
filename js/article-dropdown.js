const articlebutton = document.querySelector('.articles-items__item')
const articleDropMenu = document.querySelector('.article__dropmenu')
const buttonimg = document.querySelector('.dropmenu__btn-active ')
const articlepopup = document.querySelector('.article__popup')


articlebutton.addEventListener('click', function(){
    articleDropMenu.classList.toggle('hidden')
    document.addEventListener('click', function (e) { 
        if ( e.target !==  document.querySelector('.articles-items__item')) {
            document.querySelector('.article__dropmenu').classList.add('hidden')
            
        }
        else { 
            document.querySelector('.article__dropmenu').classList.remove('hidden')
        }
    })

})

buttonimg.addEventListener('click', function(){
    articlepopup.classList.toggle('hidden')
})

document.addEventListener('keydown', function (e) {
    if ( e.key === 'Tab' || e.key === 'Escape' ) {
        articleDropMenu.classList.add('hidden')
    }
})
