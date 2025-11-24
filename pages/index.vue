<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
    <!-- Header -->
    <header class="bg-white shadow-md">
      <div class="container mx-auto px-4 py-6">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Team Selector
            </h1>
            <p class="text-gray-600 text-sm mt-1">
              Find the perfect team for your project with AI-powered matching
            </p>
          </div>
          <div class="flex items-center gap-2 text-sm text-gray-600">
            <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            AI Powered
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-8">
      <!-- Progress Steps -->
      <div class="mb-8">
        <div class="flex items-center justify-center gap-4">
          <div
            :class="[
              'flex items-center gap-2 px-4 py-2 rounded-full transition',
              currentStep >= 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
            ]"
          >
            <span class="font-semibold">1</span>
            <span class="text-sm">Requirements</span>
          </div>
          <div class="w-8 h-0.5 bg-gray-300"></div>
          <div
            :class="[
              'flex items-center gap-2 px-4 py-2 rounded-full transition',
              currentStep >= 2 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
            ]"
          >
            <span class="font-semibold">2</span>
            <span class="text-sm">Team Pool</span>
          </div>
          <div class="w-8 h-0.5 bg-gray-300"></div>
          <div
            :class="[
              'flex items-center gap-2 px-4 py-2 rounded-full transition',
              currentStep >= 3 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
            ]"
          >
            <span class="font-semibold">3</span>
            <span class="text-sm">Results</span>
          </div>
        </div>
      </div>

      <!-- Step Content -->
      <div class="max-w-7xl mx-auto">
        <!-- Step 1: Project Requirements -->
        <div v-if="currentStep === 1" class="animate-fade-in">
          <ProjectRequirementsForm @submit="handleRequirementsSubmit" />
        </div>

        <!-- Step 2: Team Members View -->
        <div v-else-if="currentStep === 2" class="space-y-6 animate-fade-in">
          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-xl font-bold text-gray-800 mb-4">Review Project Requirements</h2>
            <div v-if="projectRequirements" class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span class="font-medium text-gray-700">Project:</span>
                <span class="text-gray-600 ml-2">{{ projectRequirements.projectName }}</span>
              </div>
              <div>
                <span class="font-medium text-gray-700">Team Size:</span>
                <span class="text-gray-600 ml-2">{{ projectRequirements.teamSize }} members</span>
              </div>
              <div>
                <span class="font-medium text-gray-700">Budget:</span>
                <span class="text-gray-600 ml-2">${{ projectRequirements.maxBudget.toLocaleString() }}</span>
              </div>
              <div>
                <span class="font-medium text-gray-700">Duration:</span>
                <span class="text-gray-600 ml-2">{{ projectRequirements.duration }}</span>
              </div>
            </div>
          </div>

          <TeamMembersView :members="teamMembers" />

          <div class="flex gap-4">
            <button
              @click="currentStep = 1"
              class="px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-md hover:bg-gray-300 transition"
            >
              ← Back
            </button>
            <button
              @click="findTeam"
              :disabled="loading"
              class="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-md hover:from-blue-600 hover:to-purple-700 transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="loading" class="flex items-center justify-center gap-2">
                <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Analyzing...
              </span>
              <span v-else>🤖 Find Best Team with AI</span>
            </button>
          </div>
        </div>

        <!-- Step 3: Results -->
        <div v-else-if="currentStep === 3 && recommendation" class="animate-fade-in">
          <TeamRecommendationResults
            :recommendation="recommendation"
            @new-search="resetSearch"
          />
        </div>

        <!-- Error State -->
        <div v-if="error" class="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p class="text-red-800 font-medium">Error: {{ error }}</p>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t border-gray-200 mt-16">
      <div class="container mx-auto px-4 py-6">
        <p class="text-center text-gray-600 text-sm">
          AI Team Selector - Powered by intelligent matching algorithms
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { ProjectRequirements, TeamMember, TeamRecommendation } from '../types/index';
import { useSampleData } from '../composables/useSampleData';

// State
const currentStep = ref(1);
const projectRequirements = ref<ProjectRequirements | null>(null);
const recommendation = ref<TeamRecommendation | null>(null);
const loading = ref(false);
const error = ref('');

// Load sample data
const { sampleTeamMembers } = useSampleData();
const teamMembers = ref<TeamMember[]>(sampleTeamMembers);

// Handlers
const handleRequirementsSubmit = (requirements: ProjectRequirements) => {
  projectRequirements.value = requirements;
  currentStep.value = 2;
  error.value = '';
};

const findTeam = async () => {
  if (!projectRequirements.value) return;

  loading.value = true;
  error.value = '';

  try {
    const response = await fetch('/api/match-team', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        requirements: projectRequirements.value,
        teamMembers: teamMembers.value
      })
    });

    const data = await response.json();

    if (data.success) {
      recommendation.value = data.data;
      currentStep.value = 3;
    }
  } catch (e: any) {
    error.value = e.message || 'Failed to find team. Please try again.';
    console.error('Error finding team:', e);
  } finally {
    loading.value = false;
  }
};

const resetSearch = () => {
  currentStep.value = 1;
  projectRequirements.value = null;
  recommendation.value = null;
  error.value = '';
};
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>


