# Landing Page Screenshots

`index.html` references these files. They are current English-language Pro
simulator captures made on August 8, 2026. When retaking a screenshot, overwrite
the matching file and update the cache key in `index.html`. JPEG quality ~88
keeps the page light; source PNGs are kept under
`tmp/spendnote-demo-assets/screenshots/`.

| File | App screen | Used in | Status |
| --- | --- | --- | --- |
| `home.jpg` | Home (month overview, review, insights, top categories) | Hero + "A look inside" | Current screenshot |
| `transactions.jpg` | Transactions (search, filters, recurring bills, day list) | "A look inside" | Current screenshot |
| `budgets.jpg` | Budgets (overall and category budget progress) | "A look inside" | Current screenshot |
| `settings.jpg` | Settings (Pro status, preferences, widgets, data tools) | "A look inside" | Current screenshot |
| `insights.jpg` | Insights overview (snapshot, drivers, category breakdown) | Insights | Current screenshot |
| `insights-trend.jpg` | Insights trend and category detail | Insights | Current screenshot |
| `monthly-review.jpg` | Monthly Review (period comparison and filters) | Monthly Review | Current screenshot |
| `recurring.jpg` | Recurring Control (commitments, categories, upcoming costs) | Recurring Control | Current screenshot |

Guidelines:

- Use English-language screenshots — the page targets markets outside mainland China.
- Any iPhone screenshot resolution works (e.g. 1206×2622, 1290×2796); the frames
  scale images to fit. Full-screen captures including the status bar are fine.
- Convert replacements to JPEG quality ~88 (e.g. `sips -s format jpeg -s
  formatOptions 88 shot.png --out name.jpg`) to keep the page under ~4 MB total.
- Capture real-looking data, but nothing identifiable.
