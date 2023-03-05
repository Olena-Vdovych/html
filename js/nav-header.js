(function () {
    const burger = document.querySelector('.menu__burger');
    const navMenu = document.querySelector('.topnav');

    burger.addEventListener('click', () => {
        burger.classList.add('active');
        navMenu.classList.add('active');
    })

    document.querySelectorAll('.topnav__link').forEach(n => n.addEventListener('click', () => {
        burger.classList.remove('active');
        navMenu.classList.remove('active');
    }))
})();