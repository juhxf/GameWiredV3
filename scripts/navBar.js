function openMenu() {
    const navMenu = document.querySelector('.navMobile');

    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
    }

    else{
        navMenu.classList.add('active');
    }
}
