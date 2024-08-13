let menuIcon = document.querySelector(".menu-icon");
let dropDown = document.querySelector(".drop-down");
let displayNone = document.querySelector(".none")

function dropDownMenu() {
  menuIcon.classList.toggle("fa-xmark");
  dropDown.classList.toggle("none");
}