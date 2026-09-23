(function () {
  "use strict";

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
