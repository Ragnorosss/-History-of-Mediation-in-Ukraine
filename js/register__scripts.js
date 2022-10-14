const LoginBtn = document.querySelector('#log-in')
const SignInBtn = document.querySelector('#sign-up')

const formLogin = document.querySelector('.registr')
const formSign = document.querySelector('.sign__in')


const formRegistr = document.querySelector('.form__registr ')
const formSignin = document.querySelector('.form__signin ')


const burgerSignin = document.querySelector('.signin')
const burgerLogin = document.querySelector('.login')

const submitBtn = document.querySelector('.submit__btn ')
const submitBtnSignIn = document.querySelector('.submit__btn-signin')
const formEmail = document.querySelector('.email ')
const formPassword = document.querySelector('.password ')
const checkinput = document.querySelectorAll('.empty ')
const checkRange = document.querySelectorAll('.range ')
const errorEmpty = document.querySelectorAll('.error-empty')
const errorPass = document.querySelectorAll('.error-password')

LoginBtn.addEventListener('click', function(){
    formLogin.classList.toggle('hidden')
})

SignInBtn.addEventListener('click', function(){
    formSign.classList.toggle('hidden')
})

burgerSignin.addEventListener('click', function(){
    formSign.classList.toggle('hidden')
})

burgerLogin.addEventListener('click', function(){
    formLogin.classList.toggle('hidden')
})

formRegistr.addEventListener('submit', function (event) {
    event.preventDefault()
    
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

formSignin.addEventListener('submit', function (event) {
    event.preventDefault()
    
    for (let i = 0; i < checkinput.length; i++) {
        if (!checkinput[i].value) {
            errorEmpty.forEach(errorEmpty => {
                submitBtnSignIn.addEventListener('click', function(){
                    errorEmpty.classList.remove('hidden')
                })
            });
        }
    }

 

      for (let i = 0; i < checkRange.length; i++) {
        
        if ( !formPassword != patternsPass ) { 
            errorPass.forEach(errorPass => {
                submitBtnSignIn.addEventListener('click', function(){
                    errorPass.classList.remove('hidden')
                })
            });
        }
       
    }
   
})