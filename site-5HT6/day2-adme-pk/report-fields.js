/* report-fields.js — Day 2 report layout.
   Ordered list of everything that should appear in the printable report,
   in the same order students see it on the task page. */
window.REPORT_FIELDS = [
  { section: "Task 1 — In Vitro ADME Screen" },
  {
    prefix: "d2t1", label: "ADME screening decisions (73 compounds)", type: "verdict-table",
    dataGlobal: "TASK1_DATA", idKey: "ID", nameKeys: ["ID", "Series"]
  },
  { qid: "d2t1-assay-rationale", label: "Why might the ADME assays used here matter in the context of this drug target?", type: "text" },
  { qid: "d2t1-sar", label: "What obvious structure–activity relationships emerge from the data?", type: "text" },
  { qid: "d2t1-cdtp-changes", label: "In light of this data, do you want to make any changes to your CDTP? Explain", type: "text" },
  { qid: "d2t1-borderline-actions", label: "For any borderline compounds, what actions or data would help you decide?", type: "text" },

  { section: "Task 2 — Rat In Vivo Pharmacokinetics" },
  { qid: "d2t2-graph", label: "Time vs [drug] graphs (linear and log axes)", type: "image" },
  {
    type: "input-table", label: "Calculated PK parameters", qidPrefix: "d2t2-pk", rowLabel: "Compound",
    rows: ["A04", "A15", "B11", "D07", "D20"],
    columns: [
      { key: "c0", label: "C0 (ng/mL)" }, { key: "vd", label: "Vd (L/kg)" },
      { key: "ke", label: "Ke (/h)" }, { key: "thalf", label: "T\u00bd (h)" },
      { key: "cl", label: "Cl (mL/min/kg)" }, { key: "f", label: "F (%)" },
      { key: "cmax", label: "Cmax (ng/mL)" }, { key: "tmax", label: "Tmax (h)" }
    ]
  },
  { qid: "d2t2-working", label: "Working (how the values were derived)", type: "text" },

  { section: "Task 3 — Pharmacokinetic Screen" },
  {
    prefix: "d2t3", label: "PK screening decisions (33 compounds)", type: "verdict-table",
    dataGlobal: "TASK3_DATA", idKey: "ID", nameKeys: ["ID", "Series"]
  },
  { qid: "d2t3-assay-rationale", label: "Why might the screening parameters used here matter in the context of this drug target?", type: "text" },
  { qid: "d2t3-sar", label: "Do any obvious structure–activity relationships emerge from the data?", type: "text" },
  { qid: "d2t3-cdtp-changes", label: "In light of this data, do you want to make any changes to your CDTP? Explain", type: "text" },
  { qid: "d2t3-borderline-actions", label: "For any borderline compounds, what actions or data would help you decide?", type: "text" },
  { qid: "d2t3-further-experiments", label: "What further experiments would you want before the next decision point?", type: "text" }
];
