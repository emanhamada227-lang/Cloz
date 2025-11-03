window.addEventListener('scroll',()=>{
const h=document.querySelector('header');
if(window.scrollY>60){h.style.boxShadow='0 4px 10px rgba(0,0,0,0.2)';}
else{h.style.boxShadow='none';}});
