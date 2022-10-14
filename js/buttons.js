let btnContainer = document.getElementById("btn");
let targetTextContainers = document.querySelectorAll(".target");
let btns = [];
for (let i = 0; i < btnContainer.children.length; i++) {
  btns.push(btnContainer.children[i]);
}
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", onClickToggleInfo);
}
let previousId = 0;
function onClickToggleInfo(e) {
  let id = btns.indexOf(e.target);
  if (previousId !== id) {
    btnContainer.querySelector(".active").classList.remove("active");
    targetTextContainers[previousId].classList.add("hidden");
    targetTextContainers[id].classList.remove("hidden");
    e.target.classList.toggle("active");
  }
  previousId = id;
}


//changes active button on the pagination menu
function changeActivePagination(id) {
  var currentlyActive = document.getElementsByClassName("control-numbers__item--active");
  var neededActive = document.getElementById("button-" + id);

  currentlyActive[0].classList.add("control-numbers__item");
  currentlyActive[0].classList.remove("control-numbers__item--active");

  neededActive.classList.remove("control-numbers__item");
  neededActive.classList.add("control-numbers__item--active");
}


//picks the previous/next button on the pagination menu and makes it activated depending on the value
function moveButtonChoice(value) {
  var currentlyActive = document.getElementsByClassName("control-numbers__item--active");
  if ((currentlyActive[0].id.slice(7, 8) > 1 && value == -1) || (currentlyActive[0].id.slice(7, 8) < 4 && value == 1)) { 
    changeActivePagination(parseInt(currentlyActive[0].id.slice(7, 8)) + value)
   }
}
