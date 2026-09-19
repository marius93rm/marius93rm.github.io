(() => {
  "use strict";

  /* Navigation ------------------------------------------------------------- */
  const menuButton = document.querySelector("[data-menu-toggle]");
  const primaryNavigation = document.querySelector("#primary-navigation");

  if (menuButton && primaryNavigation) {
    const setMenuState = (isOpen, returnFocus = false) => {
      primaryNavigation.classList.toggle("is-open", isOpen);
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");

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
