const sun = document.getElementById("sun");
const factContainer = document.getElementById("fact-container");

// Array of random space facts
const facts = [
  "Saturn's moon Titan has lakes of methane.",
  "A day on Venus is longer than a year on Venus.",
  "There are more stars in the universe than grains of sand on Earth.",
  "A teaspoon of a neutron star would weigh about 6 billion tons.",
  "The largest volcano in the solar system is on Mars.",
  "A year on Mercury is just 88 Earth days.",
  "There are billions of planets in our galaxy alone.",
];

// Generate stars for the background
const starsContainer = document.getElementById("stars");
const numberOfStars = 200;

for (let i = 0; i < numberOfStars; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.width = `${Math.random() * 3 + 1}px`;
  star.style.height = `${Math.random() * 3 + 1}px`;
  starsContainer.appendChild(star);
}

// Function to display a fact with a shooting star effect
const displayFactWithShootingStar = () => {
  factContainer.innerHTML = ""; // Clear previous fact

  const shootingStar = document.createElement("div");
  shootingStar.classList.add("shooting-star");

  const sunRect = sun.getBoundingClientRect();

  // Set the origin of the shooting star to the bottom-left corner of the sun
  shootingStar.style.left = `${sunRect.left + sunRect.width * 0.2}px`;
  shootingStar.style.top = `${sunRect.bottom - sunRect.height * 0.2}px`;

  document.body.appendChild(shootingStar);

  const factCard = document.createElement("div");
  factCard.classList.add("fact-card");
  factCard.textContent = facts[Math.floor(Math.random() * facts.length)];

  // Adjust fact card position slightly above the sun
  factCard.style.left = `calc(50vw - 170px)`; // Horizontally centered
  factCard.style.top = `calc(35vh - 100px)`; // Slightly above center

  factContainer.appendChild(factCard);

  // Remove shooting star after animation completes
  setTimeout(() => {
    shootingStar.remove();
  }, 2000); // Adjusted duration for smoother effect
};

// Add click listener to the sun
sun.addEventListener("click", displayFactWithShootingStar);
