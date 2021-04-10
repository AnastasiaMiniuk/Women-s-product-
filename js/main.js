(function () {
  const header = document.querySelector(".header"); /*получение элемента*/
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      /* при скролинге от верха страницы на 50*/
      header.classList.add(
        "header_active"
      ); /* присваивам header доп класс -header_active при if(true) */
    } else {
      header.classList.remove("header_active");
    }
  };
})();
