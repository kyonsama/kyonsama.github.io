const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const resultado = document.querySelector('#result');


// form.addEventListener('submit', btnOnClick);

// function btnOnClick(event){
//     event.preventDefault();
//     const  numero1 = parseInt(input1.value);
//     const  numero2 = parseInt(input2.value);
//     resultado.innerText = "Resultado: " + numero1 + numero2  

// }

btn.addEventListener('click', btnOnClick);

function btnOnClick(event){
    // event.preventDefault();
    const  numero1 = parseInt(input1.value);
    const  numero2 = parseInt(input2.value);
    resultado.innerText = "Resultado: " + numero1 + numero2  

}


// function productDetailRender(arr2) {
//     for(productList of arr2) {
//         const productDetailAside = document.createElement('aside');
//         productDetailAside.classList.add('product__detail');

//         const productDetailClose = document.createElement('div');
//         productDetailClose.classList.add('product__detail__close');
//         productDetailClose.addEventListener('click',closeProductDetailAside)

//         const productDetailIconImgClose = document.createElement('img');
//         productDetailIconImgClose.setAttribute('src', './icons/icon_close.png' ,'alt', 'icon close');
        
//         const productDetailImg = document.createElement('img'); 
//         productDetailImg.setAttribute('src',product.image, 'alt', product.name);

//         const productDetailInfo = document.createElement('div');        
//         productDetailInfo.classList.add('product__detail--product__info');
    
//         const productDetailPrice = document.createElement('p');
//         productDetailPrice.innerText = '$' + product.price;

//         const productDetailText = document.createElement('p');
//         productDetailText.innerText = product.name;

//         const productDetailDescription = document.createElement('p');
//         productDetailDescription.innerText = product.name;

//         const productDetailButton = document.createElement('button');
//         productDetailButton.classList.add('product__detail--primary__button');
//         productDetailButton.innerText = 'add to cart';

//         const productDetailButtonImg = document.createElement('img');
//         productDetailButtonImg.setAttribute('src', './icons/bt_add_to_cart.svg');

//         productDetailButton.appendChild(productDetailButtonImg);

//         productDetailInfo.appendChild(productDetailDescription);
//         productDetailInfo.appendChild(productDetailText);
//         productDetailInfo.appendChild(productDetailPrice);

//         productDetailClose.appendChild(productDetailIconImgClose);
    
//         productDetailAside.appendChild(productDetailImg);
//         productDetailAside.appendChild(productDetailClose);
       
//         productDetailContainer.appendChild(productDetailAside);
//         productDetailContainer.appendChild(productDetailInfo);

//     }
// }

// productDetailRender(productCard);