// Navbar Mobile
const menuToggle = document.getElementById("menu-toggle");
const navItems = document.getElementById("nav-items");
const menuIconOpen = document.getElementById("menu-icon-open");
const menuIconClose = document.getElementById("menu-icon-close");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navItems.classList.toggle("hidden");
    menuIconOpen.classList.toggle("hidden");
    menuIconClose.classList.toggle("hidden");
  });
}

// Sticky Navbar
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add(
      "bg-white/80",
      "backdrop-blur-xl",
      "border-b",
      "border-slate-200/60",
      "py-3",
      "shadow-sm",
    );
    navbar.classList.remove("py-5", "border-transparent");
  } else {
    navbar.classList.remove(
      "bg-white/80",
      "backdrop-blur-xl",
      "border-b",
      "border-slate-200/60",
      "py-3",
      "shadow-sm",
    );
    navbar.classList.add("py-5", "border-transparent");
  }
});
