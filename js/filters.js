const openFiletr = document.querySelector('.filter__img')

const filetrBar = document.querySelector('.filters')


// function scrollDown() { //scrolls down filter on click
//     var myDiv = document.getElementById("filters");
//     myDiv.scrollTop = myDiv.scrollHeight;
// }


openFiletr.addEventListener('click' , function(){
    filetrBar.classList.toggle('hidden')
})