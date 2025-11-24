// KAFFEEPEDIA.COM Academic Site
// Theme + Animation + Footer Year

// -------- THEME TOGGLE --------

(function() {
  const prefersDark = () =>
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  function getCurrentHour() {
    return new Date().getHours();
  }

  // Theme decision logic
  function getDefaultTheme() {
    const hour = getCurrentHour();
    return (hour >= 7 && hour <= 18) ? "light" : "dark";
  }

  // Load theme preference, check localStorage and time
  function loadTheme() {
    let theme = localStorage.getItem("kaffeepedia-theme");
    if (!theme) theme = getDefaultTheme();
    document.documentElement.setAttribute("data-theme", theme);
    updateToggle(theme);
  }

  // Handle toggle button
  function updateToggle(theme) {
    const icon = document.getElementById("theme-icon");
    const label = document.getElementById("theme-label");
    if (theme === "dark") {
      icon.textContent = "🌙";
      label.textContent = "Dark";
    } else {
      icon.textContent = "🌞";
      label.textContent = "Light";
    }
  }

  document.getElementById("theme-toggle").addEventListener("click", function() {
    let theme = document.documentElement.getAttribute("data-theme");
    theme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("kaffeepedia-theme", theme);
    updateToggle(theme);
  });

  loadTheme();
})();

// -------- INTERSECTION REVEAL ANIMATION --------

// Simple fade-in for .reveal elements
(function() {
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.17 }
    );
    document.querySelectorAll(".reveal").forEach(function(el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show all if no IntersectionObserver
    document.querySelectorAll(".reveal").forEach(function(el) {
      el.classList.add("visible");
    });
  }
})();

// -------- FOOTER YEAR --------
(function() {
  document.getElementById("year").textContent = new Date().getFullYear();
})();
