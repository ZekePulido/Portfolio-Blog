const projectsButton = document.querySelector(".hero .button");
const projectsSection = document.querySelector("#projects");
const navLinks = document.querySelectorAll("nav ul a");
const themeButton = document.querySelector("#theme-button");
const savedTheme = localStorage.getItem("theme");

const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");


// Reusable functions
function scrollToSection(section) {
    section.scrollIntoView({
        behavior: "smooth"
    });
}


// Projects button
projectsButton.addEventListener("click", function(event) {
    event.preventDefault();

    scrollToSection(projectsSection);
});


// Navigation links
navLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        scrollToSection(targetSection);
    });
});


// Theme button
themeButton.addEventListener("click", function() {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeButton.textContent = "Dark Mode";
    } else {
        themeButton.textContent = "Light Mode";
    }

    localStorage.setItem(
        "theme",
        document.body.classList.contains("light-mode") ? "light" : "dark"
    );
});


// Load saved theme
if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    themeButton.textContent = "Dark Mode";
}


// Project filters
filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        const selectedFilter = button.dataset.filter;


        // Update active button
        filterButtons.forEach(function(filterButton) {
            filterButton.classList.remove("active");
        });

        button.classList.add("active");


        // Filter project cards
        projectCards.forEach(function(card) {
            const technologies = card.dataset.technologies;

            if (
                selectedFilter === "all" ||
                technologies.includes(selectedFilter)
            ) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }
        });
    });
});