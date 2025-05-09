const toggleBtn = document.getElementById("toggleBtn");
const body = document.body;
const title = document.getElementById("title");

// Load saved theme on startup
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.add(savedTheme);
} else {
  body.classList.add("light"); // default
}

// Toggle and save theme
toggleBtn.addEventListener("click", () => {
  const currentTheme = body.classList.contains("dark") ? "dark" : "light";
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  body.classList.remove(currentTheme);
  body.classList.add(newTheme);
  localStorage.setItem("theme", newTheme);

  // Animate title on toggle
  title.classList.remove("animate");
  void title.offsetWidth; // trick to re-trigger animation
  title.classList.add("animate");
});
