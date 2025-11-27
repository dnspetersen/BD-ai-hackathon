<template>
  <!-- Full Footer (Home Page) -->
  <footer v-if="variant === 'full'" class="bg-gray-900 text-gray-400 py-12">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div class="col-span-1 md:col-span-2">
            <div class="flex items-center gap-2 mb-4">
              <div class="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24">
                  <path d="M10.2894 6.45593C10.5079 6.45593 10.7126 6.46978 10.9047 6.49304C10.6037 6.75497 10.3605 7.06002 10.1674 7.39343C9.55716 8.44694 9.44959 9.77397 9.44958 10.9286V14.9608C9.2096 13.9812 8.9245 13.1401 8.57654 12.5175C7.17548 10.0105 5.06632 9.85004 2.58142 9.57996C0.264051 9.32798 0.566365 6.45602 2.83337 6.45593H10.2894Z" fill="#FDFDFD"/>
                  <circle cx="12.0683" cy="3.27272" r="2.61818" fill="white"/>
                  <circle cx="18.1773" cy="14.9455" r="1.52727" fill="white"/>
                  <path d="M10.3228 21.4278V10.9288C10.3228 8.65735 10.7772 6.4364 13.7567 6.4364L21.2306 6.43641C23.503 6.43641 23.806 9.31355 21.4831 9.56593C18.9922 9.83655 16.8781 9.99761 15.4737 12.5096C14.5142 14.2258 14.0092 17.5916 13.7062 20.9735C13.3729 24.6938 10.3228 23.3964 10.3228 21.4278Z" fill="white"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white">TeamFuse</h3>
            </div>
            <p class="text-gray-400 mb-4">
              Intelligent team selection powered by advanced AI. Build the perfect team for every project.
            </p>
          </div>
          <div>
            <h4 class="text-white font-semibold mb-4">Product</h4>
            <ul class="space-y-2">
              <li><a href="#features" class="hover:text-white transition">Features</a></li>
              <li><a href="#benefits" class="hover:text-white transition">Benefits</a></li>
              <li><NuxtLink to="/find-team" class="hover:text-white transition">Find Team</NuxtLink></li>
              <li><NuxtLink to="/saved-results" class="hover:text-white transition">Saved Results</NuxtLink></li>
              <li><NuxtLink to="/team-members" class="hover:text-white transition">Team Pool</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h4 class="text-white font-semibold mb-4">Company</h4>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-white transition">About Us</a></li>
              <li><a href="#" class="hover:text-white transition">Contact</a></li>
              <li><a href="#" class="hover:text-white transition">Privacy</a></li>
              <li><a href="#" class="hover:text-white transition">Terms</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 pt-8 text-center">
          <p>&copy; 2025 AI Team Matcher. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>

  <!-- Simple Footer (Other Pages) -->
  <footer v-else class="bg-white border-t border-gray-200 mt-16">
    <div class="container mx-auto px-4 py-6">
      <p class="text-center text-gray-600 text-sm">
        AI Team Selector - Powered by intelligent matching algorithms
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{
  variant?: 'full' | 'simple';
}>();
</script>

