import { storageService } from '../services/storage';
import { flashcardsData } from './flashcardsData';

export async function initializeFlashcards() {
  try {
    // Check if cards already exist
    const existingCards = await storageService.getAllCards();

    // Add timestamps to flashcards
    const allCards = flashcardsData.map(card => ({
      ...card,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }));

    if (existingCards.length === 0) {
      console.log('Initializing flashcards database...');

      // Save to IndexedDB
      await storageService.bulkSaveCards(allCards);
      console.log(`✅ Initialized ${allCards.length} flashcards`);

      return allCards;
    } else {
      // Check if we need to update existing cards or add new cards
      console.log(`📚 Found ${existingCards.length} existing flashcards, ${allCards.length} in data file`);

      // Create map of existing cards by ID
      const existingCardMap = new Map(existingCards.map(c => [c.id, c]));

      // Track cards that need updates
      const cardsToUpdate = [];
      const newCards = [];

      // Check each card from the data file
      for (const dataCard of allCards) {
        const existingCard = existingCardMap.get(dataCard.id);

        if (!existingCard) {
          // This is a new card
          newCards.push(dataCard);
        } else {
          // Check if the card needs updating (e.g., new translations field)
          const needsUpdate = !existingCard.translations && dataCard.translations;

          if (needsUpdate) {
            // Merge the new data with existing card, preserving createdAt
            cardsToUpdate.push({
              ...dataCard,
              createdAt: existingCard.createdAt,
              updatedAt: new Date().toISOString()
            });
          }
        }
      }

      // Apply updates
      if (newCards.length > 0) {
        console.log(`➕ Adding ${newCards.length} new flashcards...`);
        await storageService.bulkSaveCards(newCards);
        console.log(`✅ Added ${newCards.length} new flashcards`);
      }

      if (cardsToUpdate.length > 0) {
        console.log(`🔄 Updating ${cardsToUpdate.length} flashcards with new translations...`);
        await storageService.bulkSaveCards(cardsToUpdate);
        console.log(`✅ Updated ${cardsToUpdate.length} flashcards`);
      }

      if (newCards.length === 0 && cardsToUpdate.length === 0) {
        console.log(`✓ All flashcards are up to date`);
      }

      return await storageService.getAllCards();
    }
  } catch (error) {
    console.error('Failed to initialize flashcards:', error);
    throw error;
  }
}

export async function resetData() {
  await storageService.clearAllData();
  console.log('🗑️ All data cleared');
}
