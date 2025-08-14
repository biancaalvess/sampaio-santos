// Aguardar o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
  
  // Sistema de zoom interativo
  const zoomModal = document.getElementById("zoomModal");
  const zoomImage = document.getElementById("zoomImage");
  const zoomContainer = document.getElementById("zoomContainer");
  const zoomIn = document.getElementById("zoomIn");
  const zoomOut = document.getElementById("zoomOut");
  const closeZoom = document.getElementById("closeZoom");
  
  // Verificar se os elementos existem antes de prosseguir
  if (!zoomModal || !zoomImage || !zoomContainer || !zoomIn || !zoomOut || !closeZoom) {
    console.error("Elementos do sistema de zoom não encontrados");
    return;
  }
  
  let currentZoom = 1;
  let isDragging = false;
  let startX, startY, translateX = 0, translateY = 0;
  
  // Abrir modal de zoom ao clicar nas imagens dos projetos
  document.querySelectorAll(".project-image").forEach(img => {
    img.addEventListener("click", () => {
      zoomModal.style.display = "block";
      zoomImage.src = img.src;
      resetZoom();
      
      // Pausar carrossel
      const imageContainer = document.querySelector('.image-container');
      if (imageContainer) {
        imageContainer.style.animationPlayState = 'paused';
      }
    });
  });
  
  // Controles de zoom
  zoomIn.addEventListener("click", () => {
    currentZoom = Math.min(currentZoom * 1.5, 5);
    updateZoom();
  });
  
  zoomOut.addEventListener("click", () => {
    currentZoom = Math.max(currentZoom / 1.5, 0.5);
    updateZoom();
  });
  
  // Fechar modal de zoom
  closeZoom.addEventListener("click", () => {
    zoomModal.style.display = "none";
    
    // Retomar carrossel
    const imageContainer = document.querySelector('.image-container');
    if (imageContainer) {
      imageContainer.style.animationPlayState = 'running';
    }
  });
  
  // Fechar com ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && zoomModal.style.display === "block") {
      zoomModal.style.display = "none";
      
      // Retomar carrossel
      const imageContainer = document.querySelector('.image-container');
      if (imageContainer) {
        imageContainer.style.animationPlayState = 'running';
      }
    }
  });
  
  // Função para atualizar zoom
  function updateZoom() {
    zoomImage.style.transform = `scale(${currentZoom})`;
    zoomContainer.style.cursor = currentZoom > 1 ? 'grab' : 'default';
  }
  
  // Função para resetar zoom
  function resetZoom() {
    currentZoom = 1;
    translateX = 0;
    translateY = 0;
    updateZoom();
    updatePosition();
  }
  
  // Função para atualizar posição
  function updatePosition() {
    zoomContainer.style.transform = `translate(-50%, -50%) translate(${translateX}px, ${translateY}px)`;
  }
  
  // Eventos de mouse para arrastar
  zoomContainer.addEventListener("mousedown", (e) => {
    if (currentZoom > 1) {
      isDragging = true;
      startX = e.clientX - translateX;
      startY = e.clientY - translateY;
      zoomContainer.style.cursor = 'grabbing';
    }
  });
  
  document.addEventListener("mousemove", (e) => {
    if (isDragging && currentZoom > 1) {
      translateX = e.clientX - startX;
      translateY = e.clientY - startY;
      updatePosition();
    }
  });
  
  document.addEventListener("mouseup", () => {
    if (isDragging) {
      isDragging = false;
      zoomContainer.style.cursor = 'grab';
    }
  });
  
  // Duplo clique para resetar
  zoomContainer.addEventListener("dblclick", () => {
    resetZoom();
  });
  
  // Suporte para dispositivos touch
  let touchStartX, touchStartY;
  
  zoomContainer.addEventListener("touchstart", (e) => {
    if (currentZoom > 1) {
      const touch = e.touches[0];
      touchStartX = touch.clientX - translateX;
      touchStartY = touch.clientY - translateY;
    }
  });
  
  zoomContainer.addEventListener("touchmove", (e) => {
    if (currentZoom > 1) {
      e.preventDefault();
      const touch = e.touches[0];
      translateX = touch.clientX - touchStartX;
      translateY = touch.clientY - touchStartY;
      updatePosition();
    }
  });
  
  // Gestos de pinch para zoom (dispositivos touch)
  let initialDistance = 0;
  let initialZoom = 1;
  
  zoomContainer.addEventListener("touchstart", (e) => {
    if (e.touches.length === 2) {
      initialDistance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      initialZoom = currentZoom;
    }
  });
  
  zoomContainer.addEventListener("touchmove", (e) => {
    if (e.touches.length === 2) {
      e.preventDefault();
      const currentDistance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      
      const scale = currentDistance / initialDistance;
      currentZoom = Math.max(0.5, Math.min(5, initialZoom * scale));
      updateZoom();
    }
  });
  
  // Sistema implementado com sucesso
  console.log("Carousel infinito automático com zoom interativo carregado!");
});
