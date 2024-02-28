const menu = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const icon1 = document.querySelector(".icon1");
const icon2 = document.querySelector(".icon2");
const icon3 = document.querySelector(".icon3");

function displayMenu(){
    if (nav.classList.contains("nav-hide")) {
      
        nav.classList.remove("nav-hide");
        icon1.classList.add("rotated1");
        icon2.classList.add("rotated2");
        icon3.classList.add("rotated3");
    
    }

    else {
        nav.classList.add("nav-hide");
        icon1.classList.remove("rotated1");
        icon2.classList.remove("rotated2");
        icon3.classList.remove("rotated3");
     
    }
}


menu.addEventListener('click', displayMenu)