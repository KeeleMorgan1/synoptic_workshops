/* report-fields.js — Day 5 report layout (BRD4). */
window.REPORT_FIELDS = [
  { section: "Task 1 — Spectral Assignment" },
  {
    type: "input-table", label: "Conclusions — reaction type, enzyme and site of metabolism", qidPrefix: "d5t1-concl",
    rowLabel: "Metabolite",
    rows: ["D16-M1", "D18-M1", "D19-M1", "D20-M1", "D21-M1", "D22-M1", "D16-M2", "D19-M2", "D20-M2"],
    columns: [
      { key: "reaction", label: "Reaction type" }, { key: "enzyme", label: "Enzyme / conjugate" }, { key: "site", label: "Site of metabolism" }
    ]
  },

  { section: "Task 2 — Interpretation" },
  { qid: "d5t2-mechanism-diversity", label: "Which candidate is metabolised by a different route, the mechanistic difference, and the structural feature that indicated it", type: "text" },
  { qid: "d5t2-phase-pattern", label: "Pattern connecting Phase 1 and Phase 2 metabolites in this dataset", type: "text" },
  { qid: "d5t2-concerns", label: "Concerns raised by the metabolite profile for these candidates going forward", type: "text" }
];
