let sideNav = document.getElementById("sidenav");
let menuBtn = document.getElementById("menu-img");
let closeMenu = document.getElementById("closemenu");

menuBtn.addEventListener('click', () => {
 sideNav.style.display = "block";
 sideNav.style.boxShadow = "0 0 0 10000px rgba(0,0,0,.50)"
});

closeMenu.addEventListener('click', () => {
  sideNav.style.boxShadow = "none";
  sideNav.style.display = "none";
});