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

const articleWrapper = document.querySelectorAll('.dropmenu__buttons')

const article_popup = document.querySelector('.article_popup')
const dropmenuBtnPopup = document.querySelectorAll('.dropmenu__btn-button')

articleWrapper.forEach(dropmenuBtnPopup =>{
    dropmenuBtnPopup.addEventListener('click', function(){
        article_popup.classlist.toggle('hidden')
    })
})



