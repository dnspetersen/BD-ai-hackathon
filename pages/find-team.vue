<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
    <!-- Header -->
    <header class="bg-white shadow-md">
      <div class="container mx-auto px-4 py-6">
        <div class="flex items-center justify-between">
          <div>
            <NuxtLink to="/" class="inline-block">
              <h1 class="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition">
                AI Team Matcher
              </h1>
            </NuxtLink>
            <p class="text-gray-600 text-sm mt-1">
              Find the perfect team for your project with AI-powered matching
            </p>
          </div>
          <div class="flex items-center gap-4">
            <NuxtLink
              to="/"
              class="px-4 py-2 text-gray-600 font-semibold hover:text-purple-600 transition"
            >
              Home
            </NuxtLink>
            <NuxtLink
              to="/saved-results"
              class="px-4 py-2 text-gray-600 font-semibold hover:text-purple-600 transition"
            >
              Saved Results
            </NuxtLink>
            <NuxtLink
              to="/team-members"
              class="px-4 py-2 bg-white border-2 border-purple-500 text-purple-600 font-semibold rounded-md hover:bg-purple-50 transition"
            >
              Team Pool
            </NuxtLink>
            <div class="flex items-center gap-2 text-sm text-gray-600">
              <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              AI Powered
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-8">

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
        <!-- Left Column: Project Requirements -->
        <div class="space-y-6">
          <ProjectRequirementsForm 
            :key="formKey"
            @submit="handleRequirementsUpdate" 
          />
        </div>

        <!-- Right Column: AI Results -->
        <div class="space-y-6">
          <!-- Auto-update toggle -->
          <div class="bg-white rounded-lg shadow-md p-4 flex items-center justify-between">
            <div>
              <p class="font-medium text-gray-800">Auto-update Results</p>
              <p class="text-xs text-gray-600">Automatically refresh AI results when changing parameters</p>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input
                v-model="autoUpdate"
                type="checkbox"
                class="sr-only peer"
              />
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <!-- Loading State -->
          <div v-if="loading" class="bg-white rounded-lg shadow-md p-12 flex flex-col items-center justify-center">
            <svg class="animate-spin h-12 w-12 text-blue-500 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p class="text-gray-600 font-medium">🤖 AI is analyzing...</p>
            <p class="text-gray-500 text-sm mt-2">Finding the best team for your project</p>
          </div>

          <!-- Error State -->
          <div v-else-if="error" class="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <p class="text-red-800 font-medium mb-2">⚠️ Error</p>
            <p class="text-red-700 text-sm">{{ error }}</p>
            <button
              @click="findTeam"
              class="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
            >
              Try Again
            </button>
          </div>

          <!-- Empty State -->
          <div v-else-if="!recommendation && !hasRequirements" class="bg-white rounded-lg shadow-md p-12 flex flex-col items-center justify-center text-center">
            <div class="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mb-4">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">Ready to Find Your Team</h3>
            <p class="text-gray-600 mb-4">Fill in the project requirements to get AI-powered team recommendations</p>
          </div>
          

          <!-- Results -->
          <div v-else-if="recommendation" class="animate-fade-in">
            <TeamRecommendationResults
              :recommendation="recommendation"
              :all-members="teamMembers"
              :requirements="projectRequirements || undefined"
              @new-search="resetSearch"
              @update-recommendation="handleRecommendationUpdate"
            />
          </div>
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
import { ref, watch } from 'vue';
import type { ProjectRequirements, TeamMember, TeamRecommendation } from '../types/index';
import { useSampleData } from '../composables/useSampleData';

// State
const projectRequirements = ref<ProjectRequirements | null>(null);
const recommendation = ref<TeamRecommendation | null>(null);
const loading = ref(false);
const error = ref('');
const autoUpdate = ref(true);
const formKey = ref(0);

// Load sample data
const { sampleTeamMembers } = useSampleData();
const teamMembers = ref<TeamMember[]>(sampleTeamMembers);

// Computed
const hasRequirements = computed(() => {
  return projectRequirements.value && 
    projectRequirements.value.projectName && 
    projectRequirements.value.requiredTechnicalSkills.length > 0;
});

// Handlers
const handleRequirementsUpdate = async (requirements: ProjectRequirements) => {
  projectRequirements.value = requirements;
  error.value = '';
  
  if (autoUpdate.value) {
    await findTeam();
  }
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
    } else {
      error.value = data.error || 'Failed to find team';
    }
  } catch (e: any) {
    error.value = e.message || 'Failed to find team. Please try again.';
    console.error('Error finding team:', e);
  } finally {
    loading.value = false;
  }
};

const resetSearch = () => {
  projectRequirements.value = null;
  recommendation.value = null;
  error.value = '';
  formKey.value++; // Force form reset
};

const handleRecommendationUpdate = (newRecommendation: TeamRecommendation) => {
  recommendation.value = newRecommendation;
};

// Watch for manual button click when auto-update is off
watch(autoUpdate, (newVal) => {
  if (newVal && hasRequirements.value && !recommendation.value) {
    findTeam();
  }
});
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

