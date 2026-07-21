(function () {
  const config = window.TrackMoneySiteConfig || {};
  const email = config.supportEmail || "support@trackmoney.app";

  document.querySelectorAll("[data-support-email]").forEach((node) => {
    node.textContent = email;
    node.href = `mailto:${email}`;
  });

  document.querySelectorAll("[data-legal-name]").forEach((node) => {
    node.textContent = config.developerLegalName || "[Apple Developer Account Legal Name]";
  });

  document.querySelectorAll("[data-updated]").forEach((node) => {
    node.textContent = config.lastUpdated || "July 16, 2026";
  });

  document.querySelectorAll("[data-app-store-link]").forEach((node) => {
    const url = String(config.appStoreURL || "").trim();
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
