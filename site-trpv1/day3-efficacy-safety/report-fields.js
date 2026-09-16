/* report-fields.js — Day 3 report layout (TRPV1). */
window.REPORT_FIELDS = [
  { section: "Task 1 — Rat In Vivo Pharmacokinetics" },
  { qid: "d3t1-graph", label: "Time vs [drug] graphs (linear and log axes)", type: "image" },
  {
    type: "input-table", label: "Calculated PK parameters", qidPrefix: "d3t1-pk", rowLabel: "Compound",
    rows: ["A16", "B18", "C17", "D02", "D04", "D16", "D18", "D19", "D20", "D21", "D22"],
    columns: [
      { key: "c0", label: "C0 (ng/mL)" }, { key: "vd", label: "Vd (L/kg)" },
      { key: "ke", label: "Ke (/h)" }, { key: "thalf", label: "T½ (h)" },
      { key: "cl", label: "Cl (mL/min/kg)" }, { key: "f", label: "F (%)" },
      { key: "cmax", label: "Cmax (ng/mL)" }, { key: "tmax", label: "Tmax (h)" }
    ]
  },
  { qid: "d3t1-working", label: "Working (method for each parameter)", type: "text" },

  { section: "Task 2 — In Vivo PK & Analgesic Efficacy Screen" },
  {
    prefix: "d3t2", label: "Compound screening decisions", type: "verdict-table",
    dataGlobal: "TASK2_DATA", idKey: "ID", nameKeys: ["ID", "Series"]
  },
  { qid: "d3t2-assay-rationale", label: "Why might the PK and efficacy parameters used here matter in the context of this drug target?", type: "text" },
  { qid: "d3t2-sar", label: "What obvious structure–activity relationships emerge from the data?", type: "text" },
  { qid: "d3t2-cdtp-changes", label: "Has anything here changed your CDTP? If so, how?", type: "text" },
  { qid: "d3t2-borderline-actions", label: "For any borderline compounds, what actions or data would help you decide?", type: "text" },

  { section: "Task 3 — In Vitro Safety Models & Screen" },
  { qid: "d3t3-explain-models", label: "Explanation of in vitro safety models", type: "text" },
  {
    prefix: "d3t3", label: "Compound screening decisions", type: "verdict-table",
    dataGlobal: "TASK3_DATA", idKey: "ID", nameKeys: ["ID", "Series"]
  },
  { qid: "d3t3-sar", label: "What obvious structure–activity relationships emerge from the data?", type: "text" },
  { qid: "d3t3-cdtp-changes", label: "Has anything here changed your CDTP? If so, how?", type: "text" },
  { qid: "d3t3-borderline-actions", label: "For any borderline compounds, what actions or data would help you decide?", type: "text" },

  { section: "Task 4 — In Vivo Safety Models & Screen" },
  { qid: "d3t4-explain-models", label: "Explanation of in vivo safety endpoints, including core temperature", type: "text" },
  {
    prefix: "d3t4", label: "Compound screening decisions", type: "verdict-table",
    dataGlobal: "TASK4_DATA", idKey: "ID", nameKeys: ["ID", "Series"]
  },
  { qid: "d3t4-sar", label: "What obvious structure–activity relationships emerge from the data?", type: "text" },
  { qid: "d3t4-cdtp-changes", label: "Has anything here changed your CDTP? If so, how?", type: "text" },
  { qid: "d3t4-borderline-actions", label: "For any borderline compounds, what actions or data would help you decide?", type: "text" },
  { qid: "d3t4-further-experiments", label: "What further experiments would you want before the next decision point?", type: "text" }
];
