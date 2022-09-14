const buttonAuthor = document.querySelector('.header__button')
const blockAuthor = document.querySelector('.registr ')
const formRegistr = document.querySelector('.form__registr ')
const submitBtn = formRegistr.querySelector('.submit__btn ')
const formEmail = formRegistr.querySelector('.email ')
const formPassword = formRegistr.querySelector('.password ')
const checkinput = formRegistr.querySelectorAll('.empty ')
const checkRange = formRegistr.querySelectorAll('.range ')

buttonAuthor.addEventListener('click', function(){
    blockAuthor.classList.toggle('hidden')
})

formRegistr.addEventListener('submit', function (event) {
    event.preventDefault()
    
    const errorsEmpty = formRegistr.querySelectorAll('.error-empty')
    const errorsRange = formRegistr.querySelectorAll('.error-range')
    

    for(let i = 0; i < errorsEmpty.length; i++) {
        errorsEmpty[i].remove()
    }

    for(let i = 0; i < errorsRange.length; i++) {
        errorsRange[i].remove()
    }
  

    for (let i = 0; i < checkinput.length; i++) {
        if (!checkinput[i].value) {
            let error = document.createElement('div')
            error.className='error-empty'
            error.style.color = '#ED0131'
            error.innerHTML = 'Error message'
            formRegistr[i].parentElement.insertBefore(error, checkinput[i])
        }
    }

    var patternsPass = {
        'number':     '0-9',
        'special':     '!@#$%^&*',
        'latin_lower': 'a-z',
        'latin_upper': 'A-Z'
      };


      for (let i = 0; i < checkRange.length; i++) {
        
        if ( formPassword != patternsPass ) { 
            let range = document.createElement('div')
            range.className='error-range'
            range.style.color = '#ED0131'
            range.innerHTML = 'Error password'
            formRegistr[i].parentElement.insertBefore(range, checkRange[i])
        }
       
    }
   
  })