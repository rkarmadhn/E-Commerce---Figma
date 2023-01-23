const btnShow = document.querySelector(".btn-menu");
const btnHide = document.querySelector(".btn-hide");
const navItems = document.querySelector(".nav-items");

btnShow.onclick = () => {
  btnShow.style.display = "none";
  btnHide.style.display = "block";
  navItems.style.left = "0";
  inputSearch.classList.add('hide')
};

btnHide.onclick = () => {
  btnShow.style.display = "block";
  btnHide.style.display = "none";
  navItems.style.left = "-100%";
  inputSearch.classList.add('hide')
};

// dropdown
const dropdownTitle = document.querySelector(".dropdown-title");
const dropdownMenu = document.querySelector(".dropdown-menus");
const arrowUp = document.querySelector(".fa-arrow-up");
const arrowDown = document.querySelector(".fa-arrow-down");

dropdownTitle.onclick = () => {
    dropdownMenu.classList.toggle("show");
    dropdownMenu.classList.toggle("hide");
    arrowUp.classList.toggle("show");
    arrowUp.classList.toggle("hide");
    arrowDown.classList.toggle("show");
    arrowDown.classList.toggle("hide");
};

// form
const btnSearch = document.querySelector(".fa-magnifying-glass");
const inputSearch = document.querySelector(".input-search");
btnSearch.onclick = () => {
  inputSearch.classList.toggle("hide");
  inputSearch.classList.toggle("show");
};
