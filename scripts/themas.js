function toggle() {
    const body = document.body;
    const icon = document.querySelector('i');

    body.classList.toggle('lightTheme');

    if (body.classList.contains('lightTheme')) {
        icon.classList.replace('bi-sun', 'bi-moon');
        body.style.transition = "2s";
    } else {
        icon.classList.replace('bi-moon', 'bi-sun');
        body.style.transition = "2s";
    }
}
