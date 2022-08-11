let popups = document.querySelector('.popup')

let button_articles = document.querySelector('.more-info')

button_articles.addEventListener('click' , function(){
   popups.classList.toggle("show__popups")
})