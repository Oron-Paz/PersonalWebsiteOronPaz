const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav__list");
const headerBack = document.querySelector(".header__background");
const bodie = document.querySelector("body");


hamburger.addEventListener("click", ()=>{

    hamburger.classList.toggle("active");
    $(".header__background.active").css({"opacity" : "1"})
    $(".header__background").css({"opacity" : "1"})
    navList.classList.toggle("active");
    headerBack.classList.toggle("active");
    bodie.classList.toggle("active");
})

document.querySelectorAll(".nav__link").forEach(n => n. addEventListener("click", ()=>{
    hamburger.classList.remove("active");
    navList.classList.remove("active");
    headerBack.classList.remove("active");
    bodie.classList.remove("active");
    $(".header__background").css({"opacity" : "0"})
    
}))




  