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

let header = document.querySelector(".header");
  window.addEventListener("scroll",scrol);
  
function scrol(){
  header.classList.toggle("sticky",window.scrollY > 0);
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
