function toggle(){
    const body = document.body;
    const icon = document.querySelector('i');

    body.classList.toggle('lightTheme');

    if (body.classList.contains('lightTheme')) {
        icon.classList.replace('bi-brightness-low', 'bi-moon-stars');
        body.style.transition = "3s";
    } else {
        icon.classList.replace('bi-moon-stars', 'bi-brightness-low');
        body.style.transition = "3s";
    }
}
