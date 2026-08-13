# SpendNote Landing And Legal Pages

This folder is the static, zero-dependency source for the public product page and the legal/support pages required by the PRD.

## Files

- `index.html` + `landing.css` + `landing.js` — the marketing page (light visual design matching the app's design tokens, real app screenshots, scroll-reveal, social meta tags). No build step, no external fonts, no CDN, no analytics.
- `screens/` — the eight current app screenshots used by the page, plus a README mapping each filename to the app screen it should show.
- `og-image-v5.jpg` — 1200×630 social image used by the main landing page metadata. `og-image-v4.jpg` is retained as the previous version.
- `share-2026-07.html` — legacy campaign URL that now redirects to the current landing page.
- `spendnote-app-icon.png` and `spendnote-app-icon-256.png` are the exact App Icon source and web-sized favicon; `spendnote-mark-256.png` is a centered crop used in the site header so the same mark remains legible at small sizes. All three derive from `TrackMoney/Assets.xcassets/AppIcon.appiconset/AppIcon-1024.png`.
- `styles.css` — shared stylesheet for the legal/support pages only; the landing page does not use it.
- `privacy.html`, `terms.html`, `support.html` — legal and support pages. The Terms of Service page includes the subscription/billing terms; `subscription.html` is kept only as a redirect to `terms.html` so old links keep working. Both the privacy policy and the terms ship in every language the app supports (`privacy-zh-Hans.html` / `privacy-zh-Hant.html`, `terms-zh-Hans.html` / `terms-zh-Hant.html`). The app opens the variant matching its current language (`AppLegalIdentity.localizedPrivacyPolicyURL` / `localizedTermsOfServiceURL`) with an `?embed=1` query flag, which hides the site header/footer inside the app's web view; keep the language variants' content and section numbering in sync when editing.
- `config.js` + `site.js` — deployment values injected into `data-app-store-link`, `data-legal-name`, `data-support-email`, and `data-updated` placeholders on every page.

## Deployment (GitHub Pages)

This site is deployed as GitHub Pages from the public repository `uin3566outlook/spendnote-site`, branch `gh-pages`:

- Privacy Policy: `https://uin3566outlook.github.io/spendnote-site/privacy.html` (already wired into `TrackMoney/Info.plist` → `PrivacyPolicyURL`; the in-app Settings → Privacy Policy page loads this URL in a web view and falls back to the bundled copy if it is unset).
- Support / Terms / Subscription / landing pages live at the same base URL.

To redeploy after editing anything here: copy the folder contents (excluding `.DS_Store`, keep `.nojekyll`) into a checkout of that repo's `gh-pages` branch, commit, and push. Pages publishes within about a minute.

Before public deployment:

1. Replace every value in `config.js` with the final App Store campaign link, developer legal name, support mailbox, and review date.
2. Set `TrackMoney/Info.plist` → `PrivacyPolicyURL` to the final public HTTPS URL for `privacy.html`. The app only exposes the web-policy link when this value is valid.
3. Have the Privacy Policy, Terms of Service, and Subscription Terms reviewed for the developer's actual legal entity, markets, and data practices.
4. Host this directory on a public HTTPS domain. Use the resulting URLs in App Store Connect, the App Store subscription product configuration, and the app's legal links.
5. Keep the absolute `og:image` / `twitter:image` URLs aligned with the production domain — social crawlers require absolute URLs.
6. Verify the App Store button works, legal pages are publicly accessible without login, no placeholder text remains, and the main social preview renders correctly.

The page deliberately has no form, analytics SDK, cookie banner, external payment link, or bank-connection flow. It should not be published while `config.js` still contains placeholder identity or support details.
