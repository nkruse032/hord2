// Backend URL (replace with your deployed backend URL)
const backendUrl = "http://localhost:5000/cards"; // Replace 'localhost' if deployed

// Fetch Pokémon cards from the backend
async function fetchCards() {
  try {
    const response = await fetch(backendUrl);
    if (!response.ok) {
      throw new Error(`Error fetching cards: ${response.statusText}`);
    }
    const cards = await response.json();
    displayCards(cards);
  } catch (error) {
    console.error("❌ Error:", error);
  }
}

// Display cards on the webpage
function displayCards(cards) {
  const container = document.getElementById("cards-container");

  // Clear existing cards
  container.innerHTML = "";

  cards.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.className = "card";

    cardElement.innerHTML = `
      <img src="${card.imageUrl}" alt="${card.name}" class="card-image" />
      <h3>${card.name}</h3>
      <p>Rarity: ${card.rarity}</p>
      <p>Price: $${card.price}</p>
    `;

    container.appendChild(cardElement);
  });
}

// Run when the page loads
document.addEventListener("DOMContentLoaded", fetchCards);
