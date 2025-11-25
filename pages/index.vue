<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-md sticky top-0 z-50">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h1 class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Team Matcher
            </h1>
          </div>
          <div class="flex items-center gap-4">
            <a href="#features" class="text-gray-600 hover:text-purple-600 transition font-medium">Features</a>
            <a href="#benefits" class="text-gray-600 hover:text-purple-600 transition font-medium">Benefits</a>
            <NuxtLink
              to="/saved-results"
              class="text-gray-600 hover:text-purple-600 transition font-medium"
            >
              Saved Results
            </NuxtLink>
            <NuxtLink
              to="/find-team"
              class="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all transform hover:scale-105"
            >
              Get Started
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="container mx-auto px-4 py-20">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md">
              <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span class="text-sm font-medium text-gray-700">AI-Powered Team Selection</span>
            </div>
            
            <h1 class="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Build Your 
              <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Dream Team
              </span> 
              with AI
            </h1>
            
            <p class="text-xl text-gray-600 leading-relaxed">
              Transform your hiring process with intelligent team matching. Our AI analyzes skills, experience, and budget to recommend the perfect team for your next project.
            </p>
            
            <div class="flex gap-4 pt-4">
              <NuxtLink
                to="/find-team"
                class="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-2xl transition-all transform hover:scale-105 flex items-center gap-2"
              >
                Start Matching
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </NuxtLink>
              <NuxtLink
                to="/team-members"
                class="px-8 py-4 bg-white text-gray-700 font-semibold rounded-lg hover:shadow-lg transition-all border-2 border-gray-200"
              >
                View Team Pool
              </NuxtLink>
            </div>

            <div class="flex items-center gap-8 pt-4">
              <div class="text-center">
                <p class="text-3xl font-bold text-purple-600">95%</p>
                <p class="text-sm text-gray-600">Match Accuracy</p>
              </div>
              <div class="text-center">
                <p class="text-3xl font-bold text-blue-600">70%</p>
                <p class="text-sm text-gray-600">Time Saved</p>
              </div>
              <div class="text-center">
                <p class="text-3xl font-bold text-pink-600">50+</p>
                <p class="text-sm text-gray-600">Data Points</p>
              </div>
            </div>
          </div>

          <div class="relative">
            <div class="bg-white rounded-2xl shadow-2xl p-8">
              <div class="space-y-4">
                <div class="flex items-center gap-3 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                  <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div>
                    <p class="font-semibold text-gray-800">Skill Matching</p>
                    <p class="text-sm text-gray-600">AI-powered technical & soft skill analysis</p>
                  </div>
                </div>
                
                <div class="flex items-center gap-3 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-600">
                  <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                  </svg>
                  <div>
                    <p class="font-semibold text-gray-800">Budget Optimization</p>
                    <p class="text-sm text-gray-600">Stay within budget while maximizing talent</p>
                  </div>
                </div>
                
                <div class="flex items-center gap-3 p-4 bg-green-50 rounded-lg border-l-4 border-green-600">
                  <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                  <div>
                    <p class="font-semibold text-gray-800">Instant Results</p>
                    <p class="text-sm text-gray-600">Get recommendations in seconds</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-2xl"></div>
            <div class="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="bg-white py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p class="text-xl text-gray-600">
              Three simple steps to find your perfect team
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-xl transition">
              <div class="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-3xl text-white font-bold">1</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Define Requirements</h3>
              <p class="text-gray-600">
                Enter your project details, required skills, budget, and team size. Our intuitive form guides you through every step.
              </p>
            </div>

            <div class="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-xl transition">
              <div class="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-3xl text-white font-bold">2</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">AI Analysis</h3>
              <p class="text-gray-600">
                Our advanced AI analyzes over 50 data points, matching skills, experience, availability, and budget constraints.
              </p>
            </div>

            <div class="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-blue-50 hover:shadow-xl transition">
              <div class="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-3xl text-white font-bold">3</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-3">Get Recommendations</h3>
              <p class="text-gray-600">
                Receive detailed team recommendations with match scores, skill coverage, and total cost breakdowns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section id="benefits" class="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-gray-900 mb-4">
              Benefits for Your Organization
            </h2>
            <p class="text-xl text-gray-600">
              Empowering recruiters and executives with intelligent insights
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- For Recruiters -->
            <div class="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-900">For Recruiters</h3>
              </div>

              <ul class="space-y-4">
                <li class="flex gap-3">
                  <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <p class="font-semibold text-gray-900">70% Faster Screening</p>
                    <p class="text-gray-600 text-sm">Reduce manual screening time from days to minutes with automated candidate matching</p>
                  </div>
                </li>
                <li class="flex gap-3">
                  <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <p class="font-semibold text-gray-900">Data-Driven Decisions</p>
                    <p class="text-gray-600 text-sm">Back your recommendations with objective scoring across technical skills, soft skills, and experience</p>
                  </div>
                </li>
                <li class="flex gap-3">
                  <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <p class="font-semibold text-gray-900">Improved Candidate Quality</p>
                    <p class="text-gray-600 text-sm">Ensure every candidate meets precise project requirements with multi-dimensional matching</p>
                  </div>
                </li>
                <li class="flex gap-3">
                  <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <p class="font-semibold text-gray-900">Bias Reduction</p>
                    <p class="text-gray-600 text-sm">Focus on skills and qualifications, minimizing unconscious bias in the selection process</p>
                  </div>
                </li>
                <li class="flex gap-3">
                  <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <p class="font-semibold text-gray-900">Real-Time Availability</p>
                    <p class="text-gray-600 text-sm">Instantly see which team members are available and ready for your project</p>
                  </div>
                </li>
              </ul>
            </div>

            <!-- For C-Level -->
            <div class="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-900">For C-Level Executives</h3>
              </div>

              <ul class="space-y-4">
                <li class="flex gap-3">
                  <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <p class="font-semibold text-gray-900">Strategic Resource Allocation</p>
                    <p class="text-gray-600 text-sm">Optimize your talent pool across multiple projects with intelligent budget forecasting</p>
                  </div>
                </li>
                <li class="flex gap-3">
                  <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <p class="font-semibold text-gray-900">Cost Efficiency</p>
                    <p class="text-gray-600 text-sm">Ensure every hire fits your budget while meeting quality standards and project goals</p>
                  </div>
                </li>
                <li class="flex gap-3">
                  <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <p class="font-semibold text-gray-900">Risk Mitigation</p>
                    <p class="text-gray-600 text-sm">Reduce project failure risk with validated skill coverage and experience verification</p>
                  </div>
                </li>
                <li class="flex gap-3">
                  <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <p class="font-semibold text-gray-900">Competitive Advantage</p>
                    <p class="text-gray-600 text-sm">Deploy teams faster than competitors with streamlined selection processes</p>
                  </div>
                </li>
                <li class="flex gap-3">
                  <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <p class="font-semibold text-gray-900">Transparent Reporting</p>
                    <p class="text-gray-600 text-sm">Access detailed analytics on skill coverage, cost breakdowns, and team composition</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Team Building Process?
          </h2>
          <p class="text-xl text-blue-100 mb-8">
            Join forward-thinking companies using AI to build better teams faster
          </p>
          <div class="flex gap-4 justify-center">
            <NuxtLink
              to="/find-team"
              class="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:shadow-2xl transition-all transform hover:scale-105 flex items-center gap-2"
            >
              Start Building Your Team
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </NuxtLink>
            <NuxtLink
              to="/team-members"
              class="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-all"
            >
              Explore Team Pool
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-gray-400 py-12">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div class="col-span-1 md:col-span-2">
              <div class="flex items-center gap-2 mb-4">
                <div class="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"></div>
                <h3 class="text-xl font-bold text-white">AI Team Matcher</h3>
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
  </div>
</template>

<script setup lang="ts">
// Home page - no additional logic needed
</script>

<style scoped>
/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}
</style>
