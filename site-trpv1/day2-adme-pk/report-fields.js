/* report-fields.js — Day 2 report layout (TRPV1). */
window.REPORT_FIELDS = [
  { section: "Task 1 — ADME & Metabolic Stability Screen" },
  {
    prefix: "d2t1", label: "Compound screening decisions", type: "verdict-table",
    dataGlobal: "TASK1_DATA", idKey: "ID", nameKeys: ["ID", "Series"]
  },
  { qid: "d2t1-assay-rationale", label: "Why might the assays used here matter in the context of this drug target?", type: "text" },
  { qid: "d2t1-sar", label: "What obvious structure–activity relationships emerge from the data, particularly by series?", type: "text" },
  { qid: "d2t1-cdtp-changes", label: "Has anything here changed your CDTP? If so, how?", type: "text" },
  { qid: "d2t1-borderline-actions", label: "For any borderline compounds, what actions or data would help you decide?", type: "text" },
  { qid: "d2t1-further-experiments", label: "What further experiments would you want before the next decision point?", type: "text" }
];
