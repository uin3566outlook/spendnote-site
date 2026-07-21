# Landing Page Screenshots

`index.html` references these files. When retaking a screenshot, overwrite the
matching file — no HTML changes needed. JPEG (quality ~88) keeps the page light;
the original full-size PNGs from the first capture are archived in
`tmp/landing-assets-originals/`.

| File | App screen | Used in | Status |
| --- | --- | --- | --- |
| `home.jpg` | Home tab (month overview, budget progress, top categories) | Hero + "A look inside" | Real screenshot |
| `add-expense.jpg` | Add Expense (category-first picker) | "A look inside" | Real screenshot |
| `transactions.jpg` | Transactions tab (search, filters, day list) | "A look inside" | Real screenshot |
| `budgets.jpg` | Budgets tab (pace, forecast, daily allowance) | "A look inside" | Real screenshot |
| `insights.jpg` | Insights overview (category breakdown chart) | Insights section | Real screenshot |
| `monthly-review.jpg` | Monthly review (recap, no-spend days, top category) | Insights section | Real screenshot |
| `share-card.jpg` | Share card sheet (the blue card with amount-detail picker) | Share cards section | Real screenshot |
| `share-moments.jpg` | Shareable moments list in Monthly review | Share cards section | Real screenshot |
| `widgets.jpg` | Widget settings preview (small / medium / Lock Screen) | Widgets section | Real screenshot |

Guidelines:

- Use English-language screenshots — the page targets markets outside mainland China.
- Any iPhone screenshot resolution works (e.g. 1206×2622, 1290×2796); the frames
  scale images to fit. Full-screen captures including the status bar are fine.
- Convert replacements to JPEG quality ~88 (e.g. `sips -s format jpeg -s
  formatOptions 88 shot.png --out name.jpg`) to keep the page under ~4 MB total.
- Capture real-looking data, but nothing identifiable.
