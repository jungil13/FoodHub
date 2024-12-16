<script setup>
</script>
<template>
  <section>
    <div class="bg-gradient-to-t from-[#fffbf5] to-[#fffef4] pt-10 sm:pt-0 p-6 min-h-screen">
      <div
        class="mt-12 container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 items-center md:gap-20 bg-gradient-to-t from-[#fffbf5] to-[#fffef4]">
        <div class="content">
          <div class="flex items-center gap-3">
            <hr class="w-10 bg-orange-500 border " />
            <span class="md:text-[18px] font-medium text-gray-800 "data-aos="fade-left">
              Api / Javascript Inspired
            </span>
          </div>
          <p class="text-[40px] lg:text-[45px] xl:text-[55px] font-bold leading-tight mt-5 sm:mt-0 "data-aos="fade-right">
            Food and Recipe <br />
           Finder : Recipe Hub
          </p>
          <p class="mt-5 md:text-md "data-aos="fade-left">
            Discover a world of recipes and ingredients, curated for every food lover. Explore the best meals,<br class="hidden md:block" />find new recipes, and get creative in the kitchen with our easy-to-follow guides and ingredient lists.
          </p>
          <div class="flex gap-4 mt-10">

            <RouterLink to="/foods"
              class="font-medium text-[16px] flex items-center px-5 py-3 md:py-4 md:px-8 rounded-xl capitalize bg-gradient-to-r from-orange-300 to-orange-500 hover:from-pink-500 hover:to-yellow-500  relative gap-2 transition duration-300 hover:scale-105 text-white shadow-glass "data-aos="fade-right">Get
              In Touch
              <span
                class="animate-ping absolute right-0 top-0 w-3 h-3  rounded-full bg-gradient-to-r from-orange -400 to-orange-700 "></span>
            </RouterLink>
            <RiFacebookFill class="" />
            <SiBehance />
          </div>

        </div>
        <div class="relative sm:mt-16 mt-10 px-6 sm:px-0">

          <img class="shadow-md shadow-black w-[600px] animate__animated animate__fadeInRight animate__delay-.5s"data-aos="fade-left"
            src="https://i.pinimg.com/originals/f9/98/0f/f9980fdb73ff0acc69d70a8997acb5fa.gif" alt="" />
        </div>
      </div>
    </div>
  </section>
  <!-- Features Section -->
<section class="bg-white text-gray-900 container mx-auto py-16 px-4 md:px-16 border-y">
  <!-- Heading -->
  <div class="text-center mb-12">
    <h1 class="text-4xl font-bold mb-4"data-aos="fade-left">Recipe Hub Features</h1>
    <p class="text-lg text-gray-600"data-aos="fade-right">Download the Recipe Hub to explore features that will make your cooking experience unforgettable.</p>
  </div>
  
  <!-- Feature Blocks -->
  <div class="space-y-12">

    <!-- Verse Finder Feature (1st Row) -->
    <div class="flex flex-col md:flex-row items-center md:items-start md:justify-between">
      <!-- Text Block -->
      <div class="md:w-5/12"data-aos="fade-left"> <!-- Adjusted width to 5/12 -->
        <h2 class="text-2xl font-bold mb-4">Food Finder</h2>
        <p class="text-gray-600 mb-6 text-center md:text-left">Easily search for your favorite recipes, ingredients, and meal ideas. Whether you're looking for breakfast, lunch, or dinner, our Recipe Finder has you covered with thousands of recipes to explore.</p>
      </div>
      
      <!-- Image Block -->
      <div class="md:w-5/12 max-w-sm" data-aos="fade-right">
        <img class="rounded-md border-none" src="https://24.media.tumblr.com/d2780fd4d3e24bef0070f0a90537062b/tumblr_mpyzh7MK9J1rs8ziuo1_500.gif" alt="Verse Finder Image">
      </div>
    </div>

    <!-- Bible Trivia Feature (2nd Row) -->
    <div class="flex flex-col md:flex-row-reverse items-center md:items-start md:justify-between">
      <!-- Text Block -->
      <div class="md:w-5/12"> <!-- Adjusted width to 5/12 -->
        <h2 class="text-2xl font-bold mb-4"data-aos="fade-up">Recipe Browsing</h2>
        <p class="text-gray-600 mb-6 text-center md:text-left"data-aos="fade-up">Discover the ingredients you need to create amazing meals. Whether you're a beginner or a pro, our Ingredient Explorer helps you find the perfect ingredients to suit your recipe needs.</p>
      </div>
      
      <!-- Image Block -->
      <div class="md:w-5/12 max-w-sm"data-aos="fade-right">
        <img class="rounded-md border-none" src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/bf582c77554031.5c8aa83b12037.gif" alt="Bible Trivia Image">
      </div>
    </div>
  </div>
</section>
<section>
  <footer class="mx-auto w-full bg-black max-w-container px-4 sm:px-6 lg:px-8" aria-labelledby="footer-heading">
      <div class="items-centers grid grid-cols-1 justify-between gap-4 border-t border-gray-100 py-6 md:grid-cols-2">
        <p class="text-sm/6 text-gray-100 max-md:text-center">
          ©
          <!-- -->2024
          <!-- -->
          <a href="https://learnwithsumit.com/">Learn with Food Hub</a>. All rights reserved.
        </p>
        <div class="flex items-center justify-center space-x-4 text-sm/6 text-gray-100 md:justify-end">
          <a href="https://learnwithsumit.com/privacy-policy">Privacy policy</a>
          <div class="h-4 w-px bg-gray-100"></div>
          <a href="https://learnwithsumit.com/terms">Terms</a>
        </div>
      </div>
    </footer>
</section>
</template>
