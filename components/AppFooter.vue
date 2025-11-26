<template>
  <!-- Full Footer (Home Page) -->
  <footer v-if="variant === 'full'" class="bg-gray-900 text-gray-400 py-12">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div class="col-span-1 md:col-span-2">
            <div class="flex items-center gap-2 mb-4">
              <div class="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"></div>
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

