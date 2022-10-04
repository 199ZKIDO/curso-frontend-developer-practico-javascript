const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const carrito = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");
const productDetailContainer = document.querySelector("#productDetail");
const productDetailClose = document.querySelector(".product-detail-close");


menuEmail.addEventListener("click", despliegueMenu);
function despliegueMenu(){
desktopMenu.classList.toggle("inactive")
}
burgerMenu.addEventListener("click", despliegueMobile);
function despliegueMobile(){
    const isProductClosed = productDetail.classList.contains("inactive");
    

    if (!isProductClosed){
        productDetail.classList.add("inactive");
        } //Si el menu detalles del producto se encuentra ACTIVO entonces agreguelo a INACTIVE EN EL CASO DE://

    mobileMenu.classList.toggle("inactive"); //Que se ACTIVE el menuMobile //
    closeProductDetail();

}
carrito.addEventListener("click", detallesProducto);
function detallesProducto(){

const isMenuClosed = mobileMenu.classList.contains("inactive");

if (!isMenuClosed){
    mobileMenu.classList.add("inactive");
    } // Si el menu mobil esta ACTIVO entonces agreguelo a INACTIVE EN CASO DE: //

    productDetail.classList.toggle("inactive") // Que se ACTIVE el productDetail  //

    const isProductDetailClosed = productDetailContainer.classList.contains("inactive");
    

    if (!isProductDetailClosed){
      productDetailContainer.classList.add("inactive");
        } //Si el menu detalles del producto se encuentra ACTIVO entonces agreguelo a INACTIVE EN EL CASO DE://

    mobileMenu.classList.toggle("inactive"); //Que se ACTIVE el menuMobile //
}
productDetailClose.addEventListener("click", closeProductDetail);
function closeProductDetail(){
  productDetailContainer.classList.add("inactive")
}
function openProductDetail(){
  shoppingCartContainer.classList.add("inactive")
  productDetailContainer.classList.remove("inactive");
}

const productList = [];
productList.push({
    name: "bike",
    price: 120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "bateria electronica",
    price: 200,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "play station 5",
    price: 300,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

/*<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div> */

for (product of productList){

    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image); 
    productImg.addEventListener("click", openProductDetail);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    productInfoFigure = document.createElement("figure");
    productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}


