// KAFFEEPEDIA.COM — Theme, reveal animations, footer year (updated)
// No emoji icons — SVG icons shown/hidden via CSS; JS only sets data-theme & label

// ---------------- THEME LOGIC ----------------
(function() {
  // Return current hour (0-23)
  function getCurrentHour() { return new Date().getHours(); }

  // Default based on specified period: 07:00–18:59 => light; else dark
  function getDefaultTheme() {
    const hour = getCurrentHour();
    return (hour >= 7 && hour <= 18) ? "light" : "dark";
  }

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("kaffeepedia-theme", theme);
    updateToggleLabel(theme);
  }

  function updateToggleLabel(theme) {
    const label = document.getElementById("theme-label");
    if (!label) return;
    label.textContent = theme === "dark" ? "Dark" : "Light";
    // icons are handled purely by CSS via [data-theme] selectors
  }

  function loadTheme() {
    const stored = localStorage.getItem("kaffeepedia-theme");
    const theme = stored || getDefaultTheme();
    document.documentElement.setAttribute("data-theme", theme);
    updateToggleLabel(theme);
  }

  const toggleBtn = document.getElementById("theme-toggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", function() {
      const current = document.documentElement.getAttribute("data-theme") || getDefaultTheme();
      const next = current === "light" ? "dark" : "light";
      setTheme(next);
    });
  }

  loadTheme();
})();

// ---------------- INTERSECTION OBSERVER: reveal ----------------
(function() {
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.17 });

    document.querySelectorAll(".reveal").forEach(el => io.observe(el));
  } else {
    // fallback
    document.querySelectorAll(".reveal").forEach(el => el.classList.add("visible"));
  }
})();

// ---------------- FOOTER YEAR ----------------
(function() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
})();
