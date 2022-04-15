// const inputEl = document.getElementById('formulario');
 const inputEl = document.querySelector('#email');
 const iconError = document.querySelector('.inputsss');
 const textError = document.querySelector('.error-input');

let errors = [];

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    textError.innerText = null;

    iconError.style.backgroundSize = '0%';
     
   
    errors = [];
 

   const email = inputEl.value;
   let elArroba = email.indexOf("@");
   
    const mailll = email.slice(elArroba);
   

   if(mailll != "@gmail.com"){
         iconError.style.backgroundSize = '7%';
         textError.style.color = 'red';
         textError.innerText = 'por favor provee un email valido';

    }else{
        textError.style.color = 'green';
        textError.innerText = 'Gracias por suscribirte.';
    }

});