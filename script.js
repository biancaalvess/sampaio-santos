const carousel = document.getElementById("carousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeModal = document.getElementById("closeModal");

let currentIndex = 0;

const updateCarousel = () => {
  const width = carousel.clientWidth;
  carousel.style.transform = `translateX(-${currentIndex * width}px)`;
};

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
  updateCarousel();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % carousel.children.length;
  updateCarousel();
});

// Zoom da imagem (abre modal)
document.querySelectorAll(".project-image").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

// Fechar modal (clique no X)
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});


// Fechar modal com ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.style.display = "none";
  }
});

// Botão voltar no modal
const backButton = document.createElement("button");
backButton.classList.add("back-button");
backButton.textContent = "Voltar";
backButton.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.insertBefore(backButton, modalImg);
