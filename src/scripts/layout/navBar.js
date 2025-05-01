const theme = document.getElementById('darktheme');
const corpo = document.querySelector('body');

theme.addEventListener('click', function(){
    this.classList.toggle('bi-sun')

    if (this.classList.toggle('bi-moon')){
        body.classList.add('body')
        body.style.transition = "2s";
    }

    else {
        body.classList.toggle('light')
        body.style.transition = "2s";

    }
});

//Mobile:
function openMenu() {
    const navMenu = document.querySelector('.navMobile');

    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
    }

    else{
        navMenu.classList.add('active');
    }
}

const toggle = document.getElementById('dark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-sun')

    if (this.classList.toggle('bi-moon')){
        body.classList.add('body')
        body.style.transition = "2s";
    }

    else {
        body.classList.toggle('light');
        body.style.transition = "2s";

    }
});
