// Dynamic content for About page
const aboutContent = [
    {
        title: "Our Mission",
        description: "Sweet & Savory is dedicated to providing easy, affordable, and delicious recipes for students and busy individuals. We believe that cooking should be fun, accessible, and stress-free!"
    },
    {
        title: "Our Story",
        description: "Founded in 2023 by Temple Ohanu, Sweet & Savory started as a passion project to help students eat well on a budget. Today, it has grown into a community of food lovers sharing their favorite recipes."
    }
];

// Function to dynamically load content
function loadAboutContent() {
    const aboutSection = document.getElementById("about-content");
    aboutContent.forEach(item => {
        const article = document.createElement("article");
        article.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        `;
        aboutSection.appendChild(article);
    });
}

// Function to greet the user
function greetUser() {
    const userName = localStorage.getItem("userName") || "Guest";
    const greetingSection = document.getElementById("user-greeting");
    greetingSection.innerHTML = `
        <p>Welcome back, ${userName}! We're glad you're here.</p>
    `;
}

// Event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    loadAboutContent();
    greetUser();
});