document.addEventListener("DOMContentLoaded", () => {
    // Project data with enhanced civil engineering information
    const projectData = {
        project1: {
            title: "Residência Alto Padrão",
            description:
            "Projeto arquitetônico para residência de alto padrão com 320m². Design moderno com amplos espaços integrados e acabamentos premium.",
            image: "image/projeto-01.png",
        },
        project2: {
            title: "Edifício Comercial",
            description:
            "Projeto para edifício comercial de 5 andares com 2.500m². Fachada moderna com vidros espelhados e estrutura contemporânea.",
            image: "image/projeto-02.png",
        },
        project3: {
            title: "Ponte Municipal",
            description:
            "Projeto de ponte com 45m de extensão sobre o Rio Verde. Estrutura moderna que se integra à paisagem local.",
            image: "image/projeto-03.jpg",
        },
        project4: {
            title: "Condomínio Residencial",
            description:
            "Projeto para condomínio com 12 casas geminadas. Design moderno com áreas comuns e espaços de lazer integrados.",
            image: "image/projeto-04.jpg",
        },
        project5: {
            title: "Estação de Tratamento",
            description:
            "Projeto para estação de tratamento de água com capacidade para 200L/s. Estrutura moderna e funcional com tecnologia de ponta.",
            image: "image/projeto-05.jpg",
        },
        }
    
        // DOM Elements
        const carousel = document.getElementById("projects-carousel")
        const carouselDots = document.getElementById("carousel-dots")
        const prevBtn = document.getElementById("prev-btn")
        const nextBtn = document.getElementById("next-btn")
        const modal = document.getElementById("image-modal")
        const modalImage = document.getElementById("modal-image")
        const modalTitle = document.getElementById("modal-title")
        const modalDescription = document.getElementById("modal-description")
        const closeModal = document.querySelector(".close-modal")
        const viewDetailsBtn = document.getElementById("view-details-btn")
    
        // Current project details elements
        const currentProjectTitle = document.getElementById("current-project-title")
        const currentProjectDescription = document.getElementById("current-project-description")
    
        // Variables for carousel
        let currentIndex = 0
        const projectCount = Object.keys(projectData).length
    
        // Variables for zoom functionality
        let scale = 1
        let isDragging = false
        let startX,
        startY,
        translateX = 0,
        translateY = 0
    
        // Initialize carousel
        function initCarousel() {
        // Create carousel items
        Object.keys(projectData).forEach((key, index) => {
            const project = projectData[key]
    
            // Create carousel item
            const item = document.createElement("div")
            item.className = "carousel-item"
            item.setAttribute("data-index", index)
            item.style.transform = `rotateY(${index * (360 / projectCount)}deg) translateZ(400px)`
    
            // Create image
            const img = document.createElement("img")
            img.src = project.image
            img.alt = project.title
    
            // Create caption
            const caption = document.createElement("div")
            caption.className = "carousel-caption"
    
            const title = document.createElement("h3")
            title.textContent = project.title
    
            caption.appendChild(title)
            item.appendChild(img)
            item.appendChild(caption)
    
            carousel.appendChild(item)
    
            // Create dot
            const dot = document.createElement("div")
            dot.className = "dot"
            dot.setAttribute("data-index", index)
            if (index === 0) dot.classList.add("active")
    
            dot.addEventListener("click", () => {
            rotateCarousel(index)
            })
    
            carouselDots.appendChild(dot)
        })
    
        // Set initial rotation
        updateCarousel()
        updateProjectDetails()
        }
    
        // Rotate carousel to show specific item
        function rotateCarousel(index) {
        currentIndex = index
        updateCarousel()
        updateProjectDetails()
        }
    
        // Update carousel rotation and active states
        function updateCarousel() {
        const rotation = currentIndex * -(360 / projectCount)
        carousel.style.transform = `rotateY(${rotation}deg)`
    
        // Update dots
        document.querySelectorAll(".dot").forEach((dot, index) => {
            if (index === currentIndex) {
            dot.classList.add("active")
            } else {
            dot.classList.remove("active")
            }
        })
        }
    
        // Update project details section
        function updateProjectDetails() {
        const projectKey = `project${currentIndex + 1}`
        const project = projectData[projectKey]
    
        currentProjectTitle.textContent = project.title
        currentProjectDescription.textContent = project.description
        }
    
        // Navigation button handlers
        prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + projectCount) % projectCount
        updateCarousel()
        updateProjectDetails()
        })
    
        nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % projectCount
        updateCarousel()
        updateProjectDetails()
        })
    
        // View details button handler
        viewDetailsBtn.addEventListener("click", () => {
        openModal()
        })
    
        // Open modal with current project
        function openModal() {
        const projectKey = `project${currentIndex + 1}`
        const project = projectData[projectKey]
    
        // Set modal content
        modalImage.src = project.image
        modalTitle.textContent = project.title
        modalDescription.textContent = project.description
    
        // Reset zoom and position
        resetZoom()
    
        // Show modal
        modal.style.display = "block"
        setTimeout(() => {
            modal.classList.add("active")
        }, 10)
        document.body.style.overflow = "hidden" // Prevent scrolling
        }
    
        // Close modal when clicking the close button
        closeModal.addEventListener("click", () => {
        closeImageModal()
        })
    
        // Close modal when clicking outside the image
        modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeImageModal()
        }
        })
    
        // Close modal with ESC key
        document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            closeImageModal()
        }
        })
    
        // Function to close the modal
        function closeImageModal() {
        modal.classList.remove("active")
        document.body.style.overflow = "" // Restore scrolling
    
        // Wait for animation to complete before hiding
        setTimeout(() => {
            if (!modal.classList.contains("active")) {
            modal.style.display = "none"
            }
        }, 300)
        }
    
        // Function to reset zoom
        function resetZoom() {
        scale = 1
        translateX = 0
        translateY = 0
        updateTransform()
        }
    
        // Function to update transform
        function updateTransform() {
        modalImage.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`
        }
    
        // Function to calculate distance between two points
        function getDistance(touch1, touch2) {
        const dx = touch1.clientX - touch2.clientX
        const dy = touch1.clientY - touch2.clientY
        return Math.sqrt(dx * dx + dy * dy)
        }
    
        // Zoom functionality with mouse wheel
        modalImage.addEventListener("wheel", (e) => {
        e.preventDefault()
    
        const delta = e.deltaY * -0.01
        const newScale = Math.min(Math.max(0.5, scale + delta), 5)
    
        // Only update if scale changed
        if (newScale !== scale) {
            // Calculate cursor position relative to image
            const rect = modalImage.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top
    
            // Calculate new translate values to zoom toward cursor
            const ratio = 1 - newScale / scale
            translateX = translateX + (x - translateX) * ratio
            translateY = translateY + (y - translateY) * ratio
    
            // Update scale
            scale = newScale
    
            // Apply transform
            updateTransform()
        }
        })
    
        // Double-click to reset zoom
        modalImage.addEventListener("dblclick", () => {
        resetZoom()
        })
    
        // Mouse drag to pan when zoomed
        modalImage.addEventListener("mousedown", (e) => {
        if (scale > 1) {
            isDragging = true
            startX = e.clientX - translateX
            startY = e.clientY - translateY
            modalImage.style.cursor = "grabbing"
        }
        })
    
        document.addEventListener("mousemove", (e) => {
        if (isDragging) {
            translateX = e.clientX - startX
            translateY = e.clientY - startY
            updateTransform()
        }
        })
    
        document.addEventListener("mouseup", () => {
        if (isDragging) {
            isDragging = false
            modalImage.style.cursor = scale > 1 ? "grab" : "default"
        }
        })
    
        // Touch events for mobile zoom and pan
        let initialDistance = 0
        let initialScale = 1
    
        modalImage.addEventListener("touchstart", (e) => {
        if (e.touches.length === 2) {
            // Two finger touch - prepare for pinch zoom
            initialDistance = getDistance(e.touches[0], e.touches[1])
            initialScale = scale
            e.preventDefault()
        } else if (e.touches.length === 1 && scale > 1) {
            // Single finger touch - prepare for pan
            isDragging = true
            startX = e.touches[0].clientX - translateX
            startY = e.touches[0].clientY - translateY
            e.preventDefault()
        }
        })
    
        modalImage.addEventListener("touchmove", (e) => {
        if (e.touches.length === 2) {
            // Pinch zoom
            const currentDistance = getDistance(e.touches[0], e.touches[1])
            const newScale = Math.min(Math.max(0.5, initialScale * (currentDistance / initialDistance)), 5)
    
            if (newScale !== scale) {
            // Get the midpoint of the two touches
            const midX = (e.touches[0].clientX + e.touches[1].clientX) / 2
            const midY = (e.touches[0].clientY + e.touches[1].clientY) / 2
    
            // Get the position relative to the image
            const rect = modalImage.getBoundingClientRect()
            const x = midX - rect.left
            const y = midY - rect.top
    
            // Calculate new translate values to zoom toward cursor
            const ratio = 1 - newScale / scale
            translateX = translateX + (x - translateX) * ratio
            translateY = translateY + (y - translateY) * ratio
    
            // Update scale
            scale = newScale
    
            // Apply transform
            updateTransform()
            }
        } else if (e.touches.length === 1 && isDragging) {
            translateX = e.touches[0].clientX - startX
            translateY = e.touches[0].clientY - startY
            updateTransform()
        }
        })
    
        document.addEventListener("touchend", () => {
        isDragging = false
        modalImage.style.cursor = scale > 1 ? "grab" : "default"
        })
    
        // Adicionar suporte para swipe no carrossel
        let touchStartX = 0
        let touchEndX = 0
    
        carousel.addEventListener(
        "touchstart",
        (e) => {
            touchStartX = e.changedTouches[0].screenX
        },
        false,
        )
    
        carousel.addEventListener(
        "touchend",
        (e) => {
            touchEndX = e.changedTouches[0].screenX
            handleSwipe()
        },
        false,
        )
    
        function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            // Swipe para a esquerda
            nextBtn.click()
        }
        if (touchEndX > touchStartX + 50) {
            // Swipe para a direita
            prevBtn.click()
        }
        }
    
        // Chamar a função de ajuste ao carregar
        adjustCarouselForScreenSize()
    })
    
    // Adicionar detecção de orientação para ajustar o carrossel
    window.addEventListener("resize", adjustCarouselForScreenSize)
    window.addEventListener("orientationchange", adjustCarouselForScreenSize)
    
    // Função para ajustar o carrossel com base no tamanho da tela
    function adjustCarouselForScreenSize() {
        const isMobile = window.innerWidth <= 576
        const isSmallMobile = window.innerWidth <= 375
        const isLandscape = window.innerWidth > window.innerHeight
    
        // Ajustar a distância Z do carrossel com base no tamanho da tela
        document.querySelectorAll(".carousel-item").forEach((item, index) => {
        let translateZ = 400 // Valor padrão para desktop
    
        if (isSmallMobile) {
            translateZ = 200
        } else if (isMobile) {
            translateZ = 300
        } else if (window.innerWidth <= 768) {
            translateZ = 350
        }
    
        // Ajustar para orientação paisagem em dispositivos móveis
        if (isLandscape && window.innerWidth <= 768) {
            translateZ = translateZ * 0.7
        }
    
        item.style.transform = `rotateY(${index * (360 / projectCount)}deg) translateZ(${translateZ}px)`
        })
    
        // Atualizar a rotação atual
        updateCarousel()
    }
    
    // Modificar a função initCarousel para chamar adjustCarouselForScreenSize
    const originalInitCarousel = initCarousel
    function initCarousel() {
        originalInitCarousel()
        adjustCarouselForScreenSize()
    }
    
  