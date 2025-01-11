const projetoImages = document.querySelectorAll('.project-image');

projetoImages.forEach(img => {
    img.addEventListener('animationiteration', () => {
        img.style.animation = 'none';
        img.offsetHeight;  
        img.style.animation = '';
    });
});
