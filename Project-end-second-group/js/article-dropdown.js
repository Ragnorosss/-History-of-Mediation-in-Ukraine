const wrapperArticlesItems = document.querySelectorAll('.wrap-item-li');

wrapperArticlesItems.forEach(item => {

    item.addEventListener('click', (event) => {
        const target = event.target;

        const attribute = target.closest("[editing-loading]").getAttribute("editing-loading")

        if(target.closest(".article__dropmenu")) return;

        if(attribute === 'false'){
            target.closest(".wrap-item-li").setAttribute("editing-loading", true);

            const wrapperDropmenu = document.createElement("div");
            wrapperDropmenu.classList.add("article__dropmenu");
            wrapperDropmenu.innerHTML = `
               <div class="dropmenu__author">
                  <img src="/images/avatar.png" alt="" class="dropmenu__avatar article__item-img">
                  <div class="article__dropmenu-name">Name</div>
               </div>
               <div class="dropmenu__filter-items">
                  <ul class="dropmenu__lists">
                     <h2 class="dropmenu__titel">Назва статті</h2>
                     <div class="dropmenu__selector">                    
                        <div class="dropmenu__list-items">
                            <button class="dropdown__switch">Період</button>
                            <div class="dropdown__inner">
                               <li class="dropmenu__list-item hidden">90-ті</li>
                               <li class="dropmenu__list-item hidden">1998-2004</li>
                               <li class="dropmenu__list-item hidden">2004-2010</li>
                               <li class="dropmenu__list-item hidden">2010-2014</li>
                            </div>
                         </div>
                         <div class="dropmenu__list-items">
                            <button class="dropdown__switch">Тема 1</button>
                            <div class="dropdown__inner">
                               <li class="dropmenu__list-item hidden">Тема 1</li>
                               <li class="dropmenu__list-item hidden">Тема 2</li>
                               <li class="dropmenu__list-item hidden">Тема 3</li>
                            </div>
                         </div>
                         <div class="dropmenu__list-items">
                            <button class="dropdown__switch">Тема 2</button>
                            <div class="dropdown__inner">
                               <li class="dropmenu__list-item hidden">Тема 1</li>
                               <li class="dropmenu__list-item hidden">Тема 2</li>
                               <li class="dropmenu__list-item hidden">Тема 3</li>
                            </div>
                         </div>
                         <div class="dropmenu__list-items">
                            <button class="dropdown__switch">Тема 3</button>
                            <div class="dropdown__inner">
                               <li class="dropmenu__list-item hidden">Тема 1</li>
                               <li class="dropmenu__list-item hidden">Тема 2</li>
                               <li class="dropmenu__list-item hidden">Тема 3</li>
                            </div>
                         </div>
                     </div>
                     <button class="change__them">Додати тему</button>
                  </ul>
                  <p class="dropmenu__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                  <div class="dropmenu__buttons">
                     <button class="dropmenu__btn-button">Завантажити</button>
                     <button class="dropmenu__btn-button ">Змінити</button>
                     <button class="dropmenu__btn-button hidden">Видалити статтю</button>
                     <button class="dropmenu__btn-active popup"><img src="/images/icons/icon-pdf.png" alt=""></button>
                  </div>
               </div>
        `;

            event.target.closest(".wrap-item-li").append(wrapperDropmenu);

        }else if (attribute === 'true'){
            target.closest(".wrap-item-li").setAttribute("editing-loading", false);
            target.closest(".wrap-item-li").lastChild.remove()
        }

    })

})

