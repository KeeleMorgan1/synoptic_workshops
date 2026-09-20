/* report-fields.js — Day 6 report layout (BACE1). */
window.REPORT_FIELDS = [
  { section: "Task 1 — Candidate Selection" },
  {
    type: "input-table", label: "Candidate selection", qidPrefix: "d6t1", rowLabel: "Compound",
    rows: ["D19", "D22"],
    columns: [
      { key: "progress", label: "Progress?" }, { key: "reason", label: "Reason" }
    ]
  },
  { qid: "d6t1a-justification", label: "Task 7a. Candidate(s) progressed, TPP/CDTP justification & differentiation", type: "text" },
  { qid: "d6t1b-risks", label: "Task 7b. Top three remaining risks before CTA", type: "text" },

  { section: "Task 2 — First-in-Human Dose Prediction" },
  { qid: "d6t2c-allometric", label: "Task 7c. Predicted human CL/Vd/t½ for D22", type: "text" },
  { qid: "d6t2d-mrsd", label: "Task 7d. MRSD calculation for D22", type: "text" },
  { qid: "d6t2e-graph", label: "Task 7e. FIH PK simulation plot", type: "image" },
  { qid: "d6t2e-comment", label: "Task 7e. Does dosing maintain concentrations above threshold?", type: "text" },

  { section: "Task 3 — Programme Reflection" },
  { qid: "d6t3f-modifications", label: "Task 7f. Structural modification for CNS/metabolic stability/BACE2 selectivity", type: "text" },
  { qid: "d6t3-reflection", label: "Reflection on Phase 3 BACE1 inhibitor failures", type: "text" }
];
