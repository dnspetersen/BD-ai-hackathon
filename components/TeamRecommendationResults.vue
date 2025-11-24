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
          <div class="text-right">
            <div class="text-2xl font-bold text-blue-600">{{ match.score.toFixed(1) }}%</div>
            <div class="text-sm text-gray-600">Match Score</div>
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
      </div>
    </div>

    <!-- Actions -->
    <div class="mt-8 flex gap-4">
      <button
        @click="$emit('new-search')"
        class="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-md hover:from-blue-600 hover:to-purple-700 transition shadow-lg"
      >
        Search Again
      </button>
      <button
        @click="exportResults"
        class="px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-md hover:bg-gray-300 transition"
      >
        Export Results
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TeamRecommendation } from '../types/index';

const props = defineProps<{
  recommendation: TeamRecommendation;
}>();

defineEmits<{
  'new-search': [];
}>();

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


