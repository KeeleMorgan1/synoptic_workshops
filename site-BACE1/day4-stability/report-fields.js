/* report-fields.js — Day 4 report layout (BACE1). */
window.REPORT_FIELDS = [
  { section: "Task 1 — Stability Characterisation" },
  { qid: "d4t1a-graph", label: "Task 5a/5b. Arrhenius plot(s)", type: "image" },
  {
    qidPrefix: "d4t1a", label: "Task 5b/5c. Calculated anhydrous stability parameters", type: "input-table", rowLabel: "Compound",
    rows: ["D18", "D19", "D20", "D21", "D22"],
    columns: [
      { key: "k40", label: "k_40°C (/wk)" }, { key: "k60", label: "k_60°C (/wk)" }, { key: "k80", label: "k_80°C (/wk)" },
      { key: "ea", label: "Ea (kJ/mol)" }, { key: "k25", label: "k_25°C (/wk)" }, { key: "t90", label: "t90 @25°C (wk)" },
      { key: "meets2yr", label: "Meets 2-yr criterion?" }
    ]
  },
  { qid: "d4t1b-graph", label: "Task 5d. pH-rate profile plot", type: "image" },
  { qid: "d4t1b-analysis", label: "Task 5d. pH of max stability for D19; low/high-pH mechanisms", type: "text" },
  { qid: "d4t1c-analysis", label: "Task 5e. D21 acid stability classification and implications", type: "text" },
  { qid: "d4t1d-analysis", label: "Task 5f. D20 k_photo, ICH Q1B class, packaging recommendation", type: "text" },

  { section: "Task 2 — Formulation for In Vivo Studies" },
  { qid: "d4t2-hpbcd", label: "Task 5g. D20 HP-β-CD requirement and feasibility", type: "text" },
  { qid: "d4t2-packaging", label: "Packaging/handling precautions across candidates", type: "text" }
];
