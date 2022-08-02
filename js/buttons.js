let btnContainer = document.getElementById("btn");
let targetTextContainers = document.querySelectorAll(".target");
let btns = [];
for (let i = 0; i < btnContainer.children.length; i++) {
  btns.push(btnContainer.children[i]);
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
}