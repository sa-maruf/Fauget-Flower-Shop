const mobMenuBtn=document.getElementById('mob-menu-btn');
const mobMenu=document.getElementById('mob-menu');

mobMenuBtn.addEventListener(('click'),()=>{
    mobMenu.classList.toggle('open')
})