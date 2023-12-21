var ClickMenucorreo = document.querySelector(".navbar-email");
var Menucorreo = document.querySelector(".desktop-menu");
var Clickcarrito = document.querySelector(".navbar-shopping-cart");
var Menuproductos = document.querySelector(".product-detail");


ClickMenucorreo.addEventListener("click", function () {
    if (Menucorreo.style.display === "none" || Menucorreo.style.display === "") {
        Menuproductos.style.display = "none";
        Menucorreo.style.display = "flex";
    } else {
        Menucorreo.style.display = "none";
    }
});

Clickcarrito.addEventListener("click", function () {
    if (Menuproductos.style.display === "none" || Menuproductos.style.display === "") {
        Menucorreo.style.display = "none"
        Menuproductos.style.display = "block";
    } else {
        Menuproductos.style.display = "none";
    }
})

