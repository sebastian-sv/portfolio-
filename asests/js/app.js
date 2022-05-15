let btnMenu = document.getElementById("toggle-menu").addEventListener("click",menu)
const navMenu = document.querySelector(".header-menu");

let line_1 = document.querySelector(".line-top");
let line_2 = document.querySelector(".line-middle");
let line_3 = document.querySelector(".line-bottom");

function menu(){
  line_1.classList.toggle("active-line-top");
  line_2.classList.toggle("active-line-middle");
  line_3.classList.toggle("active-line-bottom");
  navMenu.classList.toggle("header-menu-active");
};

const links = document.querySelectorAll(".link");
for(link of links){
  link.addEventListener("click",(e)=>{
  /*  e.preventDefault(); */
    line_1.classList.remove("active-line-top");
    line_2.classList.remove("active-line-middle");
    line_3.classList.remove("active-line-bottom");
    navMenu.classList.remove("header-menu-active");
  });
};
  
let images = document.querySelectorAll(".card-image img");
let boxModal = document.querySelector(".box-modal");
let imageModal = document.querySelector(".modal img");
for (let image of images){
  image.addEventListener("click",()=>{
    boxModal.classList.add("box-modal-active");
      line_1.classList.remove("active-line-top");
      line_2.classList.remove("active-line-middle");
      line_3.classList.remove("active-line-bottom");
      navMenu.classList.remove("header-menu-active");
    
    imageModal.src = image.src;
    imageModal.addEventListener("click",(e)=>{
      e.stopPropagation();
    });
    
    boxModal.addEventListener("click",()=>{
      boxModal.classList.remove("box-modal-active");
    });
    
  });
};

/* scrollReval */
window.sr = new ScrollReveal();
sr.reveal('section', {
  delay: 500,
  interval: 16, 
  reset: true
});

/* validación de formulario */

let form = document.getElementById("form-contac");
let name = document.getElementById("name");
let email = document.getElementById("email");
let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
let message = document.getElementById("message");
var numbersRegex  = /^[A-Z]+$/i;

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  let errors = document.getElementById("errors");
  let warning = "";
  let validar = false;
  errors.innerHTML = "";
  
  if(name.value.length == ""){
    warning += `el nombre no debe estar vacío <br>`;
    validar = true;
  }
  else if(name.value.length < 12){
    warning += `El nombre es corto <br>`;
    validar = true;
  }
  if(!emailRegex.test(email.value)){
    warning += `el email no es válido <br>`;
    validar = true;
  }
  if(message.value.length == ""){
    warning +=`El mensaje no puede estar vacío <br>`;
    validar = true;
  }
  else if(message.value.length < 45){
    warning += `El mensaje es corto <br>`;
    validar = true;
  }
  if(validar){
    errors.innerHTML = warning;
  }else{
    errors.innerHTML = "El formulario se ha enviado...";
  }
})

