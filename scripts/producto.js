let title = document.querySelector("head>title")

let reference = localStorage.getItem("reference")
let price = localStorage.getItem("price")
let picture = localStorage.getItem("picture")

let htmlReference = document.querySelector(".reference")
let htmlPrice = document.querySelector(".price")
let htmlPicture = document.querySelector(".picture")

let thumbnails = document.querySelectorAll(".thumbnails>img")


for (let index = 0; index < thumbnails.length; index++) {

    if (reference.includes("Café") || reference.includes("Sombrero")) thumbnails[index].src = picture;
    else if (reference.includes("Taza")) thumbnails[index].src = "./../data/img/TazaThumb" + index + ".jpg ";
    else if (reference.includes("Nano")) thumbnails[index].src = "./../data/img/NanoThumb" + index + ".jpg ";

    thumbnails[index].addEventListener("click", function () {
        oldBigPictureSrc = htmlPicture.src;
        htmlPicture.src = thumbnails[index].src;
        thumbnails[index].src = oldBigPictureSrc;

    })




}



title.textContent = reference;
htmlReference.textContent = reference;
htmlPrice.textContent = price;
htmlPicture.src = picture;