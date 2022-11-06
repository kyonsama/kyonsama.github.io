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