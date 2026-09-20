/* report-fields.js — Day 2 report layout (BACE1). */
window.REPORT_FIELDS = [
  { section: "Task 1 — Permeability & Metabolic Stability" },
  { qid: "d2t1a-perm", label: "Task 2a. Permeability/P-gp classification", type: "text" },
  { qid: "d2t1c-clh", label: "Task 2c. D22 well-stirred model: predicted vs observed CLh", type: "text" },
  { qid: "d2t1d-allometric", label: "Task 2d. D21 allometric scaling: predicted human CL", type: "text" },

  { section: "Task 2 — Rat In Vivo Pharmacokinetics" },
  { qid: "d2t2e-graph", label: "Task 2e. iv semi-log plots (D19, D22)", type: "image" },
  {
    qidPrefix: "d2t2-pk", label: "Calculated PK parameters", type: "input-table", rowLabel: "Compound",
    rows: ["D18", "D19", "D20", "D21", "D22"],
    columns: [
      { key: "ivcl", label: "iv CL (mL/min/kg)" }, { key: "ivvd", label: "iv Vd (L/kg)" }, { key: "ivthalf", label: "iv T½ (h)" },
      { key: "poF", label: "po F (%)" }, { key: "pocmax", label: "po Cmax (ng/mL)" }, { key: "potmax", label: "po Tmax (h)" },
      { key: "poauc", label: "po AUC₀₋₂₄ (ng·h/mL)" }
    ]
  },
  { qid: "d2t2-working", label: "Method used for each parameter", type: "text" },

  { section: "Task 3 — CNS Penetration & MPO" },
  { qid: "d2t3b-kpuu", label: "Task 2b. Predicted Kp,uu for D20/D21 vs P-gp efflux", type: "text" },
  { qid: "d2t3g-mpo", label: "Task 2g. CNS MPO ranking and driving descriptors", type: "text" },

  { section: "Task 4 — Compound-Wide ADME & PK Triage" },
  { qid: "d2t4a-criteria", label: "Criteria applied; compounds meeting them; biggest eliminator", type: "text" },
  { qid: "d2t4b-disconnect", label: "In vitro-good/in vivo-poor compounds; limits of extrapolation", type: "text" }
];
