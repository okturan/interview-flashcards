import Dexie from 'dexie';

class JavaMasterDB extends Dexie {
  constructor() {
    super('JavaMasterDB');

    this.version(1).stores({
      flashcards: 'id, topic, difficulty, *tags',
      cardProgress: 'cardId, nextReviewDate, confidence',
      sessions: 'id, startTime',
      userProgress: 'userId',
      achievements: 'id'
    });
  }
}

// Create database instance
export const db = new JavaMasterDB();

// Storage Service Class
class StorageService {
  // Cards
  async saveCard(card) {
    return await db.flashcards.put(card);
  }

  async getCard(id) {
    return await db.flashcards.get(id);
  }

  async getAllCards() {
    return await db.flashcards.toArray();
  }

  async getCardsByTopic(topic) {
    return await db.flashcards.where('topic').equals(topic).toArray();
  }

  async getCardsByDifficulty(difficulty) {
    return await db.flashcards.where('difficulty').equals(difficulty).toArray();
  }

  async bulkSaveCards(cards) {
    return await db.flashcards.bulkPut(cards);
  }

  // Progress
  async saveProgress(progress) {
    // Convert Maps to objects for storage
    const progressData = {
      ...progress,
      cardProgress: Object.fromEntries(progress.cardProgress),
      topicMastery: Object.fromEntries(progress.topicMastery)
    };
    return await db.userProgress.put(progressData);
  }

  async getProgress(userId = 'default') {
    const data = await db.userProgress.get(userId);
    if (!data) return null;

    // Convert objects back to Maps
    return {
      ...data,
      cardProgress: new Map(Object.entries(data.cardProgress || {})),
      topicMastery: new Map(Object.entries(data.topicMastery || {}))
    };
  }

  async updateCardProgress(cardId, update) {
    const existing = await db.cardProgress.get(cardId);
    if (existing) {
      return await db.cardProgress.put({ ...existing, ...update });
    } else {
      return await db.cardProgress.put({ cardId, ...update });
    }
  }

  async getCardProgress(cardId) {
    return await db.cardProgress.get(cardId);
  }

  async getAllCardProgress() {
    return await db.cardProgress.toArray();
  }

  async getDueCards() {
    const now = new Date();
    return await db.cardProgress
      .where('nextReviewDate')
      .belowOrEqual(now)
      .toArray();
  }

  // Sessions
  async saveSession(session) {
    return await db.sessions.put(session);
  }

  async getRecentSessions(limit = 10) {
    return await db.sessions
      .orderBy('startTime')
      .reverse()
      .limit(limit)
      .toArray();
  }

  async getSession(id) {
    return await db.sessions.get(id);
  }

  async getAllSessions() {
    return await db.sessions.toArray();
  }

  // Achievements
  async saveAchievement(achievement) {
    return await db.achievements.put(achievement);
  }

  async getAllAchievements() {
    return await db.achievements.toArray();
  }

  async getUnlockedAchievements() {
    return await db.achievements
      .filter(a => a.unlockedAt !== undefined)
      .toArray();
  }

  // Data Management
  async clearAllData() {
    await Promise.all([
      db.flashcards.clear(),
      db.cardProgress.clear(),
      db.sessions.clear(),
      db.userProgress.clear(),
      db.achievements.clear()
    ]);
  }

  async exportData() {
    const data = {
      flashcards: await db.flashcards.toArray(),
      cardProgress: await db.cardProgress.toArray(),
      sessions: await db.sessions.toArray(),
      userProgress: await db.userProgress.toArray(),
      achievements: await db.achievements.toArray(),
      exportDate: new Date().toISOString()
    };
    return new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  }

  async importData(jsonData) {
    try {
      const data = JSON.parse(jsonData);

      await this.clearAllData();

      if (data.flashcards) await db.flashcards.bulkPut(data.flashcards);
      if (data.cardProgress) await db.cardProgress.bulkPut(data.cardProgress);
      if (data.sessions) await db.sessions.bulkPut(data.sessions);
      if (data.userProgress) await db.userProgress.bulkPut(data.userProgress);
      if (data.achievements) await db.achievements.bulkPut(data.achievements);

      return { success: true, message: 'Data imported successfully' };
    } catch (error) {
      return { success: false, message: `Import failed: ${error.message}` };
    }
  }
}

export const storageService = new StorageService();
