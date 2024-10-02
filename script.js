let menu = document.querySelector(".menu-btn");
let navBar = document.querySelector(".full-right");
let screenBlur = document.querySelector(".blur");
let navItems = document.querySelectorAll(".nav-item");

menu.addEventListener("click", function(){
    menu.classList.toggle("active");
    navBar.classList.toggle("active");
    screenBlur.classList.toggle("active");
});

for(let navItem of navItems){
    navItem.addEventListener("click", function(){
        menu.classList.remove("active");
        navBar.classList.remove("active");
        screenBlur.classList.remove("active");
    })
}