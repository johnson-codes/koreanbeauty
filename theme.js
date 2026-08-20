(function () {
  var storageKey = "ksa-theme";
  var theme = "warm-k-beauty";
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(storageKey, theme);

  var chrome = document.querySelector(".site-chrome");
  var header = document.querySelector(".site-header");
  var headerWrap = header && header.querySelector(".wrap");
  var navToggle = document.querySelector(".nav-toggle");
  var primaryNav = document.querySelector(".primary-nav");
  var navBackdrop = document.querySelector(".nav-backdrop");
  var navCollapse = 1040;

  function isCompactNav() {
    if (headerWrap) return headerWrap.getBoundingClientRect().width <= navCollapse;
    return window.innerWidth <= 1500;
  }
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
      if (isCompactNav()) {
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
    function syncNavMode() {
      var compact = isCompactNav();
      header.classList.toggle("is-nav-drawer", compact);
      if (!compact) setNavOpen(false);
      else if (!header.classList.contains("is-nav-open") && primaryNav) {
        primaryNav.setAttribute("inert", "");
        primaryNav.setAttribute("aria-hidden", "true");
      }
      setChromeHeight();
    }
    window.addEventListener("resize", syncNavMode);
    if (window.ResizeObserver && headerWrap) {
      new ResizeObserver(syncNavMode).observe(headerWrap);
    }
    syncNavMode();
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
      if (isCompactNav()) return;
      window.clearTimeout(hoverTimer);
      openNavItem(item);
    });
    item.addEventListener("mouseleave", function () {
      if (isCompactNav()) return;
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

  document.querySelectorAll(".ba-slider").forEach(function (slider) {
    var handle = slider.querySelector(".ba-handle");
    if (!handle) return;
    var active = false;

    function setValue(percent) {
      var value = Math.max(4, Math.min(96, Math.round(percent)));
      slider.style.setProperty("--ba", value + "%");
      handle.setAttribute("aria-valuenow", String(value));
    }

    function valueFromEvent(event) {
      var point = event.touches ? event.touches[0] : event;
      if (!point) return;
      var rect = slider.getBoundingClientRect();
      setValue(((point.clientX - rect.left) / rect.width) * 100);
    }

    slider.addEventListener("pointerdown", function (event) {
      active = true;
      slider.classList.add("is-dragging");
      if (slider.setPointerCapture) slider.setPointerCapture(event.pointerId);
      valueFromEvent(event);
      event.preventDefault();
    });

    slider.addEventListener("pointermove", function (event) {
      if (!active) return;
      valueFromEvent(event);
    });

    function endDrag() {
      active = false;
      slider.classList.remove("is-dragging");
    }

    slider.addEventListener("pointerup", endDrag);
    slider.addEventListener("pointercancel", endDrag);

    handle.addEventListener("keydown", function (event) {
      var now = parseInt(handle.getAttribute("aria-valuenow") || "50", 10);
      if (event.key === "ArrowLeft" || event.key === "ArrowDown") now -= 5;
      else if (event.key === "ArrowRight" || event.key === "ArrowUp") now += 5;
      else if (event.key === "Home") now = 4;
      else if (event.key === "End") now = 96;
      else return;
      event.preventDefault();
      setValue(now);
    });
  });
})();
