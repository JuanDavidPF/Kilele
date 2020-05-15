let products = document.querySelectorAll(".product");
let productsReference = document.querySelectorAll(".productDescription>h3")
let productPrice = document.querySelectorAll(".productDescription>p")
let productImage = document.querySelectorAll(".product>img")





for (let index = 0; index < products.length; index++) {

    products[index].addEventListener("click", function () {
        localStorage.setItem('reference', productsReference[index].textContent);
        localStorage.setItem('price', productPrice[index].textContent);
        localStorage.setItem('picture', productImage[index].src);
        window.location.href = "producto.html"

    })

}