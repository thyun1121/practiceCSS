var menu_btn = document.querySelector(".button__toggle");

menu_btn.addEventListener("click", (event) => {
  var menu_item = document.querySelector(".navigation");
  menu_item.classList.toggle("menu__item__hide");
});
