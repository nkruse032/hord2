const mongoose = require('mongoose');

// Define the schema for Pokémon cards
const PokemonCardSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Card name
  rarity: { type: String, required: true }, // Card rarity (e.g., Common, Rare)
  price: { type: Number, required: true }, // Price in USD
  imageUrl: { type: String, required: true }, // Image URL of the card
  seller: { type: String, required: true }, // Seller's username
  createdAt: { type: Date, default: Date.now }, // Date the card was listed
});

// Create and export the model
module.exports = mongoose.model('PokemonCard', PokemonCardSchema);
