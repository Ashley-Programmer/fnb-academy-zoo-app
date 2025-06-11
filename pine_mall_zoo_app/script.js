// Mobile Menu Toggle
const mobileToggle = document.getElementById("mobileToggle");
const mobileMenu = document.getElementById("mobileMenu");
const mobileOverlay = document.getElementById("mobileOverlay");
const mobileClose = document.getElementById("mobileClose");
const header = document.getElementById("header");

function openMobileMenu() {
  mobileMenu.classList.add("active");
  mobileOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeMobileMenu() {
  mobileMenu.classList.remove("active");
  mobileOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

mobileToggle.addEventListener("click", openMobileMenu);
mobileClose.addEventListener("click", closeMobileMenu);
mobileOverlay.addEventListener("click", closeMobileMenu);

// Header scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Close mobile menu when clicking on nav links
document.querySelectorAll(".mobile-nav-link").forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});
