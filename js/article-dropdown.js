
const articlePopup = document.querySelector('.article__popup')

const popupbtn = document.querySelector('.download')
const popupCloseBtn = document.querySelector('.button_close')

const themeAddBtn = document.querySelector('.change__them')

let intervalId;

document.querySelectorAll('.dropdown__switch').forEach(e => {
    e.addEventListener('click', e => {
        const menu = e.currentTarget.dataset.path;
        document.querySelectorAll('.dropdown__inner').forEach(e => {
            if (!document.querySelector(`[data-target=${menu}]`).classList.contains('hidden')) {
                intervalId = setTimeout(() => {
                    document.querySelector(`[data-target=${menu}]`).classList.add('hidden');
                }, 0);
            }

            if (document.querySelector(`[data-target=${menu}]`).classList.contains('hidden')) {
                clearTimeout(intervalId);
                intervalId = setTimeout(() => {
                    document.querySelector(`[data-target=${menu}]`).classList.remove('hidden');
                }, 0);
            }
        });
    });
});


popupbtn.addEventListener('click',function(){
        articlePopup.classList.toggle('hidden')
})


popupCloseBtn.addEventListener('click',function(){
    articlePopup.classList.add('hidden')
})