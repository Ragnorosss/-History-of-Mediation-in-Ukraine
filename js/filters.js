const openFiletr = document.querySelector('.filter__img')

const filetrBar = document.querySelector('.filters')

const chekWidthWindow = window.matchMedia('@media(max-width: 1100px)')

// function scrollDown() { //scrolls down filter on click
//     var myDiv = document.getElementById("filters");
//     myDiv.scrollTop = myDiv.scrollHeight;
// }



function removeCssStyle () { 
    if (chekWidthWindow < 1100) {
        filetrBar.style.display = "none";
    }
}

openFiletr.addEventListener('click', function(){
        filetrBar.classList.toggle('hidden')
        removeCssStyle()
})