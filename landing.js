/* SpendNote landing interactions — zero-dependency, privacy-safe (no network). */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- nav border on scroll ---------- */
  var nav = document.querySelector(".nav");
  function onScrollNav() {
    nav.classList.toggle("scrolled", window.scrollY > 12);
  }
  window.addEventListener("scroll", onScrollNav, { passive: true });
  onScrollNav();

  /* ---------- reveal on scroll ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
    /* Safety net: never leave above-the-fold content hidden if IO stalls. */
    setTimeout(function () {
      revealEls.forEach(function (el) {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.95) {
          el.classList.add("in");
        }
      });
    }, 1300);
  }

  if (reduceMotion) return;

  /* ---------- hero phone: idle float + pointer tilt ---------- */
  var stage = document.querySelector(".hero-stage");
  var phone = document.getElementById("phoneTilt");
  var finePointer = window.matchMedia("(pointer: fine)").matches;

  if (stage && phone) {
    var tiltX = 0, tiltY = 0, targetX = 0, targetY = 0;

    if (finePointer) {
      stage.addEventListener("pointermove", function (event) {
        if (!window.matchMedia("(min-width: 1021px)").matches) return;
        var rect = stage.getBoundingClientRect();
        var x = (event.clientX - rect.left) / rect.width - 0.5;
        var y = (event.clientY - rect.top) / rect.height - 0.5;
        targetY = x * 7;    /* rotateY */
        targetX = -y * 5;   /* rotateX */
      });
      stage.addEventListener("pointerleave", function () {
        targetX = 0;
        targetY = 0;
      });
    }

    (function floatLoop(now) {
      var rect = phone.getBoundingClientRect();
      var onScreen = rect.bottom > -80 && rect.top < window.innerHeight + 80;
      if (onScreen) {
        var float = Math.sin(now / 1500) * 7;
        tiltX += (targetX - tiltX) * 0.08;
        tiltY += (targetY - tiltY) * 0.08;
        phone.style.transform =
          "perspective(1000px) translateY(" + float.toFixed(2) + "px)" +
          " rotateX(" + tiltX.toFixed(3) + "deg) rotateY(" + tiltY.toFixed(3) + "deg)";
      }
      requestAnimationFrame(floatLoop);
    })(0);
  }

  /* ---------- scroll parallax on screenshot frames ---------- */
  var parallaxEls = Array.prototype.map.call(
    document.querySelectorAll("[data-parallax]"),
    function (el) {
      return {
        host: el,
        frame: el.querySelector(".phone, .share-shot"),
        factor: parseFloat(el.getAttribute("data-parallax")) || 0
      };
    }
  ).filter(function (item) { return item.frame && item.factor !== 0; });

  if (parallaxEls.length) {
    var ticking = false;
    var applyParallax = function () {
      ticking = false;
      var vh = window.innerHeight;
      parallaxEls.forEach(function (item) {
        var rect = item.host.getBoundingClientRect();
        if (rect.bottom < -120 || rect.top > vh + 120) return;
        var delta = rect.top + rect.height / 2 - vh / 2;
        var y = Math.max(-64, Math.min(64, delta * item.factor));
        item.frame.style.transform = "translateY(" + y.toFixed(1) + "px)";
      });
    };
    var requestParallax = function () {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(applyParallax);
      }
    };
    window.addEventListener("scroll", requestParallax, { passive: true });
    window.addEventListener("resize", requestParallax);
    applyParallax();
  }
})();
