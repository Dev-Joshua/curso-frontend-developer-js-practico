//Selecciono al elemento el cual le dare clic
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuBurgerIcon = document.querySelector(".menu-burger");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

//Utilizo su metodo addEventListener para ejecutar algo cuando se de clic al elemento
menuEmail.addEventListener("click", toggleDesktopMenu);
menuBurgerIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

//Esta funcion hace aparecer o desaparecer la clase .inactive. Se ejecuta cada vez que den clic
function toggleDesktopMenu() {
  // console.log("Click");

  const isAsideOpen = !aside.classList.contains("inactive");

  if (isAsideOpen) {
    //Si esta abierto agregar la clase inactive al mobile-menu
    aside.classList.add("inactive");
  }

  //Ejecuta la funcion classList.toggle que quita o pone la clase 'inactive' dependiendo si la tiene o no
  desktopMenu.classList.toggle("inactive");
}

//Aparece o desaparece el menu mobile
function toggleMobileMenu() {
  const isAsideOpen = !aside.classList.contains("inactive");

  if (isAsideOpen) {
    //Si esta abierto agregar la clase inactive al mobile-menu
    aside.classList.add("inactive");
  }

  mobileMenu.classList.toggle("inactive");
}

//Aparece o desaparece el product-detail del carrito de compras
function toggleCarritoAside() {
  //Esta abierto el menu mobile? / ! -> niego, la clase sera active o menu abierto
  const isMobileMenuOpen = !mobileMenu.classList.contains("inactive");

  if (isMobileMenuOpen) {
    //Si esta abierto agregar la clase inactive al mobile-menu
    mobileMenu.classList.add("inactive");
  }
  aside.classList.toggle("inactive");
}
