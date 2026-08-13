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
    node.textContent = config.lastUpdated || "August 8, 2026";
  });

  document.querySelectorAll("[data-app-store-link]").forEach((node) => {
    const fallbackURL = String(node.getAttribute("href") || "").trim();
    const url = String(config.appStoreURL || fallbackURL).trim();
    if (url.startsWith("https://")) {
      node.href = url;
      node.removeAttribute("aria-disabled");
      node.textContent = "Download on the App Store";
      return;
    }

    node.href = "#download-unavailable";
    node.setAttribute("aria-disabled", "true");
    node.textContent = "Coming to the App Store";
    node.addEventListener("click", (event) => event.preventDefault());
  });
})();
