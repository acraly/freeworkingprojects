const btn = document.querySelector(".nav-button");
const navBar = document.querySelector(".links")


btn.addEventListener("click", function(){

    btn.classList.toggle("buttonanimate")
    navBar.classList.toggle("link")
});