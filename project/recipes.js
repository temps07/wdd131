// Recipe data
const recipes = [
    {
        id: 1,
        name: "Quick Breakfast Bowl",
        category: "breakfast",
        description: "A healthy and delicious breakfast ready in under 10 minutes.",
        image: "images/breakfast.jpg"
    },
    {
        id: 2,
        name: "Meal Prep Pasta",
        category: "lunch",
        description: "Perfect for busy weeks—make ahead and enjoy all week long.",
        image: "images/pasta.jpg"
    },
    {
        id: 3,
        name: "3-Ingredient Cookies",
        category: "dessert",
        description: "Simple and sweet cookies with just three ingredients.",
        image: "images/cookie.jpg"
    },
    {
        id: 4,
        name: "Veggie Stir Fry",
        category: "dinner",
        description: "A quick and healthy dinner packed with fresh vegetables.",
        image: "images/veggie.jpg"
    },
    {
        id: 5,
        name: "Avocado Toast",
        category: "breakfast",
        description: "Creamy avocado on toasted whole-grain bread, topped with salt and pepper.",
        image: "images/toast.jpg"
    },
    {
        id: 6,
        name: "Chocolate Lava Cake",
        category: "dessert",
        description: "Warm, gooey chocolate cake with a molten centre - perfect for chocolate lovers.",
        image: "images/cake.jpg",
    },
    {
        id: 7,
        name: "Grilled Salmon",
        category: "dinner",
        description: "Perfectly grilled salmon fillet served with a side of steamed vegetables.",
        image: "images/salmon.jpg",
    },
    {
        id: 8,
        name: "Smoothie Bowl",
        category: "breakfast",
        description: "A thick and creamy smoothie bowl topped with fresh fruits, granola and nuts.",
        image: "images/smoothie.jpg"
    },
    {
        id: 9,
        name: "Pancakes",
        category: "breakfast",
        description: "Fluffy pancakes served with maple syrup and a pat of butter.",
        image: "images/pancake.jpg"
    },
    {
        id: 10,
        name: "Quinoa Salad",
        category: "lunch",
        description: "A refreshing salad made with quinoa, cucumbers, tomatoes and feta cheese.",
        image: "images/salad.jpg"
    },
];

// Function to display recipes
function displayRecipes(category = "all") {
    const recipeList = document.getElementById("recipe-list");
    recipeList.innerHTML = ""; // Clear existing content

    const filteredRecipes = category === "all" ? recipes : recipes.filter(recipe => recipe.category === category);

    filteredRecipes.forEach(recipe => {
        const recipeCard = document.createElement("div");
        recipeCard.className = "recipe-card";
        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}" loading="lazy">
            <h3>${recipe.name}</h3>
            <p>${recipe.description}</p>
            <button onclick="addToFavorites(${recipe.id})">Add to Favorites</button>
        `;
        recipeList.appendChild(recipeCard);
    });

    // Lazy load images
    lazyLoadImages();
}

// Function to lazy load images
function lazyLoadImages() {
    const lazyImages = document.querySelectorAll(".lazy-load");
    lazyImages.forEach(img => {
        img.src = img.dataset.src;
    });
}

// Function to add a recipe to favorites
function addToFavorites(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;

    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.some(fav => fav.id === recipeId)) {
        favorites.push(recipe);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        displayFavorites();
    }
}

// Function to display favorite recipes
function displayFavorites() {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const favoriteList = document.getElementById("favorite-recipes").querySelector("ul");
    favoriteList.innerHTML = favorites.map(fav => `
        <li>
            <strong>${fav.name}</strong>: ${fav.description}
        </li>
    `).join("");
}

// Event listener for category filter
document.getElementById("category").addEventListener("change", (e) => {
    displayRecipes(e.target.value);
});

// Load recipes and favorites when the page loads
document.addEventListener("DOMContentLoaded", () => {
    displayRecipes();
    displayFavorites();
});