let header = document.querySelector("header");
let main = document.querySelector("main");
let fixScreen;

var smallWindow = window.matchMedia("(max-width: 800px)");
var smallHeight = window.matchMedia("(max-height: 650px)");
let store;
let product;
store = window.location.href.includes("tienda");
product = window.location.href.includes("producto");




main.style.height = window.innerHeight - header.offsetHeight + "px";
if (smallHeight.matches) main.style.height = "650px";
if (store && window.innerHeight - header.offsetHeight < 900) main.style.height = "900px";
if (product && main.offsetHeight < 700) main.style.height = "700px";


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
    if (store && window.innerHeight - header.offsetHeight < 900) main.style.height = "900px";
    if (product && main.offsetHeight < 700) main.style.height = "700px";

  }, 1);

  //stops interval from running
  setTimeout(function () {
    //full screen size
    main.style.height = window.innerHeight - header.offsetHeight + "px";
    if (smallHeight.matches) main.style.height = "650px";
    if (store && window.innerHeight - header.offsetHeight < 900) main.style.height = "900px";
    if (product && main.offsetHeight < 700) main.style.height = "700px";
    clearInterval(fixScreen);
  }, 251);

}