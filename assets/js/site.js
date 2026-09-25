(() => {
  "use strict";

  /* Language detection ---------------------------------------------------- */
  const languagePreferenceKey = "marius-language-preference";
  const languageRoutes = {
    en: "./",
    it: "./it/",
    ro: "./ro/"
  };

  const saveLanguagePreference = (language) => {
    try {
      window.localStorage.setItem(languagePreferenceKey, language);
    } catch {
      // Storage can be unavailable in private browsing; navigation still works.
    }
  };

  document.querySelectorAll(".language-link").forEach((link) => {
    link.addEventListener("click", () => {
      const language = link.getAttribute("lang");

      if (language && languageRoutes[language]) {
        saveLanguagePreference(language);
      }
    });
  });

  const currentLocale = document.documentElement.dataset.locale || document.documentElement.lang;
  const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
  const isEnglishEntry = currentLocale === "en" && (currentPath === "/" || currentPath.endsWith("/index.html"));

  if (isEnglishEntry) {
    let savedLanguage = "";

    try {
      savedLanguage = window.localStorage.getItem(languagePreferenceKey) || "";
    } catch {
      // Fall back to the browser language when storage is unavailable.
    }

    const browserLanguages = Array.isArray(navigator.languages) && navigator.languages.length
      ? navigator.languages
      : [navigator.language];
    const supportedLanguages = Object.keys(languageRoutes);
    const detectedLanguage = browserLanguages
      .map((language) => String(language || "").toLowerCase().split("-")[0])
      .find((language) => supportedLanguages.includes(language)) || "en";
    const targetLanguage = languageRoutes[savedLanguage] ? savedLanguage : detectedLanguage;

    if (targetLanguage !== "en") {
      const targetUrl = new URL(languageRoutes[targetLanguage], window.location.href);
      targetUrl.search = window.location.search;
      targetUrl.hash = window.location.hash;

      const notice = document.createElement("aside");
      notice.className = "language-notice";
      notice.setAttribute("role", "status");
      notice.setAttribute("aria-live", "polite");

      const content = document.createElement("div");
      content.className = "container language-notice-content";

      const message = document.createElement("p");
      message.className = "language-notice-message";
      message.textContent = targetLanguage === "it"
        ? "The Italian version is available."
        : "The Romanian version is available.";

      const actions = document.createElement("div");
      actions.className = "language-notice-actions";

      const languageLink = document.createElement("a");
      languageLink.className = "language-notice-link";
      languageLink.href = targetUrl.href;
      languageLink.textContent = targetLanguage === "it" ? "View in Italian" : "View in Romanian";
      languageLink.addEventListener("click", () => saveLanguagePreference(targetLanguage));

      const stayLink = document.createElement("button");
      stayLink.className = "language-notice-dismiss";
      stayLink.type = "button";
      stayLink.textContent = "Stay in English";
      stayLink.addEventListener("click", () => {
        saveLanguagePreference("en");
        notice.remove();
      });

      actions.append(languageLink, stayLink);
      content.append(message, actions);
      notice.append(content);

      const siteHeader = document.querySelector("[data-site-header]");
      siteHeader?.insertAdjacentElement("afterend", notice);
    }
  }

  const menuLabels = {
    en: { open: "Open navigation", close: "Close navigation" },
    it: { open: "Apri la navigazione", close: "Chiudi la navigazione" },
    ro: { open: "Deschide navigarea", close: "Închide navigarea" }
  }[currentLocale] || { open: "Open navigation", close: "Close navigation" };

  /* Navigation ------------------------------------------------------------- */
  const menuButton = document.querySelector("[data-menu-toggle]");
  const primaryNavigation = document.querySelector("#primary-navigation");

  if (menuButton && primaryNavigation) {
    const setMenuState = (isOpen, returnFocus = false) => {
      primaryNavigation.classList.toggle("is-open", isOpen);
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? menuLabels.close : menuLabels.open);

      if (returnFocus) {
        menuButton.focus();
      }
    };

    menuButton.addEventListener("click", () => {
      setMenuState(!primaryNavigation.classList.contains("is-open"));
    });

    primaryNavigation.addEventListener("click", (event) => {
      if (event.target instanceof Element && event.target.closest("a")) {
        setMenuState(false);
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && primaryNavigation.classList.contains("is-open")) {
        setMenuState(false, true);
      }
    });
  }

  /* Teaching experience slider -------------------------------------------- */
  const teachingSlider = document.querySelector("[data-teaching-slider]");

  if (!teachingSlider) {
    return;
  }

  const viewport = teachingSlider.querySelector("[data-teaching-viewport]");
  const track = teachingSlider.querySelector("[data-content-slot='courses']");
  const controls = teachingSlider.querySelector("[data-teaching-controls]");
  const previousButton = teachingSlider.querySelector("[data-teaching-prev]");
  const nextButton = teachingSlider.querySelector("[data-teaching-next]");

  if (!viewport || !track || !controls || !previousButton || !nextButton) {
    return;
  }

  const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const getScrollAmount = () => {
    const firstCard = track.querySelector(".teaching-card");
    const trackStyles = window.getComputedStyle(track);
    const gap = Number.parseFloat(trackStyles.columnGap || trackStyles.gap) || 16;

    return (firstCard?.getBoundingClientRect().width || viewport.clientWidth * 0.8) + gap;
  };

  const updateControls = () => {
    const maxScrollLeft = viewport.scrollWidth - viewport.clientWidth;
    previousButton.disabled = viewport.scrollLeft <= 2;
    nextButton.disabled = viewport.scrollLeft >= maxScrollLeft - 2;
  };

  const scrollSlider = (direction) => {
    viewport.scrollBy({
      left: direction * getScrollAmount(),
      behavior: reducedMotionQuery.matches ? "auto" : "smooth"
    });
  };

  controls.hidden = false;
  previousButton.addEventListener("click", () => scrollSlider(-1));
  nextButton.addEventListener("click", () => scrollSlider(1));
  viewport.addEventListener("scroll", updateControls, { passive: true });
  viewport.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      scrollSlider(event.key === "ArrowLeft" ? -1 : 1);
    }
  });
  window.addEventListener("resize", updateControls);
  updateControls();
})();
