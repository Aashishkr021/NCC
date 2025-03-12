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
