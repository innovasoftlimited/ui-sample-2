// Mobile Menu Toggle
const mobileMenuButton = document.querySelector(".fa-bars").parentElement;
const mobileMenu = document.getElementById("mobileMenu");

// Toggle menu visibility
mobileMenuButton.addEventListener("click", (e) => {
  e.stopPropagation();
  mobileMenu.classList.toggle("hidden");
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
    mobileMenu.classList.add("hidden");
  }
});

// Close menu when clicking menu items
document.querySelectorAll("#mobileMenu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});
