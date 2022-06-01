const hamMenu= document.getElementById('hamMenu');
const backMenu= document.querySelector('#backMenu');
const menuButton= document.querySelector('#menuButton');
const hiddenNav= document.querySelector('#hidden-nav');
const BurgerMenu= document.querySelector('#BurgerMenu');
const navbody= document.querySelector('#navbody');
const navLogo= document.querySelector('#nav-logo');





hamMenu.addEventListener('click',()=>{

    hamMenu.classList.add('hidden');
    backMenu.classList.remove('hidden');

    menuButton.classList.remove('hidden')
    hiddenNav.classList.remove('hidden');
    navbody.classList.remove('bg-[#FAE8FF]');
    navbody.classList.add('bg-[#ffffff]');



})

backMenu.addEventListener('click',()=>{

    hamMenu.classList.remove('hidden');
    backMenu.classList.add('hidden');

    menuButton.classList.add('hidden')
    hiddenNav.classList.add('hidden');
    navbody.classList.add('bg-[#FAE8FF]');
    navbody.classList.remove('bg-[#ffffff]');
   



})

// BurgerMenu.addEventListener('click',()=>{

//     hamMenu.classList.remove('hidden');
//     backMenu.classList.add('hidden');

//     menuButton.classList.add('hidden')
//     hiddenNav.classList.add('hidden');

//     navbody.classList.add('bg-[#FAE8FF]');
//     navbody.classList.remove('bg-[#ffffff]');
    

// })
