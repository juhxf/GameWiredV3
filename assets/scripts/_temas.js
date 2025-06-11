// Função para atualizar imagens baseadas no tema
function updateThemeImages(isLightTheme) {
  document.querySelectorAll("[data-theme-image]").forEach((element) => {
    const darkSrc = element.getAttribute("data-dark-src");
    const lightSrc = element.getAttribute("data-light-src");

    if (isLightTheme && lightSrc) {
      element.src = lightSrc;
    } else if (darkSrc) {
      element.src = darkSrc;
    }
  });
}

// Função modificada para alternar tema
function toggleTheme() {
  const body = document.body;
  const themeToggleIcon = document.querySelector("#theme-toggle i");

  body.classList.toggle("light-theme");
  const isLightTheme = body.classList.contains("light-theme");

  // Atualizar ícone do botão
  if (isLightTheme) {
    themeToggleIcon.classList.replace("ph-moon-stars", "ph-sun-dim");
  } else {
    themeToggleIcon.classList.replace("ph-sun-dim", "ph-moon-stars");
  }

  // Atualizar imagens
  updateThemeImages(isLightTheme);

  // Salvar preferência
  localStorage.setItem("theme", isLightTheme ? "light" : "dark");
}

// Função modificada para aplicar tema salvo
function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme");
  const body = document.body;
  const themeToggleIcon = document.querySelector("#theme-toggle i");
  let isLightTheme = false;

  if (savedTheme === "light") {
    body.classList.add("light-theme");
    themeToggleIcon.classList.replace("ph-moon-stars", "ph-sun-dim");
    isLightTheme = true;
  } else if (savedTheme === "dark") {
    body.classList.remove("light-theme");
    themeToggleIcon.classList.replace("ph-sun-dim", "ph-moon-stars");
  } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    body.classList.add("light-theme");
    themeToggleIcon.classList.replace("ph-moon-stars", "ph-sun-dim");
    localStorage.setItem("theme", "light");
    isLightTheme = true;
  }

  // Atualizar imagens ao carregar
  updateThemeImages(isLightTheme);
}

// Event listeners (mantido igual)
document.addEventListener("DOMContentLoaded", () => {
  applySavedTheme();

  const toggleBtn = document.getElementById("theme-toggle");
  toggleBtn.addEventListener("click", toggleTheme);
  toggleBtn.addEventListener("touchend", (e) => {
    e.preventDefault();
    toggleTheme();
  });

  document
    .querySelector(".hero .theme-toggle")
    .addEventListener("click", toggleTheme);
});
