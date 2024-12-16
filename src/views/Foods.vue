<template>
    <div class="p-6 bg-orange-400 min-h-screen">
        <h1 class="text-3xl font-extrabold mb-8 mt-20 text-green-900 text-center font-serif" data-aos="fade-left">
            The Meal Explorer 🍽️
        </h1>

        <!-- Search by Name -->
        <div class="mb-6">
            <label class="block mb-2 font-bold text-green-900" data-aos="fade-right">Search Meal by Name</label>
            <input v-model="searchQuery" @keyup.enter="searchMealByName" type="text" placeholder="e.g., Chicken, Pork"
                class="w-full p-3 border rounded" data-aos="fade-left" />
            <button @click="searchMealByName"
                class="mt-2 bg-teal-800 text-white font-bold px-4 py-2 rounded hover:bg-blue-600" data-aos="fade-right">
                Search
            </button>
        </div>

        <!-- Meals List -->
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-3">
            <div v-for="meal in meals" :key="meal.idMeal" data-aos="fade-up"
                class="bg-white shadow-md shadow-black rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-full h-48 object-cover" />

                <div class="p-4">
                    <h2 class="text-lg font-serif font-semibold mb-2">{{ meal.strMeal }}</h2>
                    <button @click="viewMealDetails(meal)"
                        class="bg-teal-600 text-white px-4 py-2 font-bold rounded hover:bg-green-600">
                        View Details
                    </button>
                </div>
            </div>
        </div>

        <!-- Modal for Meal Details -->
        <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div
                class="bg-white rounded-lg shadow-lg w-full sm:w-11/12 md:w-8/12 lg:max-w-lg p-6 relative max-h-[90vh] overflow-y-auto">
                <button @click="closeModal" class="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                    &times;
                </button>
                <h2 class="text-2xl sm:text-xl font-bold mb-4">{{ selectedMeal?.strMeal }}</h2>
                <img :src="selectedMeal?.strMealThumb" :alt="selectedMeal?.strMeal"
                    class="w-full h-48 object-cover rounded mb-4" />
                <p class="text-gray-700 mb-4">
                    <strong>Category:</strong> {{ selectedMeal?.strCategory }} <br />
                    <strong>Area:</strong> {{ selectedMeal?.strArea }}
                </p>
                <h3 class="font-bold mb-2">Instructions:</h3>
                <div class="text-gray-700 max-h-40 overflow-y-auto">
                    <p>{{ selectedMeal?.strInstructions }}</p>
                </div>

                <!-- Button to view ingredients -->
                <button @click="openIngredientsModal"
                    class="mt-4 bg-teal-600 text-white px-4 py-2 font-bold rounded hover:bg-green-600">
                    View Ingredients
                </button>
            </div>
        </div>

        <!-- Modal for Ingredients -->
        <div v-if="isIngredientsModalOpen"
            class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div
                class="bg-white rounded-lg shadow-lg w-full sm:w-11/12 md:w-8/12 lg:max-w-lg p-6 relative max-h-[90vh] overflow-y-auto">
                <button @click="closeIngredientsModal" class="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                    &times;
                </button>
                <h2 class="text-2xl sm:text-xl font-bold mb-4">Ingredients for {{ selectedMeal?.strMeal }}</h2>
                <ul class="text-gray-700">
                    <li v-for="ingredient in ingredients" :key="ingredient" class="mb-2">{{ ingredient }}</li>
                </ul>
            </div>
        </div>


        <!-- Modal for Ingredients -->
        <div v-if="isIngredientsModalOpen"
            class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div class="bg-white rounded-lg shadow-lg w-full sm:w-11/12 md:w-8/12 lg:max-w-lg p-6 relative">
                <button @click="closeIngredientsModal" class="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                    &times;
                </button>
                <h2 class="text-2xl sm:text-xl font-bold mb-4">Ingredients for {{ selectedMeal?.strMeal }}</h2>
                <ul class="text-gray-700">
                    <li v-for="ingredient in ingredients" :key="ingredient" class="mb-2">{{ ingredient }}</li>
                </ul>
            </div>
        </div>
    </div>

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
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

const searchQuery = ref("");
const meals = ref([]);
const isModalOpen = ref(false);
const isIngredientsModalOpen = ref(false);
const selectedMeal = ref(null);
const ingredients = ref([]);

const fetchRandomMeals = async () => {
    meals.value = [];
    for (let i = 0; i < 8; i++) {
        try {
            const response = await axios.get(
                "https://www.themealdb.com/api/json/v1/1/random.php"
            );
            meals.value.push(response.data.meals[0]);
        } catch (error) {
            console.error("Error fetching random meals:", error);
        }
    }
};

const searchMealByName = async () => {
    if (!searchQuery.value) return;
    try {
        const response = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery.value}`
        );
        meals.value = response.data.meals || [];
    } catch (error) {
        console.error("Error searching meals by name:", error);
    }
};

const viewMealDetails = (meal) => {
    selectedMeal.value = meal;
    ingredients.value = [];
    // Get ingredients from the selected meal
    for (let i = 1; i <= 20; i++) {
        const ingredient = selectedMeal.value[`strIngredient${i}`];
        if (ingredient) {
            ingredients.value.push(ingredient);
        }
    }
    isModalOpen.value = true;
};

const closeModal = () => {
    isModalOpen.value = false;
};

const openIngredientsModal = () => {
    isIngredientsModalOpen.value = true;
};

const closeIngredientsModal = () => {
    isIngredientsModalOpen.value = false;
};

onMounted(() => {
    fetchRandomMeals();
    AOS.init();
});
</script>

<style>
/* Optional: Add any custom styles here */
</style>