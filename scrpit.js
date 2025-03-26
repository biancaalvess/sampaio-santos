// Dados dos projetos
const projectData = {
    project1: {
        title: "Projeto Residencial",
        description: "Casa moderna com design elegante, projetada para maximizar o conforto e a funcionalidade. Combinando espaços abertos com áreas íntimas, este projeto oferece o equilíbrio perfeito entre estética contemporânea e praticidade.",
        image: "/image/projeto-01.png"
    },
    project2: {
        title: "Chácara",
        description: "Com estilo e conforto únicos, esta chácara foi projetada para proporcionar uma experiência de vida rural sofisticada. Amplos espaços integrados à natureza, materiais nobres e soluções sustentáveis definem este projeto exclusivo.",
        image: "/image/projeto-06.jpg"
    },
    project3: {
        title: "Reforma de Fachada",
        description: "Transformação moderna e elegante que revitalizou completamente o visual do imóvel. A nova fachada combina elementos contemporâneos com toques clássicos, criando uma presença marcante e valorizando significativamente a propriedade.",
        image: "/image/projeto-03.png"
    },
    project4: {
        title: "Projeto Completo",
        description: "Arquitetura, Elétrico e Hidráulico integrados em um projeto completo e detalhado. Cada aspecto foi cuidadosamente planejado para garantir funcionalidade, eficiência energética e conforto, resultando em uma solução arquitetônica abrangente.",
        image: "/image/projeto-04.png"
    }
};

// Variável para armazenar o card ativo
let activeCard = null;

// Função para inicializar o carrossel
function initCarousel() {
    // Seleciona todos os cards
    const cards = document.querySelectorAll('.project-card');
    const detailsButton = document.getElementById('details-button');
    const expandedOverlay = document.getElementById('expanded-overlay');
    const closeButton = document.querySelector('.close-expanded');
    const expandedImage = document.getElementById('expanded-image');
    const expandedTitle = document.getElementById('expanded-title');
    const expandedDescription = document.getElementById('expanded-description');

    // Adiciona evento de clique a cada card
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Remove a classe active de todos os cards
            cards.forEach(c => c.classList.remove('active'));
            
            // Adiciona a classe active ao card clicado
            this.classList.add('active');
            activeCard = this;
            
            // Centraliza o card na visualização
            this.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            
            // Expande o card diretamente ao clicar (sem precisar do botão Detalhes)
            const projectId = this.getAttribute('data-project');
            expandProject(projectId);
        });
    });

    // Função para expandir o projeto
    function expandProject(projectId) {
        const project = projectData[projectId];
        
        // Preenche os dados do projeto na visualização expandida
        expandedImage.src = project.image;
        expandedTitle.textContent = project.title;
        expandedDescription.textContent = project.description;
        
        // Mostra a visualização expandida
        expandedOverlay.style.display = 'flex';
        setTimeout(() => {
            expandedOverlay.classList.add('active');
        }, 10);
        
        // Impede o scroll da página
        document.body.style.overflow = 'hidden';
    }

    // Função para abrir a visualização expandida via botão Detalhes
    function openExpandedView() {
        if (!activeCard) {
            // Se nenhum card estiver ativo, ativa o primeiro
            if (cards.length > 0) {
                cards[0].classList.add('active');
                activeCard = cards[0];
            } else {
                return; // Não há cards para mostrar
            }
        }
        
        const projectId = activeCard.getAttribute('data-project');
        expandProject(projectId);
    }

    // Função para fechar a visualização expandida
    function closeExpandedView() {
        expandedOverlay.classList.remove('active');
        
        // Restaura o scroll da página
        document.body.style.overflow = 'auto';
        
        // Aguarda a animação terminar antes de esconder completamente
        setTimeout(() => {
            expandedOverlay.style.display = 'none';
        }, 300);
    }

    // Adiciona evento de clique ao botão de detalhes
    detailsButton.addEventListener('click', openExpandedView);

    // Adiciona evento de clique ao botão de fechar
    closeButton.addEventListener('click', closeExpandedView);

    // Adiciona evento de clique ao overlay para fechar quando clicar fora da imagem
    expandedOverlay.addEventListener('click', function(e) {
        if (e.target === expandedOverlay) {
            closeExpandedView();
        }
    });

    // Adiciona suporte para tecla ESC para fechar o overlay
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && expandedOverlay.classList.contains('active')) {
            closeExpandedView();
        }
    });

    // Inicializa o terceiro card como ativo por padrão
    if (cards.length >= 3) {
        cards[2].classList.add('active');
        activeCard = cards[2];
    } else if (cards.length > 0) {
        cards[0].classList.add('active');
        activeCard = cards[0];
    }
}

// Inicializa o carrossel quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', initCarousel);

// Adiciona suporte para orientação de dispositivo móvel
window.addEventListener('orientationchange', function() {
    // Pequeno atraso para garantir que a orientação foi alterada
    setTimeout(() => {
        if (activeCard) {
            activeCard.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    }, 200);
});