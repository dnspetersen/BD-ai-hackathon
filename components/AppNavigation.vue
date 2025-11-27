<template>
  <nav class="bg-white shadow-md sticky top-0 z-50">
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <NuxtLink to="/" class="flex items-center gap-2 hover:opacity-80 transition">
            <div class="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24">
                <path d="M10.2894 6.45593C10.5079 6.45593 10.7126 6.46978 10.9047 6.49304C10.6037 6.75497 10.3605 7.06002 10.1674 7.39343C9.55716 8.44694 9.44959 9.77397 9.44958 10.9286V14.9608C9.2096 13.9812 8.9245 13.1401 8.57654 12.5175C7.17548 10.0105 5.06632 9.85004 2.58142 9.57996C0.264051 9.32798 0.566365 6.45602 2.83337 6.45593H10.2894Z" fill="#FDFDFD"/>
                <circle cx="12.0683" cy="3.27272" r="2.61818" fill="white"/>
                <circle cx="18.1773" cy="14.9455" r="1.52727" fill="white"/>
                <path d="M10.3228 21.4278V10.9288C10.3228 8.65735 10.7772 6.4364 13.7567 6.4364L21.2306 6.43641C23.503 6.43641 23.806 9.31355 21.4831 9.56593C18.9922 9.83655 16.8781 9.99761 15.4737 12.5096C14.5142 14.2258 14.0092 17.5916 13.7062 20.9735C13.3729 24.6938 10.3228 23.3964 10.3228 21.4278Z" fill="white"/>
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

