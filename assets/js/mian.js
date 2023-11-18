//get DOM elements.
let burgerIcon = document.querySelector(".burger__icon");
let menu = document.querySelector(".menu");
let menuItems = document.querySelectorAll(".menu-item");



//open burger menu on click burger_icon.
burgerIcon.addEventListener("click", addActiveClass);

function addActiveClass() {
  menu.classList.toggle("active");
}

//close burger menu onSelectItem.
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", removeActiveClass);
}

function removeActiveClass() {
  menu.classList.remove("active");
}
