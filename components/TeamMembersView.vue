<template>
  <div class="bg-white rounded-lg shadow-md p-6">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold text-gray-800">Available Team Members</h2>
      <span class="text-sm text-gray-600">{{ members.length }} members</span>
    </div>

    <!-- Empty State -->
    <div v-if="members.length === 0" class="py-16 text-center">
      <svg class="w-20 h-20 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
      </svg>
      <h3 class="text-xl font-semibold text-gray-700 mb-2">No team members found</h3>
      <p class="text-gray-500">Try adjusting your search or filter criteria</p>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="member in members"
        :key="member.id"
        class="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition"
      >
        <div class="flex items-start justify-between mb-3">
          <div>
            <h3 class="font-semibold text-lg text-gray-800">{{ member.name }}</h3>
            <p class="text-sm text-gray-600">{{ member.role }}</p>
          </div>
          <span
            :class="[
              'px-2 py-1 text-xs rounded-full',
              member.availability === 'available' ? 'bg-green-100 text-green-800' :
              member.availability === 'limited' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            ]"
          >
            {{ member.availability }}
          </span>
        </div>

        <div class="space-y-2 text-sm">
          <div class="flex items-center gap-2">
            <span class="font-medium text-gray-700">Experience:</span>
            <span class="text-gray-600">{{ member.experienceYears }} years</span>
          </div>

          <div class="flex items-center gap-2">
            <span class="font-medium text-gray-700">Salary:</span>
            <span class="text-gray-600">${{ member.expectedSalary.toLocaleString() }}</span>
          </div>

          <div>
            <p class="font-medium text-gray-700 mb-1">Education:</p>
            <p class="text-xs text-gray-600">
              {{ member.education.degree }} in {{ member.education.field }}
            </p>
            <p class="text-xs text-gray-500">{{ member.education.institution }}</p>
          </div>

          <div>
            <p class="font-medium text-gray-700 mb-1">Technical Skills:</p>
            <div class="flex flex-wrap gap-1">
              <span
                v-for="skill in member.technicalSkills.slice(0, 4)"
                :key="skill"
                class="px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-xs"
              >
                {{ skill }}
              </span>
              <span
                v-if="member.technicalSkills.length > 4"
                class="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs"
              >
                +{{ member.technicalSkills.length - 4 }}
              </span>
            </div>
          </div>

          <div>
            <p class="font-medium text-gray-700 mb-1">Soft Skills:</p>
            <div class="flex flex-wrap gap-1">
              <span
                v-for="skill in member.softSkills.slice(0, 3)"
                :key="skill"
                class="px-2 py-0.5 bg-green-50 text-green-700 rounded text-xs"
              >
                {{ skill }}
              </span>
              <span
                v-if="member.softSkills.length > 3"
                class="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs"
              >
                +{{ member.softSkills.length - 3 }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TeamMember } from '../types/index';

defineProps<{
  members: TeamMember[];
}>();
</script>


