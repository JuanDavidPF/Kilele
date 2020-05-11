let header = document.querySelector("header");
let main = document.querySelector("main");

var smallWindow = window.matchMedia("(max-width: 800px)");
var smallHeight = window.matchMedia("(max-height: 650px)");

//starts the size to be fullscreen

main.style.height = window.innerHeight - header.offsetHeight + "px";
if (smallHeight.matches) main.style.height = "650px";

window.addEventListener("resize", function () {
  affectHamburguerMenu();
  //full screen size
  main.style.height = window.innerHeight - header.offsetHeight + "px";
  if (smallHeight.matches) main.style.height = "650px";

  //fixes incorrect sizing
  setTimeout(function () {
    //full screen size
    main.style.height = window.innerHeight - header.offsetHeight + "px";
    if (smallHeight.matches) main.style.height = "650px";
  }, 250);
});
