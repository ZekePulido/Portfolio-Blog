const projectsButton = document.querySelector(".hero .button.primary");
const projectsSection = document.querySelector("#projects");
const navLinks = document.querySelectorAll('a[href^="#"]');
const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");

function scrollToSection(section) {
    if (!section) return;
    section.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

if (projectsButton && projectsSection) {
    projectsButton.addEventListener("click", function(event) {
        event.preventDefault();
        scrollToSection(projectsSection);
    });
}

navLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
        const targetId = link.getAttribute("href");
        const targetSection = targetId ? document.querySelector(targetId) : null;

        if (!targetSection) return;

        event.preventDefault();
        scrollToSection(targetSection);
    });
});

if (filterButtons.length && projectCards.length) {
    filterButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const selectedFilter = button.dataset.filter;

            filterButtons.forEach(function(filterButton) {
                filterButton.classList.toggle("active", filterButton === button);
            });

            projectCards.forEach(function(card) {
                const technologies = card.dataset.technologies || "";
                const matches = selectedFilter === "all" || technologies.includes(selectedFilter);
                card.classList.toggle("hidden", !matches);
            });
        });
    });
}
