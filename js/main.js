function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function toggleMenuSmall(menu) {
  menu.classList.toggle("menu-xs__contentbox_visible");
}

function closeMenuSmall(menu) {
  menu.classList.remove("menu-xs__contentbox_visible");
}