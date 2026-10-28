(function () {
  if (new URLSearchParams(window.location.search).get("embed") === "1") {
    document.body.classList.add("embedded");
  }

  const config = window.TrackMoneySiteConfig || {};
  const email = config.supportEmail || "airproductlab@gmail.com";

  document.querySelectorAll("[data-support-email]").forEach((node) => {
    node.textContent = email;
    node.href = `mailto:${email}`;
  });

  document.querySelectorAll("[data-legal-name]").forEach((node) => {
    node.textContent = config.developerLegalName || "yehuanwei";
  });

  document.querySelectorAll("[data-updated]").forEach((node) => {
    const date = new Date((config.lastUpdatedISO || "2026-08-09") + "T12:00:00Z");
    node.textContent = new Intl.DateTimeFormat(document.documentElement.lang || "en", { dateStyle: "long", timeZone: "UTC" }).format(date);
  });

  document.querySelectorAll("[data-app-store-link]").forEach((node) => {
    const fallbackURL = String(node.getAttribute("href") || "").trim();
    const url = String(config.appStoreURL || fallbackURL).trim();
    if (url.startsWith("https://")) {
      node.href = url;
      node.removeAttribute("aria-disabled");
      return;
    }

    node.href = "#download-unavailable";
    node.setAttribute("aria-disabled", "true");
    node.textContent = node.getAttribute("data-unavailable-label") || "Coming to the App Store";
    node.addEventListener("click", (event) => event.preventDefault());
  });
})();
