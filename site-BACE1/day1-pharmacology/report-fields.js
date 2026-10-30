/* report-fields.js — Day 1 report layout (BACE1). */
window.REPORT_FIELDS = [
  { section: "Task 1 — Concentration-Response Analysis" },
  { qid: "d1t1-pic50", label: "1.1.a  pIC50 for each compound; most potent compound", type: "text" },
  { qid: "d1t1-graph", label: "1.1.b  Concentration-response curves for D18 and D22", type: "image" },
  { qid: "d1t1-fit", label: "1.1.c  Hill fit: IC50, Hill slope, Emax; comment on fit quality", type: "text" },
  { qid: "d1t1-shift", label: "1.1.d  Three mechanistic explanations for the D19 cell/enzyme shift", type: "text" },

  { section: "Task 2 — Selectivity Panel" },
  { qid: "d1t2-catd", label: "1.2.a  Importance of CatD selectivity; best-selectivity compound", type: "text" },
  { qid: "d1t2-herg", label: "1.2.b  Is hERG binding data alone sufficient? What else is needed?", type: "text" },

  { section: "Task 3 — 100-Compound Potency & Selectivity Screen" },
  {
    prefix: "d1t3", label: "1.3.a  Potency & selectivity screening decisions (100 compounds)", type: "verdict-table",
    dataGlobal: "TASK3_SCREEN", idKey: "Compound ID", nameKeys: ["Compound ID", "Series"]
  },
  { qid: "d1t3-selectivity-rationale", label: "1.3.b  Why do the selectivity assays (BACE2, Cathepsin D/B, hERG, σ1) matter for this target?", type: "text" },
  { qid: "d1t3-sar", label: "1.3.c  Do any obvious structure–activity relationships emerge from the data?", type: "text" },
  { qid: "d1t3-cdtp-changes", label: "1.3.d  In light of this data, do you want to make any changes to your CDTP? Explain", type: "text" },
  { qid: "d1t3-amber-actions", label: "1.3.e  For any borderline compounds, what actions or data would help you decide?", type: "text" },
  { qid: "d1t3-further-experiments", label: "1.3.f  What further experiments would you want before the next decision point?", type: "text" }
];
