let header = document.querySelector("header");
let main = document.querySelector("main");
let fixScreen;

var smallWindow = window.matchMedia("(max-width: 800px)");
var smallHeight = window.matchMedia("(max-height: 650px)");

//starts the size to be fullscreen

main.style.height = window.innerHeight - header.offsetHeight + "px";
if (smallHeight.matches) main.style.height = "650px";

window.addEventListener("resize", function () {
  changeMainSize();
  affectHamburguerMenu();
});

function changeMainSize() {
  clearInterval(fixScreen);

  //full screen size
  fixScreen = setInterval(function () {
    //full screen size
    main.style.height = window.innerHeight - header.offsetHeight + "px";
    if (smallHeight.matches) main.style.height = "650px";
    console.log(header.offsetHeight);
  }, 16);

  //stops interval from running
  setTimeout(function () {
    //full screen size
    main.style.height = window.innerHeight - header.offsetHeight + "px";
    if (smallHeight.matches) main.style.height = "650px";
    clearInterval(fixScreen);
  }, 250);
}
