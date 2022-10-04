
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

// let ulList = document.querySelector("dropmenu__lists");
//
// function addLists () {
//     const creatWraper = document.createElement('div')
//     creatWraper.classList.add('dropmenu__list-items')
//     creatWraper.innerHTML =`
//     <button data-path="two" class="dropdown__switch">Тема 1</button>
//         <ul data-target="two" class="dropdown__inner hidden">
//             <li class="dropmenu__list-item">Тема 1</li>
//             <li class="dropmenu__list-item">Тема 2</li>
//             <li class="dropmenu__list-item">Тема 3</li>
//         </ul>
//     `;
//
//     document.querySelector("dropmenu__lists").append(creatWraper);
// }
//
// themeAddBtn.addEventListener('click',function(){
//     addLists()
// })

// let ulList = document.querySelector(".change__them");
// let countTopic = 0;
//
// ulList.addEventListener('click', (event) => {
//     if(event.target.closest(".dropmenu__lists")){
//         countTopic += 1
//
//         const creatWraper = document.createElement('div')
//         creatWraper.classList.add('dropmenu__list-items')
//         creatWraper.innerHTML =`
//         <button data-path="two" class="dropdown__switch">Тема ${countTopic}</button>
//             <ul data-target="two" class="dropdown__inner hidden">
//                 <li class="dropmenu__list-item">Тема 1</li>
//                 <li class="dropmenu__list-item">Тема 2</li>
//                 <li class="dropmenu__list-item">Тема 3</li>
//             </ul>
//         `;
//
//         event.target.closest(".dropmenu__lists").append(creatWraper);
//         console.log(event.target.closest(".dropmenu__lists"))
//     }
// })

const ulList = document.querySelectorAll(".change__them");

ulList.forEach(item => {

    item.addEventListener('click', (event) => {
        if(event.target.closest(".dropmenu__lists")){

            const creatWraper = document.createElement('div')
            creatWraper.classList.add('dropmenu__list-items')
            creatWraper.innerHTML =`
        <button data-path="two" class="dropdown__switch">Тема 1</button>
            <ul data-target="two" class="dropdown__inner hidden">
                <li class="dropmenu__list-item">Тема 1</li>
                <li class="dropmenu__list-item">Тема 2</li>
                <li class="dropmenu__list-item">Тема 3</li>
            </ul>
        `;

            event.target.closest(".dropmenu__lists").append(creatWraper);
            console.log(event.target.closest(".dropmenu__lists"))
        }
    })

})
