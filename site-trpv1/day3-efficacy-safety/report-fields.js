/* report-fields.js — Day 3 report layout (TRPV1). */
window.REPORT_FIELDS = [
  { section: "Task 1 — Analgesic Efficacy Screen" },
  {
    prefix: "d3t1", label: "Compound screening decisions", type: "verdict-table",
    dataGlobal: "TASK1_DATA", idKey: "ID", nameKeys: ["ID", "Series"]
  },
  { qid: "d3t1-assay-rationale", label: "Why might the efficacy parameters used here matter in the context of this drug target?", type: "text" },
  { qid: "d3t1-sar", label: "What obvious structure–activity relationships emerge from the data?", type: "text" },
  { qid: "d3t1-cdtp-changes", label: "Has anything here changed your CDTP? If so, how?", type: "text" },
  { qid: "d3t1-borderline-actions", label: "For any borderline compounds, what actions or data would help you decide?", type: "text" },

  { section: "Task 2 — In Vitro Safety Models & Screen" },
  { qid: "d3t2-explain-models", label: "Explanation of in vitro safety models", type: "text" },
  {
    prefix: "d3t2", label: "Compound screening decisions", type: "verdict-table",
    dataGlobal: "TASK2_DATA", idKey: "ID", nameKeys: ["ID", "Series"]
  },
  { qid: "d3t2-sar", label: "What obvious structure–activity relationships emerge from the data?", type: "text" },
  { qid: "d3t2-cdtp-changes", label: "Has anything here changed your CDTP? If so, how?", type: "text" },
  { qid: "d3t2-borderline-actions", label: "For any borderline compounds, what actions or data would help you decide?", type: "text" },

  { section: "Task 3 — In Vivo Safety Models & Screen" },
  { qid: "d3t3-explain-models", label: "Explanation of in vivo safety endpoints, including core temperature", type: "text" },
  {
    prefix: "d3t3", label: "Compound screening decisions", type: "verdict-table",
    dataGlobal: "TASK3_DATA", idKey: "ID", nameKeys: ["ID", "Series"]
  },
  { qid: "d3t3-sar", label: "What obvious structure–activity relationships emerge from the data?", type: "text" },
  { qid: "d3t3-cdtp-changes", label: "Has anything here changed your CDTP? If so, how?", type: "text" },
  { qid: "d3t3-borderline-actions", label: "For any borderline compounds, what actions or data would help you decide?", type: "text" },
  { qid: "d3t3-further-experiments", label: "What further experiments would you want before the next decision point?", type: "text" }
];
