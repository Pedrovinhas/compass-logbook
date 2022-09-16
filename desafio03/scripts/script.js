const menuOpenButton = document.getElementById('menu-open')
const menuCloseButton = document.getElementById('menu-close')
const menuMobile = document.getElementById('menu-mobile');
const containerHider = document.querySelector('.container-hider');

menuOpenButton.addEventListener('click', () => {
    menuMobile.classList.add('active')
    containerHider.classList.add('section-hider')
})

menuCloseButton.addEventListener('click', () => {
    menuMobile.classList.remove('active')
    containerHider.classList.remove('section-hider')
})

