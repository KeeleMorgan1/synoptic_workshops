/* report-fields.js — Day 5 report layout (BACE1). */
window.REPORT_FIELDS = [
  { section: "Task 1 — Mass Shift Assignment & Spectral Assignment" },
  {
    qidPrefix: "d5t1-concl", label: "5.1.a  Conclusions — biotransformation, enzyme, site of metabolism", type: "input-table", rowLabel: "Metabolite",
    rows: ["D18-M1", "D18-M2", "D19-M1", "D19-M2", "D20-M1", "D21-M1", "D21-M2", "D22-M1"],
    columns: [
      { key: "biotrans", label: "Biotransformation" }, { key: "enzyme", label: "Enzyme" }, { key: "site", label: "Site of metabolism" }
    ]
  },
  { section: "Peak Assignments — Parent Compounds" },
  { type: "spectra-panels", label: "5.1.b  ", marksId: "d5-spectra-parent", dataGlobal: "SPECTRA_REFERENCE",
    panels: ["D18", "D19", "D20", "D21", "D22"] },
  { section: "Peak Assignments — Phase 1 Metabolites" },
  { type: "spectra-panels", label: "5.1.c  ", marksId: "d5-spectra-m1", dataGlobal: "SPECTRA_REFERENCE",
    panels: ["D18-M1", "D19-M1", "D20-M1", "D21-M1", "D22-M1"] },
  { section: "Peak Assignments — Phase 2 Metabolites" },
  { type: "spectra-panels", label: "5.1.d  ", marksId: "d5-spectra-m2", dataGlobal: "SPECTRA_REFERENCE",
    panels: ["D18-M2", "D19-M2", "D21-M2"] },

  { section: "Task 2 — The Isobaric Pair & Phase 2 Glucuronidation" },
  { qid: "d5t2b-isobaric", label: "5.2.a  D19-M1 vs D22-M1 — diagnostic MS/MS fragments", type: "text" },
  { qid: "d5t2c-nmr", label: "5.2.b  NMR signals confirming O- vs N-demethylation", type: "text" },
  { qid: "d5t3f-direct", label: "5.2.c  D21 direct glucuronidation feature and UGT isoform", type: "text" }
];
