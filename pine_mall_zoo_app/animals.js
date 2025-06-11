// Working filter functionality
const filterButtons = document.querySelectorAll(".filter-button");
const animalCards = document.querySelectorAll(".animal-card");

// Add data attributes to animal cards for filtering
const animalCategories = {
  Elephants: ["Mammals", "African Species", "Asian Species"],
  Giraffes: ["Mammals", "African Species"],
  Koalas: ["Mammals", "Australian Species"],
  "Dusky Leaf Monkeys": ["Mammals", "Asian Species"],
  "Giant Pandas": ["Mammals", "Asian Species"],
  Lions: ["Mammals", "African Species"],
  Gemsbok: ["Mammals", "African Species"],
  Gorillas: ["Mammals", "African Species"],
  Warthogs: ["Mammals", "African Species"],
};

// Apply data attributes to each card
animalCards.forEach((card) => {
  const animalName = card.querySelector("h2").textContent;
  if (animalCategories[animalName]) {
    card.setAttribute(
      "data-categories",
      animalCategories[animalName].join(" ")
    );
  }
});

filterButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));

    // Add active class to clicked button
    this.classList.add("active");

    const filterValue = this.textContent.trim();

    // Show all if "All Animals" is selected
    if (filterValue === "All Animals") {
      animalCards.forEach((card) => {
        card.style.display = "flex";
      });
      return;
    }

    // Otherwise filter by the selected category
    animalCards.forEach((card) => {
      const categories = card.getAttribute("data-categories");
      if (categories && categories.includes(filterValue)) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});
