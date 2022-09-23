const articlebutton = document.querySelectorAll('.articles-items__item')
const articleDropMenu = document.querySelector('.article__dropmenu')

const buttonimg = document.querySelector('.dropmenu__btn-active ')
const articlepopup = document.querySelector('.article__popup')

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

document.querySelectorAll('.articles-items').forEach(articlebutton => {
        articlebutton.addEventListener("click", function(){
            articleDropMenu.classList.toggle('hidden')
        })
});




document.addEventListener('keydown', function (e) {
    if ( e.key === 'Tab' || e.key === 'Escape' ) {
        articleDropMenu.classList.add('hidden')
    }
})

