<template>
    <nav class="bg-white text-black shadow-md shadow-black mb-1 fixed top-0 w-full z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex items-center space-x-2">
            <img
              src="https://i.gifer.com/JpHC.gif"
              alt="RecipeHub Logo"
              class="h-10 w-10 rounded-full"
            />
            <RouterLink to="/" class="text-xl font-bold">
                𝓡𝓮𝓬𝓲𝓹𝓮𝓗𝓾𝓫
            </RouterLink>
          </div>
          <!-- Menu for large screens -->
          <div class="hidden md:flex space-x-4">
            <RouterLink
              to="/"
              class="bg-orange-300 shadow-md shadow-black hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </RouterLink>
            <RouterLink
              to="/foods"
              class="bg-orange-300 shadow-md shadow-black hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Recipes
            </RouterLink>
          </div>
          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button
              @click="toggleMobileMenu"
              class="text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-400 rounded-md p-2"
            >
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <!-- Mobile menu -->
      <div v-if="isMobileMenuOpen" class="md:hidden bg-green-700">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <RouterLink
            to="/"
            class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-green-800"
          >
            Home
          </RouterLink>
          <RouterLink
            to="/foods"
            class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-green-800"
          >
            Recipes
          </RouterLink>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMobileMenuOpen: false,
      };
    },
    methods: {
      toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Optional: Add any additional styles here */
  </style>
  