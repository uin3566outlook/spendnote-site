# TrackMoney Landing And Legal Pages

This folder is a static, zero-dependency source for the pre-launch product page and the public legal/support pages required by the PRD.

## Files

- `index.html` + `landing.css` + `landing.js` — the marketing page (light visual design matching the app's design tokens, real app screenshots, scroll-reveal, social meta tags). No build step, no external fonts, no CDN, no analytics.
- `screens/` — the nine app screenshots used by the page, plus a README mapping each filename to the app screen it should show. Solid-color placeholders are committed; overwrite them with real English-language screenshots before deployment.
- `og-image.png` — 1200×630 social share image referenced by the Open Graph / Twitter Card meta tags.
- `app-icon.png` (source, 1024×1024) and `app-icon-256.png` (web-sized derivative used by the page and favicon). Regenerate the small one with `sips -Z 256 app-icon.png --out app-icon-256.png` if the icon changes.
- `styles.css` — shared stylesheet for the legal/support pages only; the landing page does not use it.
- `privacy.html`, `terms.html`, `support.html` — legal and support pages. The Terms of Service page includes the subscription/billing terms; `subscription.html` is kept only as a redirect to `terms.html` so old links keep working. The privacy policy also ships in every language the app supports: `privacy-zh-Hans.html` (简体中文) and `privacy-zh-Hant.html` (繁體中文). The app opens the variant matching its current language (`AppLegalIdentity.localizedPrivacyPolicyURL`) with an `?embed=1` query flag, which hides the site header/footer inside the app's web view; keep the three privacy pages' content and section numbering in sync when editing.
- `config.js` + `site.js` — deployment values injected into `data-app-store-link`, `data-legal-name`, `data-support-email`, and `data-updated` placeholders on every page.

## Deployment (GitHub Pages)

This site is deployed as GitHub Pages from the public repository `uin3566outlook/trackmoney-site`, branch `gh-pages`:

- Privacy Policy: `https://uin3566outlook.github.io/trackmoney-site/privacy.html` (already wired into `TrackMoney/Info.plist` → `PrivacyPolicyURL`; the in-app Settings → Privacy Policy page loads this URL in a web view and falls back to the bundled copy if it is unset).
- Support / Terms / Subscription / landing pages live at the same base URL.

To redeploy after editing anything here: copy the folder contents (excluding `.DS_Store`, keep `.nojekyll`) into a checkout of that repo's `gh-pages` branch, commit, and push. Pages publishes within about a minute.

Before public deployment:

1. Replace every value in `config.js` with the final App Store campaign link, developer legal name, support mailbox, and review date.
2. Set `TrackMoney/Info.plist` → `PrivacyPolicyURL` to the final public HTTPS URL for `privacy.html`. The app only exposes the web-policy link when this value is valid.
3. Have the Privacy Policy, Terms of Service, and Subscription Terms reviewed for the developer's actual legal entity, markets, and data practices.
4. Host this directory on a public HTTPS domain. Use the resulting URLs in App Store Connect, the App Store subscription product configuration, and the app's legal links.
5. Replace the relative `og:image` / `twitter:image` content in `index.html` with the absolute `https://` URL of `og-image.png` on the production domain — social crawlers require absolute URLs.
6. Verify the App Store button works, legal pages are publicly accessible without login, no placeholder text remains, and the share preview renders `og-image.png` correctly (e.g. via a social card validator).

The page deliberately has no form, analytics SDK, cookie banner, external payment link, or bank-connection flow. It should not be published while `config.js` still contains placeholder identity or support details.
