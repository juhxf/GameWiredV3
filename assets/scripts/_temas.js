function toggle() {
  const body = document.body;
  const icon = document.querySelector("i");

  body.classList.toggle("light");

  if (body.classList.contains("light")) {
    icon.classList.replace("ph-sun-dim", "ph-moon-stars");
    body.style.transition = "3s";
  } else {
    icon.classList.replace("ph-moon-stars", "ph-sun-dim");
    body.style.transition = "3s";
  }
}
