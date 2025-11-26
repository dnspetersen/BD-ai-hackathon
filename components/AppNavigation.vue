<template>
  <nav class="bg-white shadow-md sticky top-0 z-50">
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <NuxtLink to="/" class="flex items-center gap-2 hover:opacity-80 transition">
            <div class="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <div>
              <h1 class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                TeamFuse
              </h1>
              <p v-if="subtitle" class="text-gray-600 text-xs">{{ subtitle }}</p>
            </div>
          </NuxtLink>
        </div>
        <div class="flex items-center gap-4">
          <!-- Home Link -->
          <NuxtLink
            to="/"
            class="text-gray-600 hover:text-purple-600 transition font-medium"
            :class="{ 'text-purple-600 font-semibold': currentPage === 'home' }"
          >
            Home
          </NuxtLink>
          
          <!-- Features Link (only on home page) -->
          <a
            v-if="showHomeLinks"
            href="#features"
            class="text-gray-600 hover:text-purple-600 transition font-medium"
          >
            Features
          </a>
          
          <!-- Benefits Link (only on home page) -->
          <a
            v-if="showHomeLinks"
            href="#benefits"
            class="text-gray-600 hover:text-purple-600 transition font-medium"
          >
            Benefits
          </a>
          
          <!-- Find Team Link -->
          <NuxtLink
            v-if="!showHomeLinks"
            to="/find-team"
            class="text-gray-600 hover:text-purple-600 transition font-medium"
            :class="{ 'text-purple-600 font-semibold': currentPage === 'find-team' }"
          >
            Find Team
          </NuxtLink>
          
          <!-- Team Pool Link -->
          <NuxtLink
            to="/team-members"
            class="text-gray-600 hover:text-purple-600 transition font-medium"
            :class="{ 'text-purple-600 font-semibold': currentPage === 'team-members' }"
          >
            Team Pool
          </NuxtLink>
          
          <!-- Saved Results Link -->
          <NuxtLink
            to="/saved-results"
            class="text-gray-600 hover:text-purple-600 transition font-medium"
            :class="{ 'text-purple-600 font-semibold': currentPage === 'saved-results' }"
          >
            Saved Results
          </NuxtLink>
          
          <!-- CTA Button -->
          <NuxtLink
            v-if="showHomeLinks"
            to="/find-team"
            class="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all transform hover:scale-105"
          >
            Get Started
          </NuxtLink>
          
          <!-- AI Badge (for non-home pages) -->
          <div
            v-if="!showHomeLinks"
            class="flex items-center gap-2 text-sm text-gray-600"
          >
            <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            AI Powered
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps<{
  currentPage?: 'home' | 'find-team' | 'team-members' | 'saved-results';
  subtitle?: string;
}>();

// Show home-specific links only on home page
const showHomeLinks = computed(() => props.currentPage === 'home');
</script>

