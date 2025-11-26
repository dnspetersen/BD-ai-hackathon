<template>
  <div v-if="isDev" class="fixed bottom-4 right-4 z-50">
    <div class="bg-gray-800 text-white rounded-lg shadow-2xl p-4 max-w-sm">
      <div class="flex items-center justify-between mb-3">
        <h3 class="text-sm font-bold flex items-center gap-2">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
          </svg>
          Dev Tools
        </h3>
        <button
          @click="isOpen = !isOpen"
          class="text-gray-400 hover:text-white transition"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              :d="isOpen ? 'M19 9l-7 7-7-7' : 'M5 15l7-7 7 7'"
            ></path>
          </svg>
        </button>
      </div>

      <div v-if="isOpen" class="space-y-2">
        <button
          @click="loadSamples"
          :disabled="loading"
          class="w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 rounded-md text-sm font-medium transition flex items-center justify-center gap-2"
        >
          <svg v-if="!loading" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
          </svg>
          <svg v-else class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {{ loading ? 'Loading...' : 'Load Sample Data' }}
        </button>

        <button
          @click="clearSamples"
          :disabled="loading"
          class="w-full px-3 py-2 bg-red-600 hover:bg-red-700 disabled:bg-red-400 rounded-md text-sm font-medium transition flex items-center justify-center gap-2"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
          </svg>
          Clear Sample Data
        </button>

        <div v-if="message" class="text-xs p-2 rounded" :class="messageClass">
          {{ message }}
        </div>

        <div class="pt-2 border-t border-gray-700 text-xs text-gray-400">
          <p>Current saved results: {{ resultsCount }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { loadSampleData, clearSampleData } from '../data/sampleSavedResults';
import { useSavedResults } from '../composables/useSavedResults';

const isDev = ref(false);
const isOpen = ref(true);
const loading = ref(false);
const message = ref('');
const resultsCount = ref(0);

const { getSavedResults } = useSavedResults();

// Check if we're in development mode
onMounted(() => {
  isDev.value = process.env.NODE_ENV === 'development' || window.location.hostname === 'localhost';
  updateResultsCount();
});

const messageClass = computed(() => {
  if (message.value.includes('successfully') || message.value.includes('cleared')) {
    return 'bg-green-900 text-green-200';
  }
  if (message.value.includes('Error') || message.value.includes('Failed')) {
    return 'bg-red-900 text-red-200';
  }
  return 'bg-blue-900 text-blue-200';
});

const updateResultsCount = () => {
  resultsCount.value = getSavedResults().length;
};

const loadSamples = async () => {
  loading.value = true;
  message.value = '';
  
  try {
    await new Promise(resolve => setTimeout(resolve, 500)); // Brief delay for UX
    const success = loadSampleData();
    if (success) {
      message.value = '✓ Sample data loaded successfully!';
      updateResultsCount();
      
      // Clear message after 3 seconds
      setTimeout(() => {
        message.value = '';
      }, 3000);
    } else {
      message.value = '✗ Failed to load sample data';
    }
  } catch (error) {
    console.error('Error:', error);
    message.value = '✗ Error loading sample data';
  } finally {
    loading.value = false;
  }
};

const clearSamples = async () => {
  loading.value = true;
  message.value = '';
  
  try {
    await new Promise(resolve => setTimeout(resolve, 300));
    const success = clearSampleData();
    if (success) {
      message.value = '✓ Sample data cleared!';
      updateResultsCount();
      
      setTimeout(() => {
        message.value = '';
      }, 3000);
    } else {
      message.value = '✗ Failed to clear sample data';
    }
  } catch (error) {
    console.error('Error:', error);
    message.value = '✗ Error clearing sample data';
  } finally {
    loading.value = false;
  }
};
</script>

