(function () {
  var storageKey = "ksa-theme";
  var defaultTheme = "hanji-forest";
  var allowed = {
    "hanji-forest": true,
    "seoul-stone": true,
    "champagne-porcelain": true,
    "scholar-ink": true,
    "celadon-mist": true,
    "persimmon-silk": true
  };

  function currentTheme() {
    var saved = localStorage.getItem(storageKey);
    return allowed[saved] ? saved : defaultTheme;
  }

  function applyTheme(theme) {
    if (!allowed[theme]) theme = defaultTheme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(storageKey, theme);

    document.querySelectorAll("[data-theme-option]").forEach(function (button) {
      var selected = button.getAttribute("data-theme-option") === theme;
      button.setAttribute("aria-pressed", selected ? "true" : "false");
    });
  }

  applyTheme(currentTheme());

  document.querySelectorAll("[data-theme-option]").forEach(function (button) {
    button.addEventListener("click", function () {
      applyTheme(button.getAttribute("data-theme-option"));
    });
  });
})();
