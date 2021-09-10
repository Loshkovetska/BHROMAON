{
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.navigation');
    const navList = document.querySelector('.navigation__list');
    const main = document.querySelector('.main');
    const navLogo = document.querySelector('.navigation__logo');
    const headerScroll = document.querySelector('.content__scroll');

    hamburger.addEventListener('click', () => {
        navList.classList.toggle('navigation__list--visible');
        nav.classList.toggle('navigation--menu-open');
        main.classList.toggle('main--menu-open');
        navLogo.classList.toggle('navigation__logo--fixed');
        hamburger.classList.toggle('hamburger--close');
    });
}