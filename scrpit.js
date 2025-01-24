// Modal functionality
function openModal(img) {
    const modal = document.getElementById("imageModal")
    const modalImg = document.getElementById("modalImage")
    modal.style.display = "block"
    modalImg.src = img.src

    // Add click event to close modal when clicking outside the image
    modal.onclick = (e) => {
    if (e.target === modal || e.target.className === "close-modal") {
        closeModal()
        }
    }

    // Add escape key functionality
    document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeModal()
    }
    })
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none"
}


    // Project modal functionality
    function openProjectModal(projectId) {
        const modal = document.getElementById("projectModal")
        const modalImage = document.getElementById("projectModalImage")
        const modalTitle = document.getElementById("projectModalTitle")
        const modalDescription = document.getElementById("projectModalDescription")
    
        const projectDetails = {
        project1: {
            title: "Projeto Residencial - Casa Moderna",
            description:
            "Este projeto residencial apresenta uma casa moderna com design elegante. Características incluem linhas limpas, grandes janelas para maximizar a luz natural, e uma integração harmoniosa entre os espaços internos e externos. O uso de materiais sustentáveis e tecnologias de eficiência energética tornam esta residência não apenas esteticamente agradável, mas também ambientalmente responsável.",
            image: "/image/projeto-01.png",
        },
        project2: {
            title: "Projeto Residencial - Chácara de Alto Padrão",
            description:
            "Esta chácara de alto padrão combina o charme rural com o luxo moderno. O projeto inclui uma ampla área de lazer com piscina, espaços gourmet para entretenimento, e paisagismo elaborado que se integra perfeitamente ao ambiente natural. A residência principal apresenta um design contemporâneo com toques rústicos, criando um refúgio sofisticado e acolhedor.",
            image: "/image/projeto-06.jpg",
        },
        project3: {
            title: "Projeto de Reforma - Fachada Residencial",
            description:
            "Este projeto de reforma transformou completamente a fachada de uma residência existente. O novo design incorpora elementos modernos, como grandes painéis de vidro e uma paleta de cores contemporânea, ao mesmo tempo em que preserva o caráter original da casa. A renovação não apenas melhorou a estética, mas também aumentou a eficiência energética da residência.",
            image: "/image/projeto-03.png",
        },
        project4: {
            title: "Projeto Completo - Residência Integrada",
            description:
            "Este projeto completo abrange todos os aspectos de uma residência moderna, incluindo fachada, sistemas hidráulicos, elétricos e design arquitetônico. A abordagem integrada garantiu que todos os sistemas funcionem em harmonia, resultando em uma casa altamente eficiente e confortável. Destaque para soluções inteligentes de automação residencial e uso de energias renováveis.",
            image: "/image/projeto-04.png",
        },
        }
    
        modalImage.src = projectDetails[projectId].image
        modalTitle.textContent = projectDetails[projectId].title
        modalDescription.textContent = projectDetails[projectId].description
    
        modal.style.display = "block"
    
        // Close modal when clicking outside
        modal.onclick = (event) => {
        if (event.target === modal) {
            closeProjectModal()
        }
        }
    
        // Add escape key functionality
        document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeProjectModal()
        }
        })
    }
    
    function closeProjectModal() {
        document.getElementById("projectModal").style.display = "none"
    }
    
