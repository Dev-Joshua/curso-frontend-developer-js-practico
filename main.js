//Selecciono al elemento el cual le dare clic
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

//Utilizo su metodo addEventListener para ejecutar algo cuando se de clic al elemento
menuEmail.addEventListener("click", showDesktopMenu);

//Esta funcion hace aparecer o desaparecer la clase .inactive. Se ejecuta cada vez que den clic
function showDesktopMenu() {
  console.log("Click");
  //Ejecuta la funcion classList.toggle que quita o pone la clase 'inactive' dependiendo si la tiene o no
  desktopMenu.classList.toggle("inactive");
}
