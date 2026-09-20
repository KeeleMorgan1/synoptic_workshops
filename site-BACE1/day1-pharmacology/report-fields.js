/* report-fields.js — Day 1 report layout (BACE1). */
window.REPORT_FIELDS = [
  { section: "Task 1 — Concentration-Response Analysis" },
  { qid: "d1t1a-pic50", label: "Task 1a. pIC50 for each compound; most potent compound", type: "text" },
  { qid: "d1t1b-graph", label: "Task 1b. Concentration-response curves for D18 and D22", type: "image" },
  { qid: "d1t1b-fit", label: "Task 1b. Hill fit: IC50, Hill slope, Emax; comment on fit quality", type: "text" },
  { qid: "d1t1c-shift", label: "Task 1c. Three mechanistic explanations for the D19 cell/enzyme shift", type: "text" },

  { section: "Task 2 — Selectivity Panel" },
  { qid: "d1t2d-catd", label: "Task 1d. Importance of CatD selectivity; best-selectivity compound", type: "text" },
  { qid: "d1t2e-herg", label: "Task 1e. Is hERG binding data alone sufficient? What else is needed?", type: "text" },

  { section: "Task 3 — 100-Compound Potency & Selectivity Screen" },
  { qid: "d1t3a-triage", label: "How many compounds meet your criteria; best/worst series", type: "text" },
  { qid: "d1t3b-sar", label: "Structure-activity trends across the full series", type: "text" },
  { qid: "d1t3c-next", label: "Borderline compounds: drop or flag for follow-up?", type: "text" }
];
