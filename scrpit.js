// Get DOM elements
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.getElementsByClassName('close-modal')[0];

// Function to open modal with project image
function openProjectModal(projectId) {
    const projectImage = document.querySelector(`#${projectId} img`);
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modalImg.src = projectImage.src;
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

// Close modal when clicking the close button
closeBtn.onclick = function() {
    closeModal();
}

// Close modal when clicking outside the image
modal.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
}

// Function to close modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Handle keyboard events (Escape key to close modal)
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Add touch swipe support for mobile devices
let touchStartX = 0;
let touchEndX = 0;

modal.addEventListener('touchstart', function(event) {
    touchStartX = event.changedTouches[0].screenX;
}, false);

modal.addEventListener('touchend', function(event) {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    const swipeDistance = Math.abs(touchEndX - touchStartX);
    if (swipeDistance > 50) { // Minimum swipe distance
        closeModal();
    }
}