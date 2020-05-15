var smallWindow = window.matchMedia("(max-width: 800px)");
var menu = document.querySelector(".localMenu");
var btn = document.querySelector(".menuBtn");
var menuOpened = true;
var menuOpening = false;
var olderWidth = window.innerWidth;
store = window.location.href.includes("tienda");
let mainContent;

if (store) {
  mainContent = document.querySelector(".mainContent");
  menu.style.height = mainContent.offsetHeight + "px";
}

btn.style.left = menu.offsetWidth + "px";

window.addEventListener("resize", function () {
  if (window.innerWidth != olderWidth) {
    olderWidth = window.innerWidth;
    if (smallWindow.matches && menuOpened) {
      menuOpened = false;
      menu.classList.add("animate__slideOutLeft");

      btn.style.transitionDuration = "0s";
      btn.style.left = "200px";
      btn.style.transform = "translate(-50%) rotate(0deg)";
      setTimeout(() => {
        btn.style.transitionDuration = "1s";
        btn.style.left = "0px";
      }, 2);
    } else if (smallWindow.matches == false) {
      if (menu.classList.contains("animate__slideOutLeft")) {
        menuOpened = true;
        menu.classList.remove("animate__slideOutLeft");
      }
    }
  }
});

btn.addEventListener("click", function () {
  if (smallWindow.matches && menuOpening == false) {
    menuOpened = !menuOpened;
    menuOpening = true;

    if (menuOpened) {
      menu.classList.remove("animate__slideOutLeft");
      menu.classList.add("animate__slideInLeft");
      btn.style.left = menu.offsetWidth + "px";
      btn.style.transform = "translate(-50%) rotate(180deg)";
    } else {
      menu.classList.add("animate__slideOutLeft");
      menu.classList.remove("animate__slideInLeft");
      btn.style.left = "0px";
      btn.style.transform = "translate(-50%) rotate(0deg)";
    }

    setTimeout(() => {
      menuOpening = false;
    }, 1000);
  }
});

setInterval(function () {
  if (store) {
    menu.style.height = mainContent.offsetHeight + "px";

    if (window.innerHeight < mainContent.offsetHeight) {
      mainContent.style.height = "100%";
    }
  }
}, 17);