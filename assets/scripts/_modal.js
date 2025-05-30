const openModal = document.querySelector(".devs");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".exit");

openModal.addEventListener("click", () => {
  modal.classList.add("open");
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("open");
});
