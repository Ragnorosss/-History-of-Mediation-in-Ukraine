let button_articles = document.querySelectorAll('.more-info')

let popups = document.querySelector('.popup')

   button_articles.forEach(button_articles => {
      button_articles.addEventListener('click', function(){
      popups.classList.toggle('show__popups')
      })
   });   



