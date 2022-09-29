const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener("click", despliegueMenu);

function despliegueMenu(){
    console.log("click");
desktopMenu.classList.toggle("inactive")
}