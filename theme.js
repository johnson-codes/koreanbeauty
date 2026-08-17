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
  var reasons = {
    "hanji-forest": "Recommended master. Deep Forest gives medical trust without hospital blue; Hanji Ivory keeps skin photography dominant; Soft Gold is premium, not flashy.",
    "seoul-stone": "Contemporary Seoul interiors. Modern and international, so Korean expertise reads as experience—not costume, flags, or palace styling.",
    "champagne-porcelain": "Refined femininity without stereotypes. Mature beauty-forward colour for women 35–60+, still clinical because Porcelain stays clean and Espresso stays authoritative.",
    "scholar-ink": "Korean expertise as craft, not decoration. Ink and paper support credentials and education; dried persimmon replaces strong seal-red.",
    "celadon-mist": "Ceramic precision: mineral grey-green, not spa mint or hospital blue. Fits clinical warmth (2/5) and treatment explanation.",
    "persimmon-silk": "Human warmth for campaigns, still medical. Persimmon is skin-adjacent without strong red; keep it at 5% so it never feels promotional."
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

    document.querySelectorAll("[data-palette-reason]").forEach(function (el) {
      el.textContent = reasons[theme] || "";
    });
  }

  applyTheme(currentTheme());

  document.querySelectorAll("[data-theme-option]").forEach(function (button) {
    button.addEventListener("click", function () {
      applyTheme(button.getAttribute("data-theme-option"));
    });
  });

  var paletteOpenKey = "ksa-palette-open";
  var paletteNav = document.querySelector(".palette-nav");
  var paletteToggle = document.querySelector(".palette-toggle");
  if (paletteNav && paletteToggle) {
    function setPaletteOpen(open) {
      paletteNav.classList.toggle("is-collapsed", !open);
      paletteToggle.setAttribute("aria-expanded", open ? "true" : "false");
      paletteToggle.setAttribute("data-i18n-aria", open ? "palette.close" : "palette.open");
      paletteToggle.setAttribute("aria-label", open ? "Close colour schemes" : "Open colour schemes");
      localStorage.setItem(paletteOpenKey, open ? "1" : "0");
    }
    setPaletteOpen(localStorage.getItem(paletteOpenKey) === "1");
    paletteToggle.addEventListener("click", function () {
      setPaletteOpen(paletteNav.classList.contains("is-collapsed"));
    });
  }

  var chrome = document.querySelector(".site-chrome");
  var hero = document.querySelector(".home-hero");
  if (chrome) {
    function setChromeHeight() {
      document.documentElement.style.setProperty("--chrome-height", chrome.offsetHeight + "px");
    }
    function updateScrolled() {
      chrome.classList.toggle("is-scrolled", window.scrollY > 12);
    }
    setChromeHeight();
    updateScrolled();
    window.addEventListener("resize", setChromeHeight);
    window.addEventListener("scroll", updateScrolled, { passive: true });
  }
})();
