/* report-fields.js — Day 1 report layout (PDE4). */
window.REPORT_FIELDS = [
  { section: "Task 1 — PDE4 cAMP Hydrolysis IC50 Curve" },
  { qid: "d1t1-ic50", label: "IC50 estimate (nM) and how it was derived", type: "text" },
  { qid: "d1t1-graph", label: "IC50 curve graph", type: "image" },
  { qid: "d1t1-report", label: "One-page report (assay outline + interpretation)", type: "text" },

  { section: "Task 2 — Subtype & Cross-Family Selectivity Comparison" },
  { qid: "d1t2-analysis", label: "Comparison of PDE4B/PDE4D ratios and implications", type: "text" },
  { qid: "d1t2-selectivity", label: "Cross-family selectivity panel commentary", type: "text" },

  { section: "Task 3 — PDE Enzyme Assay Screen" },
  {
    prefix: "d1t3", label: "Compound screening decisions (100 compounds)", type: "verdict-table",
    dataGlobal: "TASK3_DATA", idKey: "ID", nameKeys: ["ID", "Series"]
  },
  { qid: "d1t3-selectivity-rationale", label: "Why might the selectivity assays used here (PDE4 subtypes, PDE1/2/3/5) matter in the context of this drug target?", type: "text" },
  { qid: "d1t3-sar", label: "What obvious structure–activity relationships emerge from the data?", type: "text" },
  { qid: "d1t3-cdtp-changes", label: "Has anything here changed your CDTP? If so, how?", type: "text" },
  { qid: "d1t3-amber-actions", label: "For any amber compounds, what actions or data would help you decide?", type: "text" },
  { qid: "d1t3-further-experiments", label: "What further experiments would you want before the next decision point?", type: "text" }
];
