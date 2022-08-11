let offsetHeader = document.querySelector('.header__logo')
let burgerOffset = document.querySelector('.menu__box')

   burgerOffset.addEventListener('wheel', function(){
      console.log(burgerOffset.scrollTop)
      if (burgerOffset.scrollTop > 50git  ) { 
         offsetHeader.classList.add('index__hidden')
      }else{
         offsetHeader.classList.remove('index__hidden')
      }
   })