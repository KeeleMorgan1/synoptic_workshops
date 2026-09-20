/* report-fields.js — Day 5 report layout (BACE1). */
window.REPORT_FIELDS = [
  { section: "Task 1 — Mass Shift Assignment & Spectral Assignment" },
  { qid: "d5t1a-dm-only", label: "Task 6a. Max metabolites assignable by Δm alone", type: "text" },
  {
    qidPrefix: "d5t1-concl", label: "Conclusions — biotransformation, enzyme, site of metabolism", type: "input-table", rowLabel: "Metabolite",
    rows: ["D18-M1", "D18-M2", "D19-M1", "D19-M2", "D20-M1", "D21-M1", "D21-M2", "D22-M1"],
    columns: [
      { key: "biotrans", label: "Biotransformation" }, { key: "enzyme", label: "Enzyme" }, { key: "site", label: "Site of metabolism" }
    ]
  },

  { section: "Task 2 — The Isobaric Pair & FMO3 N-Oxides" },
  { qid: "d5t2b-isobaric", label: "Task 6b. D19-M1 vs D22-M1 — diagnostic MS/MS fragments", type: "text" },
  { qid: "d5t2c-nmr", label: "Task 6c. NMR signals confirming O- vs N-demethylation", type: "text" },
  { qid: "d5t2d-fmo3", label: "Task 6d. Experiments confirming FMO3 over CYP3A4", type: "text" },
  { qid: "d5t2e-nl", label: "Task 6e. Diagnostic neutral loss for N-oxides", type: "text" },

  { section: "Task 3 — Direct Phase 2 Glucuronidation & DDI" },
  { qid: "d5t3f-direct", label: "Task 6f. D21 direct glucuronidation feature and UGT isoform", type: "text" },
  { qid: "d5t3g-ddi", label: "Task 6g. D22/ketoconazole predicted AUC fold-change", type: "text" }
];
