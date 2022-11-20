
const boton = document.querySelector('#boton').addEventListener('click', captura );
const h2 =document.querySelector('#name');
const h3 =document.querySelector('#price');

function captura() {
    const ID = document.querySelector('#campo').value;
    const IdNumber = parseInt (document.querySelector('#campo').value);
    comida.forEach (element =>{
      //console.log('valor ingresado',ID);
      
     if (IdNumber === element.id)
               {h2.textContent = element.nombre; 
               h3.textContent = element.precio;}