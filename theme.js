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
  var header = document.querySelector(".site-header");
  var navToggle = document.querySelector(".nav-toggle");
  var primaryNav = document.querySelector(".primary-nav");
  var navBackdrop = document.querySelector(".nav-backdrop");
  var navToggleLabels = {
    open: { en: "Open menu", zh: "打开菜单", ko: "메뉴 열기" },
    close: { en: "Close menu", zh: "关闭菜单", ko: "메뉴 닫기" }
  };

  function setChromeHeight() {
    if (!chrome) return;
    document.documentElement.style.setProperty("--chrome-height", chrome.offsetHeight + "px");
  }

  function currentUiLang() {
    return document.documentElement.getAttribute("data-lang") || "en";
  }

  function setNavOpen(open) {
    if (!header || !navToggle) return;
    header.classList.toggle("is-nav-open", open);
    document.body.classList.toggle("is-nav-open", open);
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    navToggle.setAttribute("data-i18n-aria", open ? "nav.close" : "nav.menu");
    var pack = open ? navToggleLabels.close : navToggleLabels.open;
    navToggle.setAttribute("aria-label", pack[currentUiLang()] || pack.en);
    if (navBackdrop) navBackdrop.hidden = !open;
    var icon = navToggle.querySelector(".material-symbols-outlined");
    if (icon) icon.textContent = open ? "close" : "menu";
    if (primaryNav) {
      if (window.innerWidth <= 1100) {
        primaryNav.setAttribute("aria-hidden", open ? "false" : "true");
        if (open) primaryNav.removeAttribute("inert");
        else primaryNav.setAttribute("inert", "");
      } else {
        primaryNav.removeAttribute("aria-hidden");
        primaryNav.removeAttribute("inert");
      }
    }
  }

  if (chrome) {
    function updateScrolled() {
      chrome.classList.toggle("is-scrolled", window.scrollY > 12);
    }
    setChromeHeight();
    updateScrolled();
    window.addEventListener("resize", setChromeHeight);
    window.addEventListener("scroll", updateScrolled, { passive: true });
  }

  if (navToggle && header) {
    navToggle.addEventListener("click", function () {
      setNavOpen(!header.classList.contains("is-nav-open"));
    });
    if (navBackdrop) {
      navBackdrop.addEventListener("click", function () {
        setNavOpen(false);
      });
    }
    if (primaryNav) {
      primaryNav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          setNavOpen(false);
          closeNavMenus();
        });
      });
    }
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        setNavOpen(false);
        closeNavMenus();
      }
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 1100) setNavOpen(false);
      else if (!header.classList.contains("is-nav-open") && primaryNav) {
        primaryNav.setAttribute("inert", "");
        primaryNav.setAttribute("aria-hidden", "true");
      }
    });
    if (primaryNav && window.innerWidth <= 1100) {
      primaryNav.setAttribute("inert", "");
      primaryNav.setAttribute("aria-hidden", "true");
    }
  }

  var hoverTimer;

  function closeNavMenus(except) {
    document.querySelectorAll(".nav-item.is-open").forEach(function (item) {
      if (item === except) return;
      item.classList.remove("is-open");
      var trigger = item.querySelector(".nav-trigger");
      var panel = item.querySelector(".mega-panel, .nav-flyout");
      if (trigger) trigger.setAttribute("aria-expanded", "false");
      if (panel) panel.hidden = true;
    });
  }

  function openNavItem(item) {
    if (!item) return;
    closeNavMenus(item);
    item.classList.add("is-open");
    var trigger = item.querySelector(".nav-trigger");
    var panel = item.querySelector(".mega-panel, .nav-flyout");
    if (trigger) trigger.setAttribute("aria-expanded", "true");
    if (panel) panel.hidden = false;
  }

  document.querySelectorAll(".nav-item").forEach(function (item) {
    var trigger = item.querySelector(".nav-trigger");
    if (!trigger) return;
    trigger.addEventListener("click", function (event) {
      event.preventDefault();
      if (item.classList.contains("is-open")) closeNavMenus();
      else openNavItem(item);
    });
    item.addEventListener("mouseenter", function () {
      if (window.innerWidth <= 1100) return;
      window.clearTimeout(hoverTimer);
      openNavItem(item);
    });
    item.addEventListener("mouseleave", function () {
      if (window.innerWidth <= 1100) return;
      hoverTimer = window.setTimeout(function () {
        closeNavMenus();
      }, 140);
    });
  });

  document.querySelectorAll(".mega-panel").forEach(function (panel) {
    panel.addEventListener("click", function (event) {
      var cat = event.target.closest(".mega-cat");
      if (!cat || !panel.contains(cat)) return;
      var id = cat.getAttribute("data-mega-cat");
      panel.querySelectorAll(".mega-cat").forEach(function (button) {
        button.setAttribute("aria-pressed", button === cat ? "true" : "false");
      });
      panel.querySelectorAll(".mega-pane").forEach(function (pane) {
        var on = pane.getAttribute("data-mega-pane") === id;
        pane.classList.toggle("is-active", on);
        pane.hidden = !on;
      });
    });
  });

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".nav-item")) closeNavMenus();
  });

  if (primaryNav && "IntersectionObserver" in window) {
    var navLinks = Array.prototype.slice.call(primaryNav.querySelectorAll(".nav-link"));
    var watched = navLinks.map(function (link) {
      var hash = link.getAttribute("href").split("#")[1];
      var section = hash ? document.getElementById(hash) : null;
      return section ? { link: link, section: section } : null;
    }).filter(Boolean);
    if (watched.length) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var match = watched.find(function (item) {
            return item.section === entry.target;
          });
          if (!match) return;
          navLinks.forEach(function (link) {
            link.removeAttribute("aria-current");
          });
          match.link.setAttribute("aria-current", "page");
        });
      }, { rootMargin: "-28% 0px -58% 0px", threshold: 0 });
      watched.forEach(function (item) {
        observer.observe(item.section);
      });
    }
  }
})();
