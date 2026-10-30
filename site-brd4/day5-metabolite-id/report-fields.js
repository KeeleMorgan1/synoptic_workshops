/* report-fields.js — Day 5 report layout (BRD4). */
window.REPORT_FIELDS = [
  { section: "Task 1 — Spectral Assignment" },
  {
    type: "input-table", label: "5.1.a  Conclusions — reaction type, enzyme and site of metabolism", qidPrefix: "d5t1-concl",
    rowLabel: "Metabolite",
    rows: ["D18-M1", "D19-M1", "D20-M1", "D21-M1", "D22-M1", "D19-M2", "D20-M2"],
    columns: [
      { key: "reaction", label: "Reaction type" }, { key: "enzyme", label: "Enzyme / conjugate" }, { key: "site", label: "Site of metabolism" }
    ]
  },

  { section: "Peak Assignments — Parent Compounds" },
  { type: "spectra-panels", label: "5.1.b  ", marksId: "d5-spectra-parent", dataGlobal: "SPECTRA_REFERENCE", panels: ["D18", "D19", "D20", "D21", "D22"] },

  { section: "Peak Assignments — Phase 1 Metabolites" },
  { type: "spectra-panels", label: "5.1.c  ", marksId: "d5-spectra-m1", dataGlobal: "SPECTRA_REFERENCE", panels: ["D18-M1", "D19-M1", "D20-M1", "D21-M1", "D22-M1"] },

  { section: "Peak Assignments — Phase 2 Metabolites" },
  { type: "spectra-panels", label: "5.1.d  ", marksId: "d5-spectra-m2", dataGlobal: "SPECTRA_REFERENCE", panels: ["D19-M2", "D20-M2"] },

  { section: "Task 2 — Interpretation" },
  { qid: "d5t2-mechanism-diversity", label: "5.2.a  Which candidate is metabolised by a different route, the mechanistic difference, and the structural feature that indicated it", type: "text" },
  { qid: "d5t2-phase-pattern", label: "5.2.b  Pattern connecting Phase 1 and Phase 2 metabolites in this dataset", type: "text" },
  { qid: "d5t2-concerns", label: "5.2.c  Concerns raised by the metabolite profile for these candidates going forward", type: "text" }
];
