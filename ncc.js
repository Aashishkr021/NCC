document.addEventListener("DOMContentLoaded", () => {
    const cardsContainer = document.getElementById("cards-container");

    // Event Delegation for Card Clicks
    cardsContainer.addEventListener("click", (event) => {
        const clickedCard = event.target.closest(".card");
        if (clickedCard) {
            toggleCard(clickedCard);
        }
    });
});

// Function to Toggle Card Visibility
function toggleCard(card) {
    card.classList.toggle("expanded");
    const content = card.querySelector(".card-content");
    content.style.display = content.style.display === "block" ? "none" : "block";
}



document.addEventListener('DOMContentLoaded', function() {
    const heroForeground = document.querySelector('.hero-foreground');
    
    // Array of image paths for the hero section
    const heroImages = [
        '1.jpg',    // First image (current image)
        '2.jpg',             // Second image
        '1000054463.jpg'              // Third image
        // Add more image paths as needed
    ];

    let currentImageIndex = 0;

    function changeHeroImage() {
        // Increment image index, loop back to start if at end
        currentImageIndex = (currentImageIndex + 1) % heroImages.length;
        
        // Fade out effect
        heroForeground.style.opacity = 0;
        
        // After fade out, change image and fade in
        setTimeout(() => {
            heroForeground.src = heroImages[currentImageIndex];
            heroForeground.style.opacity = 1;
        }, 500);
    }

    // Initial styling for smooth transition
    heroForeground.style.transition = 'opacity 0.5s ease-in-out';

    // Change image every 5 seconds
    setInterval(changeHeroImage, 7000);
});
