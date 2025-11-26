<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
    <!-- Header -->
    <AppNavigation 
      current-page="saved-results" 
      subtitle="Your saved team recommendations" 
    />

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-8">
      <div class="max-w-7xl mx-auto">
        <!-- Header with Actions -->
        <div class="flex items-center justify-between mb-6">
          <div>
            <h2 class="text-3xl font-bold text-gray-900">Saved Results</h2>
            <p class="text-gray-600 mt-1">{{ savedResults.length }} saved team recommendations</p>
          </div>
          <div class="flex items-center gap-3">
            <button
              v-if="savedResults.length > 0"
              @click="showClearConfirm = true"
              class="px-4 py-2 text-red-600 border-2 border-red-300 font-semibold rounded-md hover:bg-red-50 transition"
            >
              Clear All
            </button>
            <NuxtLink
              to="/find-team"
              class="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-md hover:shadow-lg transition"
            >
              + New Search
            </NuxtLink>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="savedResults.length === 0" class="bg-white rounded-lg shadow-md p-16 text-center">
          <svg class="w-24 h-24 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
          </svg>
          <h3 class="text-2xl font-bold text-gray-700 mb-2">No Saved Results Yet</h3>
          <p class="text-gray-500 mb-6">Start by finding a team and saving your favorite recommendations</p>
          <NuxtLink
            to="/find-team"
            class="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-xl transition"
          >
            Find Your First Team
          </NuxtLink>
        </div>

        <!-- Results List -->
        <div v-else class="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div
            v-for="result in savedResults"
            :key="result.id"
            class="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden flex flex-col"
          >
            <!-- Card Header -->
            <div class="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
              <div class="flex items-start justify-between">
                <div class="flex-1">
                  <h3 class="text-2xl font-bold mb-2">{{ result.projectRequirements.projectName }}</h3>
                  <div class="flex items-center gap-4 text-sm opacity-90">
                    <span class="flex items-center gap-1">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                      Client: {{ result.projectRequirements.clientName }}
                    </span>
                    <span class="flex items-center gap-1">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      {{ formatDate(result.savedAt) }}
                    </span>
                  </div>
                </div>
                <button
                  @click="deleteResultConfirm(result.id)"
                  class="p-2 hover:bg-white/20 rounded-lg transition"
                  title="Delete"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
                </button>
              </div>
            </div>

            <!-- Card Body -->
            <div class="p-6">
              <!-- Project Info -->
              <div class="mb-6">
                <p class="text-gray-700 mb-4">{{ result.projectRequirements.description }}</p>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div class="bg-blue-50 rounded-lg p-3">
                    <p class="text-xs text-gray-600 mb-1">Team Size</p>
                    <p class="text-lg font-bold text-blue-600">{{ result.projectRequirements.teamSize }} members</p>
                  </div>
                  <div class="bg-green-50 rounded-lg p-3">
                    <p class="text-xs text-gray-600 mb-1">Budget</p>
                    <p class="text-lg font-bold text-green-600">${{ (result.projectRequirements.maxBudget / 1000).toFixed(0) }}K</p>
                  </div>
                  <div class="bg-purple-50 rounded-lg p-3">
                    <p class="text-xs text-gray-600 mb-1">Match Score</p>
                    <p class="text-lg font-bold text-purple-600">{{ result.recommendation.totalScore.toFixed(1) }}%</p>
                  </div>
                  <div class="bg-pink-50 rounded-lg p-3">
                    <p class="text-xs text-gray-600 mb-1">Total Cost</p>
                    <p class="text-lg font-bold text-pink-600">${{ (result.recommendation.totalCost / 1000).toFixed(0) }}K</p>
                  </div>
                </div>
              </div>

              <!-- Toggle Details Button -->
              <button
                @click="toggleDetails(result.id)"
                class="w-full mb-4 px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition flex items-center justify-center gap-2"
              >
                <span>{{ expandedResults.has(result.id) ? 'Hide' : 'Show' }} Team Details</span>
                <svg
                  class="w-4 h-4 transition-transform"
                  :class="{ 'rotate-180': expandedResults.has(result.id) }"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              <!-- Team Members (Expandable) -->
              <div v-if="expandedResults.has(result.id)" class="space-y-3">
                <!-- Coverage Analysis -->
                <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mt-4 mb-6">
                  <h5 class="font-semibold text-gray-800 mb-3">Coverage Analysis</h5>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <div class="flex justify-between items-center mb-1">
                        <span class="text-sm text-gray-700">Technical Skills</span>
                        <span class="text-sm font-bold text-blue-600">{{ result.recommendation.coverageAnalysis.technicalSkillsCoverage.toFixed(0) }}%</span>
                      </div>
                      <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          class="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all"
                          :style="{ width: `${result.recommendation.coverageAnalysis.technicalSkillsCoverage}%` }"
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div class="flex justify-between items-center mb-1">
                        <span class="text-sm text-gray-700">Soft Skills</span>
                        <span class="text-sm font-bold text-green-600">{{ result.recommendation.coverageAnalysis.softSkillsCoverage.toFixed(0) }}%</span>
                      </div>
                      <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          class="h-full bg-gradient-to-r from-green-500 to-green-600 transition-all"
                          :style="{ width: `${result.recommendation.coverageAnalysis.softSkillsCoverage}%` }"
                        ></div>
                      </div>
                    </div>
                  </div>

                  <!-- Skills Matching Chips -->
                  <div class="space-y-3 pt-3 border-t border-purple-200">
                    <!-- Technical Skills Chips -->
                    <div>
                      <p class="text-xs font-medium text-gray-700 mb-2">Required Technical Skills</p>
                      <div class="flex flex-wrap gap-1.5">
                        <span
                          v-for="skill in result.projectRequirements.requiredTechnicalSkills"
                          :key="skill"
                          :class="[
                            'px-2 py-1 rounded text-xs font-medium flex items-center gap-1',
                            getTeamTechnicalSkills(result).has(skill)
                              ? 'bg-green-100 text-green-800 border border-green-300'
                              : 'bg-red-100 text-red-800 border border-red-300'
                          ]"
                        >
                          <svg 
                            v-if="getTeamTechnicalSkills(result).has(skill)"
                            class="w-3 h-3" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                          </svg>
                          <svg 
                            v-else
                            class="w-3 h-3" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                          </svg>
                          {{ skill }}
                        </span>
                      </div>
                    </div>

                    <!-- Soft Skills Chips -->
                    <div>
                      <p class="text-xs font-medium text-gray-700 mb-2">Required Soft Skills</p>
                      <div class="flex flex-wrap gap-1.5">
                        <span
                          v-for="skill in result.projectRequirements.requiredSoftSkills"
                          :key="skill"
                          :class="[
                            'px-2 py-1 rounded text-xs font-medium flex items-center gap-1',
                            getTeamSoftSkills(result).has(skill)
                              ? 'bg-green-100 text-green-800 border border-green-300'
                              : 'bg-red-100 text-red-800 border border-red-300'
                          ]"
                        >
                          <svg 
                            v-if="getTeamSoftSkills(result).has(skill)"
                            class="w-3 h-3" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                          </svg>
                          <svg 
                            v-else
                            class="w-3 h-3" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                          </svg>
                          {{ skill }}
                        </span>
                      </div>
                    </div>

                    <!-- Legend -->
                    <div class="flex items-center gap-4 pt-2 text-xs">
                      <div class="flex items-center gap-1">
                        <div class="w-3 h-3 rounded-full bg-green-500"></div>
                        <span class="text-gray-600">Covered by team</span>
                      </div>
                      <div class="flex items-center gap-1">
                        <div class="w-3 h-3 rounded-full bg-red-500"></div>
                        <span class="text-gray-600">Missing skill</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h4 class="font-semibold text-gray-800 mb-3">Team Members ({{ result.recommendation.team.length }})</h4>
                <div
                  v-for="(match, index) in result.recommendation.team"
                  :key="match.member.id"
                  class="border-2 border-gray-200 rounded-lg p-4 hover:border-purple-300 transition"
                >
                  <div class="flex items-start justify-between mb-3">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
                        {{ index + 1 }}
                      </div>
                      <div>
                        <h5 class="font-bold text-gray-800">{{ match.member.name }}</h5>
                        <p class="text-sm text-gray-600">{{ match.member.role }}</p>
                      </div>
                    </div>
                    <div class="text-right">
                      <div class="text-xl font-bold text-blue-600">{{ match.score.toFixed(1) }}%</div>
                      <div class="text-xs text-gray-500">${{ match.member.expectedSalary.toLocaleString() }}</div>
                    </div>
                  </div>

                  <div class="grid grid-cols-2 md:grid-cols-5 gap-2 mb-3">
                    <div class="text-center p-2 bg-blue-50 rounded">
                      <div class="text-xs text-gray-600">Technical</div>
                      <div class="font-semibold text-blue-700">{{ match.matchDetails.technicalSkillsMatch.toFixed(0) }}%</div>
                    </div>
                    <div class="text-center p-2 bg-green-50 rounded">
                      <div class="text-xs text-gray-600">Soft Skills</div>
                      <div class="font-semibold text-green-700">{{ match.matchDetails.softSkillsMatch.toFixed(0) }}%</div>
                    </div>
                    <div class="text-center p-2 bg-purple-50 rounded">
                      <div class="text-xs text-gray-600">Experience</div>
                      <div class="font-semibold text-purple-700">{{ match.matchDetails.experienceMatch.toFixed(0) }}%</div>
                    </div>
                    <div class="text-center p-2 bg-yellow-50 rounded">
                      <div class="text-xs text-gray-600">Salary</div>
                      <div class="font-semibold text-yellow-700">{{ match.matchDetails.salaryMatch.toFixed(0) }}%</div>
                    </div>
                    <div class="text-center p-2 bg-pink-50 rounded">
                      <div class="text-xs text-gray-600">Education</div>
                      <div class="font-semibold text-pink-700">{{ match.matchDetails.educationMatch.toFixed(0) }}%</div>
                    </div>
                  </div>

                  <div class="flex flex-wrap gap-1">
                    <span
                      v-for="skill in match.member.technicalSkills.slice(0, 5)"
                      :key="skill"
                      class="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs"
                    >
                      {{ skill }}
                    </span>
                    <span
                      v-if="match.member.technicalSkills.length > 5"
                      class="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                    >
                      +{{ match.member.technicalSkills.length - 5 }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Clear All Confirmation Modal -->
    <div
      v-if="showClearConfirm"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      @click.self="showClearConfirm = false"
    >
      <div class="bg-white rounded-lg shadow-2xl max-w-md w-full p-6">
        <h3 class="text-xl font-bold text-gray-900 mb-2">Clear All Results?</h3>
        <p class="text-gray-600 mb-6">This will permanently delete all {{ savedResults.length }} saved results. This action cannot be undone.</p>
        <div class="flex gap-3">
          <button
            @click="showClearConfirm = false"
            class="flex-1 px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded-md hover:bg-gray-300 transition"
          >
            Cancel
          </button>
          <button
            @click="handleClearAll"
            class="flex-1 px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition"
          >
            Delete All
          </button>
        </div>
      </div>
    </div>

    <!-- Delete Single Result Confirmation Modal -->
    <div
      v-if="deleteConfirmId"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      @click.self="deleteConfirmId = null"
    >
      <div class="bg-white rounded-lg shadow-2xl max-w-md w-full p-6">
        <h3 class="text-xl font-bold text-gray-900 mb-2">Delete This Result?</h3>
        <p class="text-gray-600 mb-6">This will permanently delete this saved result. This action cannot be undone.</p>
        <div class="flex gap-3">
          <button
            @click="deleteConfirmId = null"
            class="flex-1 px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded-md hover:bg-gray-300 transition"
          >
            Cancel
          </button>
          <button
            @click="handleDelete"
            class="flex-1 px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useSavedResults } from '../composables/useSavedResults';
import type { SavedResult } from '../composables/useSavedResults';

const { getSavedResults, deleteResult, clearAllResults } = useSavedResults();

const savedResults = ref<SavedResult[]>([]);
const expandedResults = ref<Set<string>>(new Set());
const showClearConfirm = ref(false);
const deleteConfirmId = ref<string | null>(null);

// Load saved results on mount
onMounted(() => {
  savedResults.value = getSavedResults();
});

// Toggle result details
const toggleDetails = (id: string) => {
  if (expandedResults.value.has(id)) {
    expandedResults.value.delete(id);
  } else {
    expandedResults.value.add(id);
  }
};

// Format date
const formatDate = (isoString: string): string => {
  const date = new Date(isoString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

// Delete single result
const deleteResultConfirm = (id: string) => {
  deleteConfirmId.value = id;
};

const handleDelete = () => {
  if (deleteConfirmId.value) {
    deleteResult(deleteConfirmId.value);
    savedResults.value = getSavedResults();
    deleteConfirmId.value = null;
  }
};

// Clear all results
const handleClearAll = () => {
  clearAllResults();
  savedResults.value = [];
  showClearConfirm.value = false;
};

// Get all technical skills from team members
const getTeamTechnicalSkills = (result: SavedResult): Set<string> => {
  const skills = new Set<string>();
  result.recommendation.team.forEach(match => {
    match.member.technicalSkills.forEach(skill => skills.add(skill));
  });
  return skills;
};

// Get all soft skills from team members
const getTeamSoftSkills = (result: SavedResult): Set<string> => {
  const skills = new Set<string>();
  result.recommendation.team.forEach(match => {
    match.member.softSkills.forEach(skill => skills.add(skill));
  });
  return skills;
};
</script>

