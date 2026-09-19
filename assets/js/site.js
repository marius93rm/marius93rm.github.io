(() => {
  "use strict";

  document.documentElement.classList.add("js");

  const menuButton = document.querySelector("[data-menu-toggle]");
  const primaryNavigation = document.querySelector("#primary-navigation");

  if (menuButton && primaryNavigation) {
    const closeMenu = ({ returnFocus = false } = {}) => {
      primaryNavigation.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");

      if (returnFocus) {
        menuButton.focus();
      }
    };

    menuButton.addEventListener("click", () => {
      const isOpen = primaryNavigation.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });

    primaryNavigation.addEventListener("click", (event) => {
      if (event.target instanceof HTMLAnchorElement) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && primaryNavigation.classList.contains("is-open")) {
        closeMenu({ returnFocus: true });
      }
    });
  }

  const teachingSlider = document.querySelector("[data-teaching-slider]");

  if (teachingSlider) {
    const viewport = teachingSlider.querySelector("[data-teaching-viewport]");
    const track = teachingSlider.querySelector("[data-content-slot='courses']");
    const controls = teachingSlider.querySelector("[data-teaching-controls]");
    const previousButton = teachingSlider.querySelector("[data-teaching-prev]");
    const nextButton = teachingSlider.querySelector("[data-teaching-next]");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (viewport && track && controls && previousButton && nextButton) {
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
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollSlider(-1);
        }

        if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollSlider(1);
        }
      });
      window.addEventListener("resize", updateControls);
      updateControls();
    }
  }
})();
