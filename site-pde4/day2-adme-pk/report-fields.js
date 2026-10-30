/* report-fields.js — Day 2 report layout (PDE4).
   Ordered list of everything that should appear in the printable report,
   in the same order students see it on the task page. */
window.REPORT_FIELDS = [
  { section: "Task 1 — In Vitro ADME Screen" },
  {
    prefix: "d2t1", label: "2.1.a  ADME screening decisions (65 compounds)", type: "verdict-table",
    dataGlobal: "TASK1_DATA", idKey: "ID", nameKeys: ["ID", "Series"]
  },
  { qid: "d2t1-assay-rationale", label: "2.1.b  Why might the ADME assays used here matter in the context of this drug target?", type: "text" },
  { qid: "d2t1-sar", label: "2.1.c  What obvious structure–activity relationships emerge from the data?", type: "text" },
  { qid: "d2t1-cdtp-changes", label: "2.1.d  In light of this data, do you want to make any changes to your CDTP? Explain", type: "text" },
  { qid: "d2t1-borderline-actions", label: "2.1.e  For any borderline compounds, what actions or data would help you decide?", type: "text" },

  { section: "Task 2 — Rat In Vivo Pharmacokinetics" },
  { qid: "d2t2-graph", label: "2.2.a  Time vs [drug] graphs (linear and log axes)", type: "image" },
  {
    type: "input-table", label: "2.2.b  Calculated PK parameters", qidPrefix: "d2t2-pk", rowLabel: "Compound",
    rows: ["C15", "C20", "C24", "D06", "D09", "D15", "D19", "D20", "D21", "D22"],
    columns: [
      { key: "c0", label: "C0 (ng/mL)" }, { key: "vd", label: "Vd (L/kg)" },
      { key: "ke", label: "Ke (/h)" }, { key: "thalf", label: "T½ (h)" },
      { key: "cl", label: "Cl (mL/min/kg)" }, { key: "f", label: "F (%)" },
      { key: "cmax", label: "Cmax (ng/mL)" }, { key: "tmax", label: "Tmax (h)" }
    ]
  },
  { qid: "d2t2-working", label: "2.2.c  Working (method for each parameter)", type: "text" },

  { section: "Task 3 — Pharmacokinetic Screen" },
  {
    prefix: "d2t3", label: "2.3.a  PK screening decisions (65 compounds)", type: "verdict-table",
    dataGlobal: "TASK3_DATA", idKey: "ID", nameKeys: ["ID", "Series"]
  },
  { qid: "d2t3-assay-rationale", label: "2.3.b  Why might the screening parameters used here matter in the context of this drug target?", type: "text" },
  { qid: "d2t3-sar", label: "2.3.c  Do any obvious structure–activity relationships emerge from the data?", type: "text" },
  { qid: "d2t3-cdtp-changes", label: "2.3.d  In light of this data, do you want to make any changes to your CDTP? Explain", type: "text" },
  { qid: "d2t3-borderline-actions", label: "2.3.e  For any borderline compounds, what actions or data would help you decide?", type: "text" },
  { qid: "d2t3-further-experiments", label: "2.3.f  What further experiments would you want before the next decision point?", type: "text" }
];
