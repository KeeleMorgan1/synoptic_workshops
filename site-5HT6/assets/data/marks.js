/* marks.js (data) — mark allocation for the 5HT6 site.
   Generated from 5HT6_mark_allocation.xlsx. One entry per answer box, keyed by
   the box's ID (its data-qid, or the table/graph ID used in report-fields.js).
   To change a mark, edit the number here; assets/js/marks.js does the rest.
   A box missing from this list shows no mark and is reported in the browser
   console, so nothing drops out silently. */
window.MARKS = {
  "d1t1-ic50": 5,
  "d1t1-graph": 5,
  "d1t1-report": 10,
  "d1t2a-analysis": 5,
  "d1t2a-graph": 5,
  "d1t2b-graph": 5,
  "d1t2b-report": 10,
  "d1t3": 20,
  "d1t3-selectivity-rationale": 10,
  "d1t3-sar": 10,
  "d1t3-cdtp-changes": 5,
  "d1t3-amber-actions": 5,
  "d1t3-further-experiments": 5,
  "d2t1": 10,
  "d2t1-assay-rationale": 5,
  "d2t1-sar": 10,
  "d2t1-cdtp-changes": 5,
  "d2t1-borderline-actions": 5,
  "d2t2-graph": 5,
  "d2t2-pk": 10,
  "d2t2-working": 5,
  "d2t3": 10,
  "d2t3-assay-rationale": 10,
  "d2t3-sar": 10,
  "d2t3-cdtp-changes": 5,
  "d2t3-borderline-actions": 5,
  "d2t3-further-experiments": 5,
  "d3t1-explain-models": 10,
  "d3t1-cdtp-criteria": 10,
  "d3t2": 10,
  "d3t2-sar": 5,
  "d3t2-cdtp-changes": 5,
  "d3t2-borderline-actions": 5,
  "d3t2-further-experiments": 5,
  "d3t3-explain-models": 10,
  "d3t3-cdtp-criteria": 10,
  "d3t4": 10,
  "d3t4-sar": 5,
  "d3t4-cdtp-changes": 5,
  "d3t4-borderline-actions": 5,
  "d3t4-further-experiments": 5,
  "d4t1a-graph": 5,
  "d4t1a": 10,
  "d4t1b-graph": 5,
  "d4t1b": 10,
  "d4t1c-graph": 5,
  "d4t1c": 10,
  "d4t1d-graph": 5,
  "d4t1d": 10,
  "d4t1-working": 5,
  "d4t2-recommendation-check": 10,
  "d4t2-packaging": 10,
  "d4t2-formulation-approach": 10,
  "d4t2-further-cmc": 5,
  "d5t1-concl": 24,
  "d5-spectra-parent": 20,
  "d5-spectra-m1": 20,
  "d5-spectra-m2": 20,
  "d5t2-isomer-resolution": 5,
  "d5t2-phase-pattern": 6,
  "d5t2-concerns": 5,
  "d6t1": 10,
  "d6t1-justification": 20,
  "d6t1-not-progressing": 15,
  "d6t2-dosing-regimes": 15,
  "d6t2-clinical-outcomes": 10,
  "d6t2-superiority": 10,
  "d6t3-cdtp-evolution": 10,
  "d6t3-remaining-risks": 10
};

/* Where to show marks for items that aren't a single box on the page.
   Keys are IDs from MARKS above; values are CSS selectors (first match wins,
   so the same ID can point at elements on different pages). */
window.MARK_TARGETS = {
  "d5-spectra-parent": ".section-header.sh-parent",
  "d5-spectra-m1": ".section-header.sh-p1",
  "d5-spectra-m2": ".section-header.sh-p2"
};

/* One combined label for several IDs, e.g. the Day 5 link to the spectra
   tool, so the Task 1 total on that page includes the spectra marks. */
window.MARK_GROUPS = [
  { selector: 'a[href="spectra-tool.html"]',
    ids: ["d5-spectra-parent", "d5-spectra-m1", "d5-spectra-m2"],
    text: "spectral assignments in the tool" }
];
