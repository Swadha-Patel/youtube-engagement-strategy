# YouTube engagement strategy

**By Swadha Patel · Independent analytics project · Synthetic data**

## The question
Should a long-form creator prioritize discovery, thumbnail packaging, or viewing depth? This dashboard follows impression-origin views through to watch time and compares traffic sources and device segments.

## Explore
Filter four weeks of activity by device and Browse, Search, or Suggested traffic. Inspect weighted CTR and average duration, watch-time trends, and watch hours per 1,000 impressions. The scenario planner changes relative CTR and duration while holding impressions fixed.

## Data and metrics
24 deterministic, illustrative aggregate rows: four weeks × three sources × two devices. This is not a real channel export or YouTube API integration. Mobile refers to the YouTube app. External traffic, notifications, Shorts, ads, and non-counted impressions are outside scope.

- CTR = sum(views) / sum(impressions), not the average of segment CTRs.
- Mean duration = sum(watchMinutes) / sum(views).
- Watch hours = sum(watchMinutes) / 60.
- Scenario hours = impressions × adjusted CTR × adjusted mean duration / 60.

Baseline: 179,200 impressions, 9,814 scoped views, approximately 642.87 watch hours. Search has the highest watch hours per 1,000 impressions in this constructed sample. This is a diagnostic example, not a recommendation based on actual channel performance.

## Interpretation
A relative 10% CTR improvement changes 5% to 5.5%, not 15%. Simultaneous CTR and duration changes compound; thumbnail changes may also change audience mix. The scenario is conditional, not causal evidence or a forecast. No revenue, unique-viewer, or retention-curve claim is inferred.

## References
- [YouTube impressions and watch time](https://support.google.com/youtube/answer/9314486?hl=en)
- [YouTube engagement analytics](https://support.google.com/youtube/answer/9313698?hl=en)

References define the metrics, not the illustrative values.

## Run locally

No build step, API keys, or JavaScript dependencies are needed. From the repository folder:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. You can also open `index.html` directly. Optional hosted fonts fall back to system fonts offline.

## Files

- `index.html`: standalone dashboard entry point
- `dashboards.js`: rendering, filters, scenarios, and methodology panels (shared portfolio renderer)
- `dashboard-math.js`: pure calculations, shared with the portfolio
- `dashboard-data.json` and `dashboard-data.js`: the same illustrative dataset in inspectable and browser-ready forms
- `*-illustrative-data.csv`: inspectable source values
- `test.cjs`: numerical and data-consistency checks, run with `node test.cjs`

The shared renderer contains both portfolio dashboard templates; this repository loads only its own dataset and project view. No data leaves your browser.
