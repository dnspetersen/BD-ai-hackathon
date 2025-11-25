import type { ProjectRequirements, TeamRecommendation } from '../types';

export interface SavedResult {
  id: string;
  projectRequirements: ProjectRequirements;
  recommendation: TeamRecommendation;
  savedAt: string;
  notes?: string;
}

const STORAGE_KEY = 'ai-team-matcher-saved-results';

export const useSavedResults = () => {
  // Get all saved results
  const getSavedResults = (): SavedResult[] => {
    if (process.client) {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
      } catch (error) {
        console.error('Error loading saved results:', error);
        return [];
      }
    }
    return [];
  };

  // Save a new result
  const saveResult = (
    projectRequirements: ProjectRequirements,
    recommendation: TeamRecommendation,
    notes?: string
  ): SavedResult => {
    const newResult: SavedResult = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      projectRequirements,
      recommendation,
      savedAt: new Date().toISOString(),
      notes
    };

    if (process.client) {
      try {
        const results = getSavedResults();
        results.unshift(newResult); // Add to beginning
        localStorage.setItem(STORAGE_KEY, JSON.stringify(results));
      } catch (error) {
        console.error('Error saving result:', error);
        throw new Error('Failed to save result');
      }
    }

    return newResult;
  };

  // Delete a saved result
  const deleteResult = (id: string): void => {
    if (process.client) {
      try {
        const results = getSavedResults().filter(r => r.id !== id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(results));
      } catch (error) {
        console.error('Error deleting result:', error);
        throw new Error('Failed to delete result');
      }
    }
  };

  // Update notes for a saved result
  const updateNotes = (id: string, notes: string): void => {
    if (process.client) {
      try {
        const results = getSavedResults();
        const index = results.findIndex(r => r.id === id);
        if (index !== -1) {
          results[index].notes = notes;
          localStorage.setItem(STORAGE_KEY, JSON.stringify(results));
        }
      } catch (error) {
        console.error('Error updating notes:', error);
        throw new Error('Failed to update notes');
      }
    }
  };

  // Get a specific result by ID
  const getResultById = (id: string): SavedResult | undefined => {
    return getSavedResults().find(r => r.id === id);
  };

  // Clear all saved results
  const clearAllResults = (): void => {
    if (process.client) {
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch (error) {
        console.error('Error clearing results:', error);
        throw new Error('Failed to clear results');
      }
    }
  };

  return {
    getSavedResults,
    saveResult,
    deleteResult,
    updateNotes,
    getResultById,
    clearAllResults
  };
};

