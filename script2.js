const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarIcon = document.querySelector(".navbar-shopping-cart");
const desktopMenu = document.querySelector(".desktop-menu");
const MobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");


menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarIcon.addEventListener("click", toggleCarAside);

function toggleDesktopMenu() {
    shoppingCartContainer.classList.add("inactive");
    MobileMenu.classList.add("inactive");
    desktopMenu.classList.toggle("inactive");

}

function toggleMobileMenu() {
    shoppingCartContainer.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    MobileMenu.classList.toggle("inactive");
}

function toggleCarAside() {
    desktopMenu.classList.add("inactive");
    MobileMenu.classList.add("inactive");
    shoppingCartContainer.classList.toggle("inactive");
}

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Hamburger",
    price: 30,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "Tacos",
    price: 25,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "Hot dog",
    price: 10,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});


productList.push({
    name: "Salchipapa",
    price: 100,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});


productList.push({
    name: "Burrito",
    price: 20,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "Lasagna",
    price: 40,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});


function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image)

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");

        const productInfoDiv = document.createElement("div");
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name;

        /*productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName); */
        productInfoDiv.append(productPrice, productName);

        const productInfoFigure = document.createElement("figure");
        const productimgCard = document.createElement("img");
        productimgCard.setAttribute("src", "./icons/bt_add_to_cart.svg");

        productInfoFigure.appendChild(productimgCard);

        // productInfo.appendChild(productInfoDiv);
        // productInfo.appendChild(productInfoFigure);
        productInfo.append(productInfoDiv, productInfoFigure);

        // productCard.appendChild(productImg);
        // productCard.appendChild(productInfo);
        productCard.append(productImg, productInfo);

        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);
