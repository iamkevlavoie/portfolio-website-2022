const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const hireButton = document.querySelector("#hiremebutton");

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