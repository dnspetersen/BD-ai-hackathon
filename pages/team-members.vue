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
              Browse and manage all available team members
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
              to="/find-team"
              class="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-md hover:from-blue-600 hover:to-purple-700 transition shadow-lg"
            >
              Find Team
            </NuxtLink>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content with Sidebar -->
    <div class="flex container mx-auto px-4 py-8 gap-6">
      <!-- Left Sidebar - Add New Member -->
      <aside class="w-1/4 flex-shrink-0">
        <div class="bg-white rounded-lg shadow-lg p-6 sticky top-8">
          <h2 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
            </svg>
            Add Team Member
          </h2>
          
          <form @submit.prevent="addTeamMember" class="space-y-4">
            <!-- Name -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                v-model="newMember.name"
                type="text"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="John Doe"
              />
            </div>

            <!-- Email -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                v-model="newMember.email"
                type="email"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="john@company.com"
              />
            </div>

            <!-- Role -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Role</label>
              <input
                v-model="newMember.role"
                type="text"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Full Stack Developer"
              />
            </div>

            <!-- Technical Skills -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Technical Skills</label>
              <input
                v-model="technicalSkillsInput"
                type="text"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Vue.js, React, Node.js (comma-separated)"
              />
            </div>

            <!-- Soft Skills -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Soft Skills</label>
              <input
                v-model="softSkillsInput"
                type="text"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Leadership, Communication (comma-separated)"
              />
            </div>

            <!-- Experience Years -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Experience (years)</label>
              <input
                v-model.number="newMember.experienceYears"
                type="number"
                required
                min="0"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="5"
              />
            </div>

            <!-- Expected Salary -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Expected Salary ($)</label>
              <input
                v-model.number="newMember.expectedSalary"
                type="number"
                required
                min="0"
                step="1000"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="80000"
              />
            </div>

            <!-- Education Degree -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Degree</label>
              <input
                v-model="newMember.education.degree"
                type="text"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Bachelor of Science"
              />
            </div>

            <!-- Education Field -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Field of Study</label>
              <input
                v-model="newMember.education.field"
                type="text"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Computer Science"
              />
            </div>

            <!-- Institution -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Institution</label>
              <input
                v-model="newMember.education.institution"
                type="text"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="MIT"
              />
            </div>

            <!-- Availability -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Availability</label>
              <select
                v-model="newMember.availability"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="available">Available</option>
                <option value="limited">Limited</option>
                <option value="unavailable">Unavailable</option>
              </select>
            </div>

            <!-- Previous Projects -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Previous Projects (optional)</label>
              <input
                v-model="previousProjectsInput"
                type="text"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Project A, Project B (comma-separated)"
              />
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              class="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-md hover:from-blue-600 hover:to-purple-700 transition shadow-lg"
            >
              Add Member
            </button>

            <!-- Success Message -->
            <div v-if="showSuccessMessage" class="p-3 bg-green-50 border border-green-200 rounded-md">
              <p class="text-sm text-green-700 font-medium">✓ Member added successfully!</p>
            </div>
          </form>
        </div>
      </aside>

      <!-- Main Content - Team Members List -->
      <main class="flex-1">
        <!-- Filter and Search Bar -->
        <div class="bg-white rounded-lg shadow-md p-4 mb-6">
          <div class="flex flex-col gap-4">
            <!-- Search Bar -->
            <div class="flex items-center gap-2">
              <div class="flex-1 relative">
                <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search by name, role, email, or skills..."
                  class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <button
                v-if="hasActiveFilters"
                @click="clearFilters"
                class="px-4 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition flex items-center gap-2"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                Clear Filters
              </button>
            </div>

            <!-- Filters Row -->
            <div class="flex flex-wrap gap-3">
              <!-- Availability Filter -->
              <div class="flex-1 min-w-[200px]">
                <label class="block text-xs font-medium text-gray-700 mb-1">Availability</label>
                <select
                  v-model="filters.availability"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                >
                  <option value="all">All Statuses</option>
                  <option value="available">Available</option>
                  <option value="limited">Limited</option>
                  <option value="unavailable">Unavailable</option>
                </select>
              </div>

              <!-- Experience Level Filter -->
              <div class="flex-1 min-w-[200px]">
                <label class="block text-xs font-medium text-gray-700 mb-1">Experience Level</label>
                <select
                  v-model="filters.experienceLevel"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                >
                  <option value="all">All Levels</option>
                  <option value="junior">Junior (0-2 years)</option>
                  <option value="mid">Mid-Level (3-5 years)</option>
                  <option value="senior">Senior (6+ years)</option>
                </select>
              </div>

              <!-- Role Filter -->
              <div class="flex-1 min-w-[200px]">
                <label class="block text-xs font-medium text-gray-700 mb-1">Role</label>
                <select
                  v-model="filters.role"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                >
                  <option value="all">All Roles</option>
                  <option v-for="role in availableRoles" :key="role" :value="role">
                    {{ role }}
                  </option>
                </select>
              </div>

              <!-- Salary Range Filter -->
              <div class="flex-1 min-w-[200px]">
                <label class="block text-xs font-medium text-gray-700 mb-1">Salary Range</label>
                <select
                  v-model="filters.salaryRange"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                >
                  <option value="all">All Ranges</option>
                  <option value="0-50000">$0 - $50,000</option>
                  <option value="50000-80000">$50,000 - $80,000</option>
                  <option value="80000-100000">$80,000 - $100,000</option>
                  <option value="100000-150000">$100,000 - $150,000</option>
                  <option value="150000+">$150,000+</option>
                </select>
              </div>
            </div>

            <!-- Results Count -->
            <div class="flex items-center justify-between text-sm">
              <p class="text-gray-600">
                Showing <span class="font-semibold text-gray-900">{{ filteredMembers.length }}</span> 
                of <span class="font-semibold text-gray-900">{{ teamMembers.length }}</span> members
              </p>
              <div v-if="hasActiveFilters" class="flex items-center gap-2 text-purple-600">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
                </svg>
                <span class="font-medium">Filters active</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Team Members Display -->
        <TeamMembersView :members="filteredMembers" />
      </main>
    </div>

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
import { useSampleData } from '../composables/useSampleData';
import type { TeamMember } from '../types';

// Load sample data
const { sampleTeamMembers } = useSampleData();
const teamMembers = ref<TeamMember[]>(sampleTeamMembers);

// Form state
const showSuccessMessage = ref(false);
const technicalSkillsInput = ref('');
const softSkillsInput = ref('');
const previousProjectsInput = ref('');

// Filter and search state
const searchQuery = ref('');
const filters = ref({
  availability: 'all',
  experienceLevel: 'all',
  role: 'all',
  salaryRange: 'all'
});

const newMember = ref<TeamMember>({
  id: '',
  name: '',
  email: '',
  role: '',
  technicalSkills: [],
  softSkills: [],
  experienceYears: 0,
  expectedSalary: 0,
  education: {
    degree: '',
    field: '',
    institution: ''
  },
  availability: 'available',
  previousProjects: []
});

// Computed: Extract unique roles
const availableRoles = computed(() => {
  const roles = teamMembers.value.map(member => member.role);
  return [...new Set(roles)].sort();
});

// Computed: Check if any filters are active
const hasActiveFilters = computed(() => {
  return searchQuery.value !== '' ||
    filters.value.availability !== 'all' ||
    filters.value.experienceLevel !== 'all' ||
    filters.value.role !== 'all' ||
    filters.value.salaryRange !== 'all';
});

// Computed: Filtered members
const filteredMembers = computed(() => {
  let result = [...teamMembers.value];

  // Search filter
  if (searchQuery.value.trim() !== '') {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(member => {
      return member.name.toLowerCase().includes(query) ||
        member.role.toLowerCase().includes(query) ||
        member.email.toLowerCase().includes(query) ||
        member.technicalSkills.some(skill => skill.toLowerCase().includes(query)) ||
        member.softSkills.some(skill => skill.toLowerCase().includes(query));
    });
  }

  // Availability filter
  if (filters.value.availability !== 'all') {
    result = result.filter(member => member.availability === filters.value.availability);
  }

  // Experience level filter
  if (filters.value.experienceLevel !== 'all') {
    result = result.filter(member => {
      const years = member.experienceYears;
      switch (filters.value.experienceLevel) {
        case 'junior':
          return years >= 0 && years <= 2;
        case 'mid':
          return years >= 3 && years <= 5;
        case 'senior':
          return years >= 6;
        default:
          return true;
      }
    });
  }

  // Role filter
  if (filters.value.role !== 'all') {
    result = result.filter(member => member.role === filters.value.role);
  }

  // Salary range filter
  if (filters.value.salaryRange !== 'all') {
    result = result.filter(member => {
      const salary = member.expectedSalary;
      switch (filters.value.salaryRange) {
        case '0-50000':
          return salary >= 0 && salary <= 50000;
        case '50000-80000':
          return salary > 50000 && salary <= 80000;
        case '80000-100000':
          return salary > 80000 && salary <= 100000;
        case '100000-150000':
          return salary > 100000 && salary <= 150000;
        case '150000+':
          return salary > 150000;
        default:
          return true;
      }
    });
  }

  return result;
});

// Clear all filters
const clearFilters = () => {
  searchQuery.value = '';
  filters.value = {
    availability: 'all',
    experienceLevel: 'all',
    role: 'all',
    salaryRange: 'all'
  };
};

// Generate a unique ID
const generateId = () => {
  return (teamMembers.value.length + 1).toString();
};

// Add team member handler
const addTeamMember = () => {
  // Parse comma-separated skills
  const technicalSkills = technicalSkillsInput.value
    .split(',')
    .map(skill => skill.trim())
    .filter(skill => skill.length > 0);
  
  const softSkills = softSkillsInput.value
    .split(',')
    .map(skill => skill.trim())
    .filter(skill => skill.length > 0);
  
  const previousProjects = previousProjectsInput.value
    .split(',')
    .map(project => project.trim())
    .filter(project => project.length > 0);

  // Create new member object
  const memberToAdd: TeamMember = {
    ...newMember.value,
    id: generateId(),
    technicalSkills,
    softSkills,
    previousProjects: previousProjects.length > 0 ? previousProjects : undefined
  };

  // Add to team members
  teamMembers.value.push(memberToAdd);

  // Show success message
  showSuccessMessage.value = true;
  setTimeout(() => {
    showSuccessMessage.value = false;
  }, 3000);

  // Reset form
  newMember.value = {
    id: '',
    name: '',
    email: '',
    role: '',
    technicalSkills: [],
    softSkills: [],
    experienceYears: 0,
    expectedSalary: 0,
    education: {
      degree: '',
      field: '',
      institution: ''
    },
    availability: 'available',
    previousProjects: []
  };
  
  technicalSkillsInput.value = '';
  softSkillsInput.value = '';
  previousProjectsInput.value = '';
};
</script>

