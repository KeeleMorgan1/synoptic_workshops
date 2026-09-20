/* report-fields.js — Day 2 report layout (BRD4). */
window.REPORT_FIELDS = [
  { section: "Task 1 — ADME & In Vivo PK Screen" },
  {
    prefix: "d2t1", label: "Compound screening decisions", type: "verdict-table",
    dataGlobal: "TASK1_DATA", idKey: "ID", nameKeys: ["ID", "Series"]
  },
  { qid: "d2t1-assay-rationale", label: "Why might the assays used here matter in the context of this drug target?", type: "text" },
  { qid: "d2t1-sar", label: "What obvious structure–activity relationships emerge from the data?", type: "text" },
  { qid: "d2t1-cdtp-changes", label: "Has anything here changed your CDTP? If so, how?", type: "text" },
  { qid: "d2t1-borderline-actions", label: "For any borderline compounds, what actions or data would help you decide?", type: "text" },
  { qid: "d2t1-further-experiments", label: "What further experiments would you want before the next decision point?", type: "text" },

  { section: "Task 2 — Rat In Vivo Pharmacokinetics" },
  { qid: "d2t2-graph", label: "Time vs [drug] graphs (linear and log axes)", type: "image" },
  {
    type: "input-table", label: "Calculated PK parameters", qidPrefix: "d2t2-pk", rowLabel: "Compound",
    rows: ["A02", "B18", "C05", "D02", "D04", "D18", "D19", "D20", "D21", "D22"],
    columns: [
      { key: "c0", label: "C0 (ng/mL)" }, { key: "vd", label: "Vd (L/kg)" },
      { key: "ke", label: "Ke (/h)" }, { key: "thalf", label: "T½ (h)" },
      { key: "cl", label: "Cl (mL/min/kg)" }, { key: "f", label: "F (%)" },
      { key: "cmax", label: "Cmax (ng/mL)" }, { key: "tmax", label: "Tmax (h)" }
    ]
  },
  { qid: "d2t2-working", label: "Working (method for each parameter)", type: "text" }
];
