const gameCarousel = document.querySelector('.carousel-wrapper');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const cardWidth = document.querySelector('.card__game').offsetWidth + 32;

function scrollGame() {
  gameCarousel.scrollBy({
    left: direction * cardWidth,
    behavior: 'smooth'
  });
}

prevButton.addEventListener('click', () => scrollGame(-1));
nextButton.addEventListener('click', () => scrollGame(1));

// === SWIPE PARA MOBILE ===
let touchStartX = 0;

gameCarousel.addEventListener('touchstart', e => {
  touchStartX = e.touches[0].clientX;
});

gameCarousel.addEventListener('touchend', e => {
  const touchEndX = e.changedTouches[0].clientX;
  const diff = touchStartX - touchEndX;

  if (Math.abs(diff) > 50) {
    scrollCommunity(diff > 0 ? 1 : -1);
  }
});

// === AJUSTE AUTOMÁTICO ===
window.addEventListener('resize', () => {
  cardWidth = document.querySelector('.game__game').offsetWidth + 32;
});
