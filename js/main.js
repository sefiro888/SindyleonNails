(function () {
  "use strict";

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Presentación de fotos del hero con transición (Ken Burns) */
  var heroSlides = document.querySelectorAll(".hero-slide");
  if (heroSlides.length > 1 && !reduceMotion) {
    var currentSlide = 0;
    setInterval(function () {
      heroSlides[currentSlide].classList.remove("is-active");
      currentSlide = (currentSlide + 1) % heroSlides.length;
      heroSlides[currentSlide].classList.add("is-active");
    }, 5000);
  }

  /* Parallax sutil de la foto del hero al hacer scroll */
  var heroMedia = document.getElementById("heroMedia");
  if (heroMedia && !reduceMotion) {
    var slideshow = heroMedia.querySelector(".hero-slideshow");
    var ticking = false;
    window.addEventListener("scroll", function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          var offset = Math.min(window.scrollY * 0.15, 60);
          slideshow.style.transform = "translateY(" + offset + "px)";
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* Aparición progresiva al hacer scroll */
  var revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length) {
    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      revealEls.forEach(function (el) { observer.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add("is-visible"); });
    }
  }

  /* Menú hamburguesa (móvil) */
  var navToggle = document.getElementById("navToggle");
  var mobileNav = document.getElementById("mobileNav");

  if (navToggle && mobileNav) {
    var closeMobileNav = function () {
      mobileNav.hidden = true;
      navToggle.setAttribute("aria-expanded", "false");
    };
    var openMobileNav = function () {
      mobileNav.hidden = false;
      navToggle.setAttribute("aria-expanded", "true");
    };

    navToggle.addEventListener("click", function () {
      if (mobileNav.hidden) { openMobileNav(); } else { closeMobileNav(); }
    });
    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMobileNav);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !mobileNav.hidden) closeMobileNav();
    });
  }

  /* Filtros de galería */
  var filterButtons = document.querySelectorAll(".filter-btn");
  var galleryItems = document.querySelectorAll(".gallery-item");

  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterButtons.forEach(function (b) { b.classList.remove("is-active"); });
      btn.classList.add("is-active");

      var filter = btn.getAttribute("data-filter");
      galleryItems.forEach(function (item) {
        var cats = item.getAttribute("data-cat") || "";
        var show = filter === "all" || cats.indexOf(filter) !== -1;
        item.classList.toggle("is-hidden", !show);
      });
    });
  });

  /* Visor ampliado (solo en páginas que lo incluyen, p. ej. disenos.html) */
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightboxImg");
  var lightboxClose = document.getElementById("lightboxClose");

  if (lightbox && lightboxImg && lightboxClose) {
    var lastFocused = null;

    var openLightbox = function (src, alt) {
      lastFocused = document.activeElement;
      lightboxImg.src = src;
      lightboxImg.alt = alt || "";
      lightbox.hidden = false;
      lightboxClose.focus();
      document.body.style.overflow = "hidden";
    };

    var closeLightbox = function () {
      lightbox.hidden = true;
      lightboxImg.src = "";
      document.body.style.overflow = "";
      if (lastFocused) lastFocused.focus();
    };

    galleryItems.forEach(function (item) {
      item.addEventListener("click", function () {
        var full = item.getAttribute("data-full");
        var img = item.querySelector("img");
        openLightbox(full, img ? img.alt : "");
      });
    });

    lightboxClose.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
    });
  }
})();
