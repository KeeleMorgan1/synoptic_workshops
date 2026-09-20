/* report-fields.js — Day 1 report layout (BRD4). */
window.REPORT_FIELDS = [
  { section: "Task 1 — Bromodomain Binding IC50 Curve" },
  { qid: "d1t1-ic50", label: "IC50 estimate (nM) and how it was derived", type: "text" },
  { qid: "d1t1-graph", label: "IC50 curve graph", type: "image" },
  { qid: "d1t1-report", label: "One-page report (assay outline + interpretation)", type: "text" },

  { section: "Task 2 — Cellular Functional Assay" },
  { qid: "d1t2-analysis", label: "Narrative analysis (potency & efficacy of each compound)", type: "text" },
  { qid: "d1t2-graph", label: "Cellular assay graph", type: "image" },
  { qid: "d1t2-report", label: "Cellular IC50 estimates + assay principles + interpretation", type: "text" },

  { section: "Task 3 — Bromodomain Binding, Cellular Potency & Selectivity Screen" },
  {
    prefix: "d1t3", label: "Compound screening decisions (100 compounds)", type: "verdict-table",
    dataGlobal: "TASK3_DATA", idKey: "ID", nameKeys: ["ID", "Series"]
  },
  { qid: "d1t3-selectivity-rationale", label: "Why might the BET-family selectivity assays used here (BRD2, BRD3, BRDT, BRD9, BD1/BD2) matter in the context of this drug target?", type: "text" },
  { qid: "d1t3-cellular-rationale", label: "Why might a compound with strong biochemical BD1 binding still show weak cellular potency?", type: "text" },
  { qid: "d1t3-sar", label: "What obvious structure–activity relationships emerge from the data?", type: "text" },
  { qid: "d1t3-cdtp-changes", label: "Has anything here changed your CDTP? If so, how?", type: "text" },
  { qid: "d1t3-amber-actions", label: "For any amber compounds, what actions or data would help you decide?", type: "text" },
  { qid: "d1t3-further-experiments", label: "What further experiments would you want before the next decision point?", type: "text" }
];
