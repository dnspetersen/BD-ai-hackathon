import { ref } from 'vue';
import type { ProjectRequirements } from '../types';

// Shared state for project editing
const projectToEdit = ref<ProjectRequirements | null>(null);
const editingFromSavedResult = ref(false);

export const useProjectEdit = () => {
  // Set project to edit
  const setProjectToEdit = (project: ProjectRequirements) => {
    projectToEdit.value = { ...project };
    editingFromSavedResult.value = true;
  };

  // Get project to edit
  const getProjectToEdit = () => {
    return projectToEdit.value;
  };

  // Clear project edit state
  const clearProjectToEdit = () => {
    projectToEdit.value = null;
    editingFromSavedResult.value = false;
  };

  // Check if editing
  const isEditing = () => {
    return editingFromSavedResult.value;
  };

  return {
    setProjectToEdit,
    getProjectToEdit,
    clearProjectToEdit,
    isEditing
  };
};

