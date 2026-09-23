(function () {
  "use strict";

  /* Indicador de abierto / cerrado ahora (horario real de Booksy, zona horaria de Canarias) */
  var statusEls = document.querySelectorAll("[data-open-status]");
  if (statusEls.length) {
    var HOURS = {
      0: [[600, 840], [870, 1080]], // domingo 10:00–14:00, 14:30–18:00
      1: [[600, 1200]],             // lunes 10:00–20:00
      2: [[600, 1200]],             // martes
      3: [[600, 1200]],             // miércoles
      4: [[600, 1200]],             // jueves
      5: [[600, 840], [870, 1200]], // viernes 10:00–14:00, 14:30–20:00
      6: [[600, 840], [870, 1080]]  // sábado 10:00–14:00, 14:30–18:00
    };
    var WEEKDAY_INDEX = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

    var getCanaryNow = function () {
      try {
        var parts = new Intl.DateTimeFormat("en-US", {
          timeZone: "Atlantic/Canary",
          weekday: "short",
          hour: "numeric",
          minute: "numeric",
          hour12: false
        }).formatToParts(new Date());
        var map = {};
        parts.forEach(function (p) { map[p.type] = p.value; });
        var hour = parseInt(map.hour, 10);
        if (hour === 24) hour = 0;
        return { day: WEEKDAY_INDEX[map.weekday], minutes: hour * 60 + parseInt(map.minute, 10) };
      } catch (e) {
        var now = new Date();
        return { day: now.getDay(), minutes: now.getHours() * 60 + now.getMinutes() };
      }
    };

    var now = getCanaryNow();
    var ranges = HOURS[now.day] || [];
    var isOpen = ranges.some(function (r) { return now.minutes >= r[0] && now.minutes < r[1]; });

    statusEls.forEach(function (el) {
      var dot = el.querySelector(".status-dot");
      var text = el.querySelector(".status-text");
      if (dot) dot.classList.add(isOpen ? "is-open" : "is-closed");
      if (text) text.textContent = isOpen ? "Abierto ahora" : "Cerrado ahora";
    });
  }

  /* Rotación de fotos del hero (crossfade) */
  var heroPhotos = document.querySelectorAll(".hero-photo");
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (heroPhotos.length > 1 && !reduceMotion) {
    var currentPhoto = 0;
    setInterval(function () {
      heroPhotos[currentPhoto].classList.remove("is-active");
      currentPhoto = (currentPhoto + 1) % heroPhotos.length;
      heroPhotos[currentPhoto].classList.add("is-active");
    }, 4500);
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
