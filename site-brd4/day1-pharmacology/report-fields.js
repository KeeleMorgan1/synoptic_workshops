/* report-fields.js — Day 1 report layout (BRD4). */
window.REPORT_FIELDS = [
  { section: "Task 1 — Bromodomain Binding IC50 Curve" },
  { qid: "d1t1-ic50", label: "1.1.a  IC50 estimate (nM) and how it was derived", type: "text" },
  { qid: "d1t1-graph", label: "1.1.b  IC50 curve graph", type: "image" },
  { qid: "d1t1-report", label: "1.1.c  One-page report (assay outline + interpretation)", type: "text" },

  { section: "Task 2 — Cellular Functional Assay" },
  { qid: "d1t2-analysis", label: "1.2.a  Narrative analysis (potency & efficacy of each compound)", type: "text" },
  { qid: "d1t2-graph", label: "1.2.b  Cellular assay graph", type: "image" },
  { qid: "d1t2-report", label: "1.2.c  Cellular IC50 estimates + assay principles + interpretation", type: "text" },

  { section: "Task 3 — Bromodomain Binding, Cellular Potency & Selectivity Screen" },
  {
    prefix: "d1t3", label: "1.3.a  Compound screening decisions (100 compounds)", type: "verdict-table",
    dataGlobal: "TASK3_DATA", idKey: "ID", nameKeys: ["ID", "Series"]
  },
  { qid: "d1t3-selectivity-rationale", label: "1.3.b  Why might the BET-family selectivity assays used here (BRD2, BRD3, BRDT, BRD9, BD1/BD2) matter in the context of this drug target?", type: "text" },
  { qid: "d1t3-sar", label: "1.3.c  What obvious structure–activity relationships emerge from the data, including why strong biochemical BD1 binding can still give weak cellular potency?", type: "text" },
  { qid: "d1t3-cdtp-changes", label: "1.3.d  Has anything here changed your CDTP? If so, how?", type: "text" },
  { qid: "d1t3-amber-actions", label: "1.3.e  For any amber compounds, what actions or data would help you decide?", type: "text" },
  { qid: "d1t3-further-experiments", label: "1.3.f  What further experiments would you want before the next decision point?", type: "text" }
];
