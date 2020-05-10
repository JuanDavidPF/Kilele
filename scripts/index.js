let arrows = document.querySelectorAll(".arrows");
let bulletContainer = document.querySelector(".bulletPoints");
let bulletPrefab = document.querySelector(".bullets");
let main = document.querySelector("main");
let backgrounds = [];
let backgroundActual = 0;
let amountOfBackgrounds = 3;
let transitionDuration = 0.5;
let automaticTransitionDuration = 4;
let transisionThread = setInterval(
  AutoTransision,
  automaticTransitionDuration * 1000
);

var smallWindow = window.matchMedia("(max-width: 800px)");
var smallHeight = window.matchMedia("(max-height: 400px)");
var hamburguerToggle = false;
var hamburguerBtn = document.querySelector(".hamburgerButton");
let header = document.querySelector("header");
let links = document.querySelector(".headerLinks");
let account = document.querySelector(".accountManagement");
let isHamburgerMoving = false;

let isBackgroundChanging = false;

//if there is no slides to the background, deactivates the background transition controls
if (amountOfBackgrounds <= 1) {
  for (let index = 0; index < arrows.length; index++) {
    arrows[index].style.display = "none";
  }
  bulletContainer.style.display = "none";
  if (amountOfBackgrounds <= 0) main.style.backgroundColor = "#9b2e49";
}

//adds the background images to the array
for (let index = 0; index < amountOfBackgrounds; index++) {
  backgrounds.push("./data/img/backgroundCover" + (index + 1) + ".jpg");

  //instantiates more bullet points depending of the amount of backgrounds
  if (index > 0) {
    let bulletInstance = bulletPrefab.cloneNode(true);
    bulletContainer.appendChild(bulletInstance);
  }
}

//referenced all the bullets points created and activates the first slide and bullet point

let bullets = document.querySelectorAll(".bulletInput");
bullets[0].checked = true;
if (amountOfBackgrounds)
  main.style.backgroundImage = "url('" + backgrounds[0] + "')";

//modifies the transition duration
main.style.transitionDuration = transitionDuration + "s";

//sets the size to be fullscreen

main.style.height = window.innerHeight - header.offsetHeight + "px";
if (smallHeight.matches) main.style.height = "400px";

//changes background images with the arrow
for (let index = 0; index < arrows.length; index++) {
  arrows[index].addEventListener("click", function () {
    if (isBackgroundChanging == false) {
      isBackgroundChanging = true;

      switch (index) {
        case 0:
          backgroundActual--;
          if (backgroundActual < 0) backgroundActual = amountOfBackgrounds - 1;
          break;
        case 1:
          backgroundActual++;
          if (backgroundActual >= amountOfBackgrounds) backgroundActual = 0;
          break;
      }
      changeBackground(backgroundActual);

      setTimeout(function () {
        isBackgroundChanging = false;
      }, transitionDuration * 1000);
    }
  });
}

//changes background images with the bullet points

for (let index = 0; index < bullets.length; index++) {
  bullets[index].addEventListener("click", function () {
    if (isBackgroundChanging == false) {
      isBackgroundChanging = true;

      backgroundActual = index;
      changeBackground(backgroundActual);
      setTimeout(function () {
        isBackgroundChanging = false;
      }, transitionDuration * 1000);
    }
  });
}

//change the background automatically if the player doesnt interact
function AutoTransision() {
  if (!isBackgroundChanging) {
    isBackgroundChanging = true;

    backgroundActual++;
    if (backgroundActual >= amountOfBackgrounds) backgroundActual = 0;
    changeBackground(backgroundActual);

    setTimeout(function () {
      isBackgroundChanging = false;
    }, transitionDuration * 1000);
  }
}

//modifies the background to the html element and updates the active bulletpoint
function changeBackground(backgroundIndex) {
  if (amountOfBackgrounds > 0) {
    main.style.backgroundImage = "url('" + backgrounds[backgroundIndex] + "')";
    bullets[backgroundIndex].checked = true;

    clearInterval(transisionThread);
    transisionThread = setInterval(
      AutoTransision,
      automaticTransitionDuration * 1000
    );
  }
}

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
  if (smallHeight.matches) main.style.height = "400px";
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
