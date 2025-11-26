<template>
  <div class="bg-white rounded-lg shadow-md p-6">
    <h2 class="text-2xl font-bold text-gray-800 mb-6">Recommended Team</h2>

    <!-- Summary Stats -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <div class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-4 text-white">
        <p class="text-sm opacity-90 mb-1">Overall Match Score</p>
        <p class="text-3xl font-bold">{{ recommendation.totalScore.toFixed(1) }}%</p>
      </div>
      <div class="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-4 text-white">
        <p class="text-sm opacity-90 mb-1">Total Cost</p>
        <p class="text-3xl font-bold">${{ (recommendation.totalCost / 1000).toFixed(0) }}K</p>
      </div>
      <div class="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-4 text-white">
        <p class="text-sm opacity-90 mb-1">Technical Coverage</p>
        <p class="text-3xl font-bold">{{ recommendation.coverageAnalysis.technicalSkillsCoverage.toFixed(0) }}%</p>
      </div>
      <div class="bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg p-4 text-white">
        <p class="text-sm opacity-90 mb-1">Soft Skills Coverage</p>
        <p class="text-3xl font-bold">{{ recommendation.coverageAnalysis.softSkillsCoverage.toFixed(0) }}%</p>
      </div>
    </div>

    <!-- Role Distribution -->
    <div class="mb-8 p-4 bg-gray-50 rounded-lg">
      <h3 class="font-semibold text-gray-800 mb-3">Team Composition</h3>
      <div class="flex flex-wrap gap-3">
        <div
          v-for="(count, role) in recommendation.coverageAnalysis.roleDistribution"
          :key="role"
          class="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm"
        >
          <span class="text-sm font-medium text-gray-700">{{ role }}</span>
          <span class="px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
            {{ count }}
          </span>
        </div>
      </div>
    </div>

    <!-- Pros and Cons Analysis -->
    <div class="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Pros -->
      <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-5 border-2 border-green-200">
        <div class="flex items-center gap-2 mb-4">
          <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 class="font-bold text-green-900">Strengths</h3>
        </div>
        <ul class="space-y-2">
          <li
            v-for="(pro, index) in recommendation.pros"
            :key="index"
            class="flex items-start gap-2 text-sm text-green-800"
          >
            <svg class="w-4 h-4 mt-0.5 flex-shrink-0 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
            <span>{{ pro }}</span>
          </li>
        </ul>
      </div>

      <!-- Cons -->
      <div class="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-5 border-2 border-orange-200">
        <div class="flex items-center gap-2 mb-4">
          <div class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
            </svg>
          </div>
          <h3 class="font-bold text-orange-900">Considerations</h3>
        </div>
        <ul class="space-y-2">
          <li
            v-for="(con, index) in recommendation.cons"
            :key="index"
            class="flex items-start gap-2 text-sm text-orange-800"
          >
            <svg class="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
            </svg>
            <span>{{ con }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Team Members -->
    <div class="space-y-4">
      <h3 class="font-semibold text-gray-800 mb-4">Team Members</h3>
      <div
        v-for="(match, index) in recommendation.team"
        :key="match.member.id"
        class="border-2 border-gray-200 rounded-lg p-5 hover:border-blue-300 transition"
      >
        <div class="flex items-start justify-between mb-4">
          <div class="flex items-center gap-3">
            <div
              class="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg"
            >
              {{ index + 1 }}
            </div>
            <div>
              <h4 class="font-bold text-lg text-gray-800">{{ match.member.name }}</h4>
              <p class="text-sm text-gray-600">{{ match.member.role }}</p>
              <p class="text-xs text-gray-500">{{ match.member.email }}</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <div class="text-right">
              <div class="text-2xl font-bold text-blue-600">{{ match.score.toFixed(1) }}%</div>
              <div class="text-sm text-gray-600">Match Score</div>
            </div>
            <button
              v-if="allMembers && allMembers.length > 0"
              @click="toggleAlternatives(index)"
              class="px-3 py-2 bg-purple-100 text-purple-700 font-medium rounded-lg hover:bg-purple-200 transition flex items-center gap-2"
              :class="{ 'bg-purple-200': showingAlternativesFor === index }"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
              </svg>
              {{ showingAlternativesFor === index ? 'Hide' : 'Change' }}
            </button>
          </div>
        </div>

        <!-- Match Details -->
        <div class="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
          <div class="text-center p-2 bg-blue-50 rounded">
            <div class="text-xs text-gray-600 mb-1">Technical</div>
            <div class="font-semibold text-blue-700">
              {{ match.matchDetails.technicalSkillsMatch.toFixed(0) }}%
            </div>
          </div>
          <div class="text-center p-2 bg-green-50 rounded">
            <div class="text-xs text-gray-600 mb-1">Soft Skills</div>
            <div class="font-semibold text-green-700">
              {{ match.matchDetails.softSkillsMatch.toFixed(0) }}%
            </div>
          </div>
          <div class="text-center p-2 bg-purple-50 rounded">
            <div class="text-xs text-gray-600 mb-1">Experience</div>
            <div class="font-semibold text-purple-700">
              {{ match.matchDetails.experienceMatch.toFixed(0) }}%
            </div>
          </div>
          <div class="text-center p-2 bg-yellow-50 rounded">
            <div class="text-xs text-gray-600 mb-1">Salary</div>
            <div class="font-semibold text-yellow-700">
              {{ match.matchDetails.salaryMatch.toFixed(0) }}%
            </div>
          </div>
          <div class="text-center p-2 bg-pink-50 rounded">
            <div class="text-xs text-gray-600 mb-1">Education</div>
            <div class="font-semibold text-pink-700">
              {{ match.matchDetails.educationMatch.toFixed(0) }}%
            </div>
          </div>
        </div>

        <!-- Member Details -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
          <div>
            <p class="text-xs font-medium text-gray-600 mb-1">Experience & Salary</p>
            <p class="text-sm text-gray-800">
              {{ match.member.experienceYears }} years • ${{ match.member.expectedSalary.toLocaleString() }}/year
            </p>
          </div>
          <div>
            <p class="text-xs font-medium text-gray-600 mb-1">Education</p>
            <p class="text-sm text-gray-800">
              {{ match.member.education.degree }} in {{ match.member.education.field }}
            </p>
          </div>
        </div>

        <div class="space-y-2 mb-3">
          <div>
            <p class="text-xs font-medium text-gray-600 mb-1">Technical Skills</p>
            <div class="flex flex-wrap gap-1">
              <span
                v-for="skill in match.member.technicalSkills"
                :key="skill"
                class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs"
              >
                {{ skill }}
              </span>
            </div>
          </div>
          <div>
            <p class="text-xs font-medium text-gray-600 mb-1">Soft Skills</p>
            <div class="flex flex-wrap gap-1">
              <span
                v-for="skill in match.member.softSkills"
                :key="skill"
                class="px-2 py-1 bg-green-100 text-green-800 rounded text-xs"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>

        <!-- AI Reasoning -->
        <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3 border border-blue-100">
          <p class="text-xs font-medium text-gray-700 mb-1">🤖 AI Analysis</p>
          <p class="text-sm text-gray-700">{{ match.reasoning }}</p>
        </div>

        <!-- Alternatives Section -->
        <div v-if="showingAlternativesFor === index" class="mt-4 border-t-2 border-purple-200 pt-4 bg-purple-50 -mx-5 -mb-5 px-5 pb-5 rounded-b-lg">
          <div class="mb-3">
            <div class="flex items-center justify-between mb-2">
              <h5 class="font-semibold text-gray-800 flex items-center gap-2">
                <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                </svg>
                Alternative Team Members
              </h5>
              <span class="text-xs text-gray-500 bg-white px-2 py-1 rounded">{{ getAlternatives(match).length }} available</span>
            </div>
            <p class="text-xs text-gray-600 bg-purple-100 px-3 py-2 rounded-lg">
              💡 Click any alternative to swap. Green indicates better match, orange indicates lower match than current.
            </p>
          </div>
          
          <div v-if="getAlternatives(match).length === 0" class="text-center py-6 text-gray-500">
            <p class="text-sm">No alternative members available for this role</p>
          </div>

          <div v-else class="space-y-2 max-h-96 overflow-y-auto pr-2">
            <div
              v-for="alt in getAlternatives(match)"
              :key="alt.member.id"
              class="border-2 border-gray-200 rounded-lg p-3 hover:border-purple-400 hover:bg-white hover:shadow-md transition-all cursor-pointer bg-white"
              @click="replaceMember(index, alt)"
            >
              <div class="flex items-start justify-between mb-2">
                <div class="flex-1">
                  <div class="flex items-center gap-2 mb-1">
                    <h6 class="font-semibold text-gray-800">{{ alt.member.name }}</h6>
                    <span
                      :class="[
                        'px-2 py-0.5 text-xs rounded-full',
                        alt.member.availability === 'available' ? 'bg-green-100 text-green-800' :
                        alt.member.availability === 'limited' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      ]"
                    >
                      {{ alt.member.availability }}
                    </span>
                  </div>
                  <p class="text-xs text-gray-600">{{ alt.member.role }}</p>
                  <p class="text-xs text-gray-500">
                    {{ alt.member.experienceYears }} years • ${{ alt.member.expectedSalary.toLocaleString() }}
                  </p>
                </div>
                <div class="text-right ml-4">
                  <div class="text-xl font-bold" :class="getScoreColor(alt.score, match.score)">
                    {{ alt.score.toFixed(1) }}%
                  </div>
                  <div class="text-xs" :class="getScoreDiffClass(alt.score, match.score)">
                    {{ getScoreDiff(alt.score, match.score) }}
                  </div>
                </div>
              </div>

              <!-- Quick Comparison -->
              <div class="grid grid-cols-5 gap-1 mt-2">
                <div class="text-center p-1 bg-blue-50 rounded">
                  <div class="text-xs text-gray-600">Tech</div>
                  <div class="text-xs font-semibold" :class="getComparisonColor(alt.matchDetails.technicalSkillsMatch, match.matchDetails.technicalSkillsMatch)">
                    {{ alt.matchDetails.technicalSkillsMatch.toFixed(0) }}%
                  </div>
                </div>
                <div class="text-center p-1 bg-green-50 rounded">
                  <div class="text-xs text-gray-600">Soft</div>
                  <div class="text-xs font-semibold" :class="getComparisonColor(alt.matchDetails.softSkillsMatch, match.matchDetails.softSkillsMatch)">
                    {{ alt.matchDetails.softSkillsMatch.toFixed(0) }}%
                  </div>
                </div>
                <div class="text-center p-1 bg-purple-50 rounded">
                  <div class="text-xs text-gray-600">Exp</div>
                  <div class="text-xs font-semibold" :class="getComparisonColor(alt.matchDetails.experienceMatch, match.matchDetails.experienceMatch)">
                    {{ alt.matchDetails.experienceMatch.toFixed(0) }}%
                  </div>
                </div>
                <div class="text-center p-1 bg-yellow-50 rounded">
                  <div class="text-xs text-gray-600">Sal</div>
                  <div class="text-xs font-semibold" :class="getComparisonColor(alt.matchDetails.salaryMatch, match.matchDetails.salaryMatch)">
                    {{ alt.matchDetails.salaryMatch.toFixed(0) }}%
                  </div>
                </div>
                <div class="text-center p-1 bg-pink-50 rounded">
                  <div class="text-xs text-gray-600">Edu</div>
                  <div class="text-xs font-semibold" :class="getComparisonColor(alt.matchDetails.educationMatch, match.matchDetails.educationMatch)">
                    {{ alt.matchDetails.educationMatch.toFixed(0) }}%
                  </div>
                </div>
              </div>

              <!-- Skills Preview -->
              <div class="mt-2 flex flex-wrap gap-1">
                <span
                  v-for="skill in alt.member.technicalSkills.slice(0, 3)"
                  :key="skill"
                  class="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs"
                >
                  {{ skill }}
                </span>
                <span
                  v-if="alt.member.technicalSkills.length > 3"
                  class="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs"
                >
                  +{{ alt.member.technicalSkills.length - 3 }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Actions -->
    <div class="mt-8 flex flex-col sm:flex-row gap-4">
      <button
        @click="$emit('new-search')"
        class="flex-1 px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-md hover:bg-gray-300 transition"
      >
        🔄 Start New Search
      </button>
      <button
        v-if="requirements"
        @click="handleSaveResult"
        class="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-md hover:from-green-600 hover:to-emerald-700 transition shadow-lg flex items-center justify-center gap-2"
        :disabled="saveLoading"
      >
        <svg v-if="!saveLoading" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <svg v-else class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        {{ saveLoading ? 'Saving...' : savedMessage || 'Save Result' }}
      </button>
      <button
        @click="exportResults"
        class="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-md hover:from-blue-600 hover:to-purple-700 transition shadow-lg"
      >
        📥 Export JSON
      </button>
    </div>

    <!-- Save Success Message -->
    <div v-if="savedMessage" class="mt-4 p-4 bg-green-50 border-2 border-green-200 rounded-lg flex items-center justify-between">
      <div class="flex items-center gap-3">
        <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <div>
          <p class="font-semibold text-green-800">Result saved successfully!</p>
          <p class="text-sm text-green-700">You can view all saved results from the navigation menu.</p>
        </div>
      </div>
      <NuxtLink
        to="/saved-results"
        class="px-4 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition"
      >
        View Saved Results
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { TeamRecommendation, TeamMember, ProjectRequirements, TeamMatch } from '../types/index';
import { useTeamMatcher } from '../composables/useTeamMatcher';
import { useSavedResults } from '../composables/useSavedResults';

const props = defineProps<{
  recommendation: TeamRecommendation;
  allMembers?: TeamMember[];
  requirements?: ProjectRequirements;
}>();

const emit = defineEmits<{
  'new-search': [];
  'update-recommendation': [recommendation: TeamRecommendation];
}>();

// State for alternatives
const showingAlternativesFor = ref<number | null>(null);
const { calculateMemberMatch } = useTeamMatcher();
const { saveResult } = useSavedResults();

// State for saving
const saveLoading = ref(false);
const savedMessage = ref('');

// Toggle alternatives view
const toggleAlternatives = (index: number) => {
  showingAlternativesFor.value = showingAlternativesFor.value === index ? null : index;
};

// Get alternative members for a specific position
const getAlternatives = (currentMatch: TeamMatch): TeamMatch[] => {
  if (!props.allMembers || !props.requirements) return [];

  // Get IDs of current team members
  const currentTeamIds = props.recommendation.team.map(m => m.member.id);
  
  // Filter out current team members and get alternatives from the same role
  const alternatives = props.allMembers
    .filter(member => 
      !currentTeamIds.includes(member.id) && 
      member.role === currentMatch.member.role
    )
    .map(member => calculateMemberMatch(member, props.requirements!))
    .sort((a, b) => b.score - a.score)
    .slice(0, 5); // Show top 5 alternatives

  return alternatives;
};

// Replace a team member
const replaceMember = (index: number, newMatch: TeamMatch) => {
  const newTeam = [...props.recommendation.team];
  newTeam[index] = newMatch;

  // Recalculate team statistics
  const totalScore = newTeam.reduce((sum, match) => sum + match.score, 0) / newTeam.length;
  const totalCost = newTeam.reduce((sum, match) => sum + match.member.expectedSalary, 0);

  // Recalculate coverage
  const allTechnicalSkills = new Set<string>();
  const allSoftSkills = new Set<string>();
  const roleDistribution: Record<string, number> = {};

  newTeam.forEach(match => {
    match.member.technicalSkills.forEach(skill => allTechnicalSkills.add(skill));
    match.member.softSkills.forEach(skill => allSoftSkills.add(skill));
    roleDistribution[match.member.role] = (roleDistribution[match.member.role] || 0) + 1;
  });

  const requiredTechSkills = props.requirements?.requiredTechnicalSkills || [];
  const requiredSoftSkills = props.requirements?.requiredSoftSkills || [];

  const techCoverage = requiredTechSkills.length > 0
    ? (requiredTechSkills.filter(skill => allTechnicalSkills.has(skill)).length / requiredTechSkills.length) * 100
    : 0;

  const softCoverage = requiredSoftSkills.length > 0
    ? (requiredSoftSkills.filter(skill => allSoftSkills.has(skill)).length / requiredSoftSkills.length) * 100
    : 0;

  // Generate pros and cons
  const pros: string[] = [];
  const cons: string[] = [];
  
  if (!props.requirements) {
    pros.push('Team updated successfully');
  } else {
    const req = props.requirements;
    
    // Pros analysis
    if (totalScore >= 90) {
      pros.push('Exceptional overall team match score');
    } else if (totalScore >= 80) {
      pros.push('Strong overall team match score');
    }
    
    if (techCoverage === 100) {
      pros.push('Complete coverage of all required technical skills');
    } else if (techCoverage >= 80) {
      pros.push('Excellent technical skills coverage');
    }
    
    if (softCoverage === 100) {
      pros.push('Complete coverage of all required soft skills');
    } else if (softCoverage >= 80) {
      pros.push('Strong soft skills coverage');
    }
    
    if (totalCost <= req.maxBudget * 0.85) {
      const savings = req.maxBudget - totalCost;
      pros.push(`Well under budget with $${(savings / 1000).toFixed(0)}K savings`);
    } else if (totalCost <= req.maxBudget) {
      pros.push('Within project budget');
    }
    
    const avgExperience = newTeam.reduce((sum, m) => sum + m.member.experienceYears, 0) / newTeam.length;
    if (avgExperience >= req.minExperienceYears + 3) {
      pros.push(`Highly experienced team (avg ${avgExperience.toFixed(1)} years)`);
    } else if (avgExperience >= req.minExperienceYears + 1) {
      pros.push(`Experienced team (avg ${avgExperience.toFixed(1)} years)`);
    }
    
    if (Object.keys(roleDistribution).length >= Math.min(req.teamSize, 4)) {
      pros.push('Diverse role distribution for balanced team dynamics');
    }
    
    const allAvailable = newTeam.every(m => m.member.availability === 'available');
    if (allAvailable) {
      pros.push('All team members are immediately available');
    }
    
    // Cons analysis
    if (totalScore < 70) {
      cons.push('Overall match score below ideal threshold');
    }
    
    if (techCoverage < 100) {
      const missing = requiredTechSkills.filter(skill => !allTechnicalSkills.has(skill));
      if (missing.length > 0) {
        cons.push(`Missing technical skills: ${missing.slice(0, 3).join(', ')}${missing.length > 3 ? '...' : ''}`);
      }
    }
    
    if (softCoverage < 100) {
      const missing = requiredSoftSkills.filter(skill => !allSoftSkills.has(skill));
      if (missing.length > 0) {
        cons.push(`Missing soft skills: ${missing.slice(0, 3).join(', ')}${missing.length > 3 ? '...' : ''}`);
      }
    }
    
    if (totalCost > req.maxBudget) {
      const overage = totalCost - req.maxBudget;
      cons.push(`Over budget by $${(overage / 1000).toFixed(0)}K (${((overage / req.maxBudget) * 100).toFixed(1)}%)`);
    } else if (totalCost > req.maxBudget * 0.95) {
      cons.push('Very close to maximum budget with limited flexibility');
    }
    
    if (avgExperience < req.minExperienceYears) {
      cons.push(`Team experience below requirement (avg ${avgExperience.toFixed(1)} vs ${req.minExperienceYears} years needed)`);
    }
    
    const limitedAvailability = newTeam.filter(m => m.member.availability === 'limited');
    if (limitedAvailability.length > 0) {
      cons.push(`${limitedAvailability.length} team member${limitedAvailability.length > 1 ? 's' : ''} with limited availability`);
    }
    
    const unavailable = newTeam.filter(m => m.member.availability === 'unavailable');
    if (unavailable.length > 0) {
      cons.push(`${unavailable.length} team member${unavailable.length > 1 ? 's are' : ' is'} currently unavailable`);
    }
    
    if (Object.keys(roleDistribution).length < 3 && req.teamSize >= 4) {
      cons.push('Limited role diversity may create bottlenecks');
    }
    
    const lowScorers = newTeam.filter(m => m.score < 70);
    if (lowScorers.length > 0) {
      cons.push(`${lowScorers.length} team member${lowScorers.length > 1 ? 's have' : ' has'} below-average match scores`);
    }
    
    if (pros.length === 0) {
      pros.push('Team meets basic project requirements');
    }
    
    if (cons.length === 0) {
      cons.push('No significant concerns identified');
    }
  }

  const newRecommendation: TeamRecommendation = {
    team: newTeam,
    totalScore,
    totalCost,
    coverageAnalysis: {
      technicalSkillsCoverage: techCoverage,
      softSkillsCoverage: softCoverage,
      roleDistribution
    },
    pros,
    cons
  };

  emit('update-recommendation', newRecommendation);
  showingAlternativesFor.value = null;
};

// Get score color based on comparison
const getScoreColor = (altScore: number, currentScore: number) => {
  if (altScore > currentScore) return 'text-green-600';
  if (altScore < currentScore) return 'text-orange-600';
  return 'text-gray-600';
};

// Get score difference text
const getScoreDiff = (altScore: number, currentScore: number) => {
  const diff = altScore - currentScore;
  if (diff > 0) return `+${diff.toFixed(1)}%`;
  if (diff < 0) return `${diff.toFixed(1)}%`;
  return 'Same';
};

// Get score difference class
const getScoreDiffClass = (altScore: number, currentScore: number) => {
  if (altScore > currentScore) return 'text-green-600 font-medium';
  if (altScore < currentScore) return 'text-orange-600 font-medium';
  return 'text-gray-500';
};

// Get comparison color for individual metrics
const getComparisonColor = (altValue: number, currentValue: number) => {
  if (altValue > currentValue) return 'text-green-600';
  if (altValue < currentValue) return 'text-orange-600';
  return 'text-gray-700';
};

// Save result to localStorage
const handleSaveResult = async () => {
  if (!props.requirements) return;
  
  saveLoading.value = true;
  savedMessage.value = '';
  
  try {
    await new Promise(resolve => setTimeout(resolve, 500)); // Brief delay for UX
    saveResult(props.requirements, props.recommendation);
    savedMessage.value = '✓ Saved';
    
    // Reset message after 3 seconds
    setTimeout(() => {
      savedMessage.value = '';
    }, 3000);
  } catch (error) {
    console.error('Error saving result:', error);
    alert('Failed to save result. Please try again.');
  } finally {
    saveLoading.value = false;
  }
};

const exportResults = () => {
  const data = {
    recommendation: props.recommendation,
    exportedAt: new Date().toISOString()
  };
  
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `team-recommendation-${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(url);
};
</script>


