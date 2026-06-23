(function () {
  "use strict";

  const body = document.body;
  const header = document.querySelector("#header");
  const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
  const scrollTop = document.querySelector("#scroll-top");

  function toggleScrolled() {
    if (!header || (!header.classList.contains("scroll-up-sticky") && !header.classList.contains("sticky-top") && !header.classList.contains("fixed-top"))) {
      return;
    }

    body.classList.toggle("scrolled", window.scrollY > 100);
  }

  function toggleScrollTop() {
    if (scrollTop) {
      scrollTop.classList.toggle("active", window.scrollY > 100);
    }
  }

  function setMobileNav(open) {
    body.classList.toggle("mobile-nav-active", open);

    if (!mobileNavToggle) return;

    mobileNavToggle.setAttribute("aria-expanded", String(open));
    mobileNavToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");

    const icon = mobileNavToggle.querySelector("use");
    if (icon) {
      icon.setAttribute("href", open ? "#icon-close" : "#icon-menu");
    }
  }

  document.addEventListener("scroll", () => {
    toggleScrolled();
    toggleScrollTop();
  }, { passive: true });

  window.addEventListener("load", () => {
    toggleScrolled();
    toggleScrollTop();
  });

  if (mobileNavToggle) {
    mobileNavToggle.addEventListener("click", () => {
      setMobileNav(!body.classList.contains("mobile-nav-active"));
    });
  }

  document.querySelectorAll("#navmenu a").forEach((link) => {
    link.addEventListener("click", () => {
      if (body.classList.contains("mobile-nav-active")) {
        setMobileNav(false);
      }
    });
  });

  if (scrollTop) {
    scrollTop.addEventListener("click", (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  if (typeof GLightbox === "function" && document.querySelector(".glightbox")) {
    GLightbox({ selector: ".glightbox" });
  }
})();
