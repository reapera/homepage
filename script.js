// Theme: respect saved choice, else system preference (dark default).
(function () {
  var root = document.documentElement;
  var saved = localStorage.getItem("theme");
  if (saved) {
    root.setAttribute("data-theme", saved);
  } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    root.setAttribute("data-theme", "light");
  }

  document.getElementById("theme-toggle").addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
})();

// Scroll reveal — show sections as they enter the viewport.
(function () {
  var revealed = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    revealed.forEach(function (el) { el.classList.add("visible"); });
    return;
  }
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealed.forEach(function (el) { observer.observe(el); });
})();

// Footer year.
document.getElementById("year").textContent = new Date().getFullYear();
