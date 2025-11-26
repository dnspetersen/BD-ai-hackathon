<template>
  <div class="bg-white rounded-lg shadow-md p-6 sticky top-4 z-10">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-2xl font-bold text-gray-800">Project Requirements</h2>
      <span
        v-if="initialValues"
        class="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full flex items-center gap-1"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
        </svg>
        Editing
      </span>
    </div>
    
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Project Name *
        </label>
        <input
          v-model="form.projectName"
          type="text"
          required
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter project name"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Client Name *
        </label>
        <input
          v-model="form.clientName"
          type="text"
          required
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter client name"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Description *
        </label>
        <textarea
          v-model="form.description"
          required
          rows="3"
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Describe your project"
        ></textarea>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Required Technical Skills *
        </label>
        <div class="flex gap-2 mb-2">
          <input
            v-model="newTechnicalSkill"
            type="text"
            class="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Add a skill"
            @keyup.enter="addTechnicalSkill"
          />
          <button
            type="button"
            @click="addTechnicalSkill"
            class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Add
          </button>
        </div>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="(skill, index) in form.requiredTechnicalSkills"
            :key="index"
            class="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
          >
            {{ skill }}
            <button
              type="button"
              @click="removeTechnicalSkill(index)"
              class="hover:text-blue-900"
            >
              ×
            </button>
          </span>
        </div>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Required Soft Skills *
        </label>
        <div class="flex gap-2 mb-2">
          <input
            v-model="newSoftSkill"
            type="text"
            class="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Add a soft skill"
            @keyup.enter="addSoftSkill"
          />
          <button
            type="button"
            @click="addSoftSkill"
            class="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
          >
            Add
          </button>
        </div>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="(skill, index) in form.requiredSoftSkills"
            :key="index"
            class="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
          >
            {{ skill }}
            <button
              type="button"
              @click="removeSoftSkill(index)"
              class="hover:text-green-900"
            >
              ×
            </button>
          </span>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Minimum Experience (years) *
          </label>
          <input
            v-model.number="form.minExperienceYears"
            type="number"
            min="0"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Team Size *
          </label>
          <input
            v-model.number="form.teamSize"
            type="number"
            min="1"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Maximum Budget ($) *
          </label>
          <input
            v-model.number="form.maxBudget"
            type="number"
            min="0"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Duration *
          </label>
          <input
            v-model="form.duration"
            type="text"
            required
            placeholder="e.g., 6 months"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Preferred Education (optional)
        </label>
        <div class="flex gap-2 mb-2">
          <input
            v-model="newEducation"
            type="text"
            class="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Add education preference"
            @keyup.enter="addEducation"
          />
          <button
            type="button"
            @click="addEducation"
            class="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition"
          >
            Add
          </button>
        </div>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="(edu, index) in form.preferredEducation"
            :key="index"
            class="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
          >
            {{ edu }}
            <button
              type="button"
              @click="removeEducation(index)"
              class="hover:text-purple-900"
            >
              ×
            </button>
          </span>
        </div>
      </div>

      <div class="flex gap-4 pt-4">
        <button
          type="submit"
          class="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-md hover:from-blue-600 hover:to-purple-700 transition shadow-lg"
        >
          🤖 Get AI Recommendations
        </button>
        <button
          type="button"
          @click="resetForm"
          class="px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-md hover:bg-gray-300 transition"
        >
          Reset
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import type { ProjectRequirements } from '../types/index';

const props = defineProps<{
  initialValues?: ProjectRequirements | null;
}>();

const emit = defineEmits<{
  submit: [requirements: ProjectRequirements];
}>();

const form = ref<ProjectRequirements>({
  projectName: '',
  clientName: '',
  description: '',
  requiredTechnicalSkills: [],
  requiredSoftSkills: [],
  minExperienceYears: 3,
  maxBudget: 500000,
  teamSize: 5,
  duration: '6 months',
  preferredEducation: []
});

const newTechnicalSkill = ref('');
const newSoftSkill = ref('');
const newEducation = ref('');

// Load initial values if provided
const loadInitialValues = (values: ProjectRequirements) => {
  form.value = {
    ...values,
    preferredEducation: values.preferredEducation || []
  };
};

// Watch for initial values changes
watch(() => props.initialValues, (newValues) => {
  if (newValues) {
    loadInitialValues(newValues);
  }
}, { immediate: true });

onMounted(() => {
  if (props.initialValues) {
    loadInitialValues(props.initialValues);
  }
});

const addTechnicalSkill = () => {
  if (newTechnicalSkill.value.trim()) {
    form.value.requiredTechnicalSkills.push(newTechnicalSkill.value.trim());
    newTechnicalSkill.value = '';
  }
};

const removeTechnicalSkill = (index: number) => {
  form.value.requiredTechnicalSkills.splice(index, 1);
};

const addSoftSkill = () => {
  if (newSoftSkill.value.trim()) {
    form.value.requiredSoftSkills.push(newSoftSkill.value.trim());
    newSoftSkill.value = '';
  }
};

const removeSoftSkill = (index: number) => {
  form.value.requiredSoftSkills.splice(index, 1);
};

const addEducation = () => {
  if (newEducation.value.trim()) {
    form.value.preferredEducation = form.value.preferredEducation || [];
    form.value.preferredEducation.push(newEducation.value.trim());
    newEducation.value = '';
  }
};

const removeEducation = (index: number) => {
  form.value.preferredEducation?.splice(index, 1);
};

const handleSubmit = () => {
  if (form.value.requiredTechnicalSkills.length === 0) {
    console.warn('Please add at least one technical skill');
    return;
  }
  if (form.value.requiredSoftSkills.length === 0) {
    console.warn('Please add at least one soft skill');
    return;
  }
  emit('submit', { ...form.value });
};

const resetForm = () => {
  form.value = {
    projectName: '',
    clientName: '',
    description: '',
    requiredTechnicalSkills: [],
    requiredSoftSkills: [],
    minExperienceYears: 3,
    maxBudget: 500000,
    teamSize: 5,
    duration: '6 months',
    preferredEducation: []
  };
  newTechnicalSkill.value = '';
  newSoftSkill.value = '';
  newEducation.value = '';
};
</script>


