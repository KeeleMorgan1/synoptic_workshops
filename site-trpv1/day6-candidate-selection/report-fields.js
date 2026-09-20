/* report-fields.js — Day 6 report layout (TRPV1). */
window.REPORT_FIELDS = [
  { section: "Task 1 — Candidate Selection" },
  {
    type: "input-table", label: "Candidate selection", qidPrefix: "d6t1", rowLabel: "Compound",
    rows: ["D16", "D18", "D19", "D20", "D21", "D22"],
    columns: [
      { key: "progress", label: "Progress?" }, { key: "reason", label: "Reason" }
    ]
  },
  { qid: "d6t1-justification", label: "Justification for candidate(s) progressed (TPP/CDTP referenced)", type: "text" },
  { qid: "d6t1-not-progressing", label: "Reasons for candidate(s) not progressing", type: "text" },

  { section: "Task 2 — Clinical Development Planning" },
  { qid: "d6t2-dosing-regimes", label: "Dosing regimes selected via PK-simulator to achieve steady-state within therapeutic window", type: "text" },
  { qid: "d6t2-clinical-outcomes", label: "Clinical outcomes to demonstrate efficacy in Phase 2 & 3", type: "text" },
  { qid: "d6t2-superiority", label: "How these trials would demonstrate superiority to standard-of-care", type: "text" },

  { section: "Task 3 — Programme Reflection" },
  { qid: "d6t3-cdtp-evolution", label: "How the CDTP evolved over the six workshops", type: "text" },
  { qid: "d6t3-remaining-risks", label: "Key uncertainties or risks remaining for the selected candidate(s)", type: "text" }
];
