const hamMenu= document.getElementById('hamMenu');
const backMenu= document.querySelector('#backMenu');
const menuButton= document.querySelector('#menuButton');
const hiddenNav= document.querySelector('#hidden-nav');




hamMenu.addEventListener('click',()=>{

    hamMenu.classList.add('hidden');
    backMenu.classList.remove('hidden');

    menuButton.classList.remove('hidden')
    hiddenNav.classList.remove('hidden');

})

backMenu.addEventListener('click',()=>{

    hamMenu.classList.remove('hidden');
    backMenu.classList.add('hidden');

    menuButton.classList.add('hidden')
    hiddenNav.classList.add('hidden');



})
