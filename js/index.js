let menu = document.querySelector(".main-list");
let button = document.querySelector(".burger");
let buttonOpen = document.querySelector(".burger__toggle");
let buttonClose = document.querySelector(".burger__close");
let header = document.querySelector(".main-header");

header.classList.toggle("main-header--bottom");
menu.classList.add("navigation__main-list--close");
buttonOpen.classList.toggle("burger__toggle--unshow");

button.addEventListener("click", function() {
  buttonOpen.classList.toggle("burger__toggle--unshow");
  buttonClose.classList.toggle("burger__close--unshow");
  menu.classList.toggle("navigation__main-list--close");
});
