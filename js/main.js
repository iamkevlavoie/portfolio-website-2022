const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const hireButton = document.querySelector("#hiremebutton");

var prevScrollpos = window.pageYOffset;


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    hireButton.classList.toggle("active")
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",()=>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    hireButton.classList.remove("active");

}))

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        hireButton.classList.remove("active");
    } else {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        hireButton.classList.remove("active");
    }
    prevScrollpos = currentScrollPos;
  }