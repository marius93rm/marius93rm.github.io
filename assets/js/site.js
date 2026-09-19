(() => {
  "use strict";

  document.documentElement.classList.add("js");

  const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

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

  document.querySelectorAll("[data-carousel]").forEach((carousel) => {
    const viewport = carousel.querySelector("[data-carousel-viewport]");
    const track = carousel.querySelector("[data-carousel-track]");
    const emptyState = carousel.querySelector("[data-carousel-empty]");
    const controls = carousel.querySelector("[data-carousel-controls]");
    const previousButton = carousel.querySelector("[data-carousel-prev]");
    const nextButton = carousel.querySelector("[data-carousel-next]");
    const status = carousel.querySelector("[data-carousel-status]");

    if (!viewport || !track || !emptyState || !controls || !previousButton || !nextButton || !status) {
      return;
    }

    const slides = Array.from(track.children);

    if (slides.length === 0) {
      controls.hidden = true;
      emptyState.hidden = false;
      return;
    }

    let currentIndex = 0;
    controls.hidden = false;
    emptyState.hidden = true;

    const updateCarousel = (nextIndex) => {
      currentIndex = Math.max(0, Math.min(nextIndex, slides.length - 1));
      const currentSlide = slides[currentIndex];

      slides.forEach((slide, index) => {
        slide.setAttribute("aria-current", index === currentIndex ? "true" : "false");
      });

      currentSlide.scrollIntoView({
        behavior: reducedMotionQuery.matches ? "auto" : "smooth",
        block: "nearest",
        inline: "start"
      });

      previousButton.disabled = currentIndex === 0;
      nextButton.disabled = currentIndex === slides.length - 1;
      status.textContent = `${currentIndex + 1} of ${slides.length}`;
    };

    previousButton.addEventListener("click", () => updateCarousel(currentIndex - 1));
    nextButton.addEventListener("click", () => updateCarousel(currentIndex + 1));

    viewport.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        updateCarousel(currentIndex - 1);
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        updateCarousel(currentIndex + 1);
      }
    });

    updateCarousel(0);
  });
})();
