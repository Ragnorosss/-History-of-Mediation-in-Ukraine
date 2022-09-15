const buttonAuthor = document.querySelector('.header__button-button')
const blockAuthor = document.querySelector('.registr ')
const formRegistr = document.querySelector('.form__registr ')
const submitBtn = formRegistr.querySelector('.submit__btn ')
const formEmail = formRegistr.querySelector('.email ')
const formPassword = formRegistr.querySelector('.password ')
const checkinput = formRegistr.querySelectorAll('.empty ')
const checkRange = formRegistr.querySelectorAll('.range ')
const errorEmpty = document.querySelectorAll('.error-empty')

buttonAuthor.addEventListener('click', function(){
    blockAuthor.classList.toggle('hidden')
})

formRegistr.addEventListener('submit', function (event) {
    event.preventDefault()
    
    const errorsEmpty = formRegistr.querySelectorAll('.error-empty')
    const errorsRange = formRegistr.querySelectorAll('.error-range')
    

    

    for (let i = 0; i < checkinput.length; i++) {
        if (!checkinput[i].value) {
           
            errorEmpty.forEach(errorEmpty => {
                document.querySelector('.submit__btn').addEventListener('click', function(){
                    errorEmpty.classList.remove('hidden')
                })
            });
        }
    }

    var patternsPass = {
        'number':     '0-9',
        'special':     '!@#$%^&*',
        'latin_lower': 'a-z',
        'latin_upper': 'A-Z'
      };


      for (let i = 0; i < checkRange.length; i++) {
        
        if ( !formPassword != patternsPass ) { 
       
            document.querySelector('.submit__btn').addEventListener('click',function(e){
                document.querySelector('.error-password').classList.remove('hidden')
            })
        }
       
    }
   
  })