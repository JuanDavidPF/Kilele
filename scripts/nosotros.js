
let main = document.querySelector("main");
var smallWindow = window.matchMedia("(max-width: 800px)");
var smallHeight = window.matchMedia("(max-height: 650px)");
var hamburguerToggle = false;
var hamburguerBtn = document.querySelector(".hamburgerButton");
let header = document.querySelector("header");
let links = document.querySelector(".headerLinks");
let account = document.querySelector(".accountManagement");
let isHamburgerMoving = false;

//sets the size to be fullscreen

main.style.height = window.innerHeight - header.offsetHeight + "px";
if (smallHeight.matches) main.style.height = "650px";


//hamburguer menu logic

if (smallWindow.matches) {
    hamburguerBtn.style.display = "block";
  } else {
    hamburguerBtn.style.display = "none";
  }
  
  window.addEventListener("resize", function () {
    smallWindow = window.matchMedia("(max-width: 800px)");
  
    if (smallWindow.matches) {
      hamburguerBtn.style.display = "block";
  
      if (!hamburguerToggle) {
        links.style.opacity = "0";
        account.style.opacity = "0";
        links.style.display = "none";
        account.style.display = "none";
      }
    } else {
      if (hamburguerToggle) {
        hamburguerToggle = false;
        hamburguerBtn.classList.toggle("change");
      }
      hamburguerBtn.style.display = "none";
      links.style.display = "flex";
      account.style.display = "flex";
      links.style.opacity = "1";
      account.style.opacity = "1";
      header.style.height = "75px";
    }
  
    //full screen size
  
    main.style.height = window.innerHeight - header.offsetHeight + "px";
    if (smallHeight.matches) main.style.height = "650px";
  });
  
  hamburguerBtn.addEventListener("click", function () {
    if (!isHamburgerMoving) {
      isHamburgerMoving = true;
      hamburguerToggle = !hamburguerToggle;
      hamburguerBtn.classList.toggle("change");
  
      if (hamburguerToggle) {
        links.style.display = "flex";
        account.style.display = "flex";
        header.style.height = "300px";
  
        setTimeout(() => {
          links.style.opacity = "1";
          account.style.opacity = "1";
        }, 1);
  
        setTimeout(() => {
          isHamburgerMoving = false;
        }, 250);
      } else {
        links.style.opacity = "0";
        account.style.opacity = "0";
  
        header.style.height = "75px";
  
        setTimeout(() => {
          links.style.display = "none";
          account.style.display = "none";
          isHamburgerMoving = false;
        }, 250);
      }
    }
  });