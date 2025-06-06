// Função para alternar tema
function toggleTheme() {
  const body = document.body;
  const themeToggleIcon = document.querySelector("#theme-toggle i");

  // Alternar a classe de tema
  body.classList.toggle("light-theme");

  // Verificar o tema atual para atualizar o ícone
  const isLightTheme = body.classList.contains("light-theme");

  // Atualizar o ícone
  if (isLightTheme) {
    themeToggleIcon.classList.replace("ph-moon-stars", "ph-sun-dim");
  } else {
    themeToggleIcon.classList.replace("ph-sun-dim", "ph-moon-stars");
  }

  // Salvar preferência
  localStorage.setItem("theme", isLightTheme ? "light" : "dark");
}

// Aplicar tema salvo
function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme");
  const body = document.body;
  const themeToggleIcon = document.querySelector("#theme-toggle i");

  if (savedTheme === "light") {
    body.classList.add("light-theme");
    themeToggleIcon.classList.replace("ph-moon-stars", "ph-sun-dim");
  } else if (savedTheme === "dark") {
    body.classList.remove("light-theme");
    themeToggleIcon.classList.replace("ph-sun-dim", "ph-moon-stars");
  } else {
    // Verificar preferência do sistema
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
      body.classList.add("light-theme");
      themeToggleIcon.classList.replace("ph-moon-stars", "ph-sun-dim");
      localStorage.setItem("theme", "light");
    }
  }
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  applySavedTheme();

  const toggleBtn = document.getElementById("theme-toggle");

  // Adicionar eventos para clique e toque
  toggleBtn.addEventListener("click", toggleTheme);
  toggleBtn.addEventListener("touchend", (e) => {
    e.preventDefault();
    toggleTheme();
  });

  // Adicionar evento para o botão no hero
  document
    .querySelector(".hero .theme-toggle")
    .addEventListener("click", toggleTheme);
});
