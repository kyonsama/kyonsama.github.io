const menuEmail = document.querySelector('.navbar__email');
const desktopMenu = document.querySelector('.Desktop-menu');
const menuHamIcon = document.querySelector('.navbar--mobile__icon');
const mobileMenu = document.querySelector('.mobile-menu'); 
const onCarList = document.querySelector('.in-shop-car__container');
const carIcon = document.querySelector('.navbar--mobile__icon--car');
const carIconDesktop = document.querySelector('.navbar--right__icon');
const productCardContainer = document.querySelector('.cards__container');
const productDetailContainer = document.querySelector('.product__detail__container');
const productDetailCloseIcon = document.querySelector('.product__detail__close');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
carIcon.addEventListener('click', toggleCarListMenu);
carIconDesktop.addEventListener('click',toggleCarListMenu);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside)


function toggleDesktopMenu(){
    const desktopMenuClose =  desktopMenu.classList.contains('inactive');
    desktopMenu.classList.toggle('inactive');

    if (desktopMenuClose){
        onCarList.classList.add('inactive');
        
    }
}

function toggleMobileMenu(){
    const mobileMenuClose = mobileMenu.classList.contains('inactive');
    mobileMenu.classList.toggle('inactive');

    if (mobileMenuClose){
        onCarList.classList.add('inactive');
        productDetailContainer.classList.add('inactive');
    }

}

function toggleCarListMenu(){
    const onCarListClose =  onCarList.classList.contains('inactive');
    onCarList.classList.toggle('inactive');

    if (onCarListClose) {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add ('inactive');
        productDetailContainer.classList.add('inactive');
    }
  
}

 function openProductDetail() {
    const productDetailClose = productDetailContainer.classList.contains('inactive'); 
    if (productDetailClose){
        productDetailContainer.classList.remove('inactive'); 
        desktopMenu.classList.add ('inactive');
        onCarList.classList.add('inactive');
    }
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive'); 
}

const productList = [];
productList.push({
    name: 'ZTE Smartphone Blade L8 32GB 5" Negro Desbloqueado',
    price: 1261,
    image:  'https://m.media-amazon.com/images/I/71E4aOlxtoL._AC_SX679_.jpg',
});
productList.push({
    name: 'Xtreme PC Gamer AMD Radeon Vega Renoir Ryzen 7 5700G 16GB SSD 240GB HDD 3TB WiFi',
    price: 13899,
    image:  'https://m.media-amazon.com/images/I/41R-Vrar5CL._AC_.jpg',
});
productList.push({
    name: 'SAMSUNG LS24R350FZLXZX - Monitor Plano 24" sin bordes, Experiencia de Juego inmersiva, 1920 X 1080, 75Hz',
    price: 3199,
    image:  './imagenes/Celular.pnghttps://m.media-amazon.com/images/I/91Fg-Dbk-eL._AC_SX679_.jpg',
});
productList.push({
    name: 'Nintendo Switch Lite - Edición Estándar - Azul Turquesa - Standard Edition',
    price: 4176,
    image:  'https://m.media-amazon.com/images/I/71qmF0FHj7L._AC_SX679_.jpg',
});
productList.push({
    name: 'AMD Procesador Ryzen™ 5 5600G - 6 núcleos de CPU - Socket-AM4-3.90GHz - 16MB L3 Cache - Incluye Disipador Wraith Stealth',
    price: 2354,
    image:  'https://m.media-amazon.com/images/I/51f2hkWjTlL._AC_SX522_.jpg',
});

{/* <div class="Product__card">
<img src="./imagenes/Celular.png" alt="celular">
<div class="product__info">
    <div class="Product__text-price">
    <p>$ 120,00</p>
    <p> Round Shelf</p>
    </div>
    <figure class="Icon__container">
        <img src="./icons/bt_add_to_cart.svg" alt="shopp car">
    </figure>
</div>
</div> */}

function renderProducts(arr){
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('Product__card');
    
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
        img.addEventListener('click', openProductDetail)
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product__info');
    
        const ProductTextPrice = document.createElement('div');
        ProductTextPrice.classList.add('Product__text-price');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$'+ product.price;
    
        const productText = document.createElement('p');
        productText.innerText = product.name;    
    
        const productFigure = document.createElement('figure');
        productFigure.classList.add('Icon__container');    
    
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');   
    
        productFigure.appendChild(productImgCart);
    
        ProductTextPrice.appendChild(productPrice);
        ProductTextPrice.appendChild(productText);
    
        productInfo.appendChild(ProductTextPrice);
        productInfo.appendChild(productFigure);
    
        productCard.appendChild(img);
        productCard.appendChild(productInfo);

        productCardContainer.appendChild(productCard);
    }
}

renderProducts(productList);

