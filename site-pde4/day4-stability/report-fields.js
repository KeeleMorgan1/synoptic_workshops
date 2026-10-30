/* report-fields.js — Day 4 (Stability) report layout (PDE4). */
window.REPORT_FIELDS = [
  { section: "Anhydrous (Solid-State) Stability" },
  { qid: "d4t1a-graph", label: "4.1.a  Arrhenius plot(s)", type: "image" },
  {
    type: "input-table", label: "4.1.b  Calculated anhydrous stability parameters", qidPrefix: "d4t1a", rowLabel: "Compound",
    rows: ["D15", "D19", "D20", "D21", "D22"],
    columns: [
      { key: "k40", label: "k_40°C (/wk)" }, { key: "k60", label: "k_60°C (/wk)" }, { key: "k80", label: "k_80°C (/wk)" },
      { key: "ea", label: "Ea (kJ/mol)" }, { key: "k25", label: "k_25°C (/wk)" }, { key: "t90", label: "t90 @25°C (wk)" },
      { key: "classification", label: "Classification" }
    ]
  },

  { section: "Aqueous (Solution) Stability" },
  { qid: "d4t1b-graph", label: "4.1.c  Arrhenius/degradation plot(s)", type: "image" },
  {
    type: "input-table", label: "4.1.d  Calculated aqueous stability parameters", qidPrefix: "d4t1b", rowLabel: "Compound",
    rows: ["D15", "D19", "D20", "D21", "D22"],
    columns: [
      { key: "ea", label: "Ea (kJ/mol)" }, { key: "k25", label: "k_25°C (/day)" },
      { key: "t90days", label: "t90 pH7.4 (days)" }, { key: "classification", label: "Classification" }
    ]
  },

  { section: "Acid (Gastric) Stability" },
  { qid: "d4t1c-graph", label: "4.1.e  Degradation plot(s)", type: "image" },
  {
    type: "input-table", label: "4.1.f  Calculated acid stability parameters", qidPrefix: "d4t1c", rowLabel: "Compound",
    rows: ["D15", "D19", "D20", "D21", "D22"],
    columns: [
      { key: "kacid", label: "k_acid (/h)" }, { key: "thalf", label: "t½ (h)" }, { key: "classification", label: "Classification" }
    ]
  },

  { section: "Photostability (ICH Q1B)" },
  { qid: "d4t1d-graph", label: "4.1.g  Degradation plot(s)", type: "image" },
  {
    type: "input-table", label: "4.1.h  Calculated photostability parameters", qidPrefix: "d4t1d", rowLabel: "Compound",
    rows: ["D15", "D19", "D20", "D21", "D22"],
    columns: [
      { key: "kphoto", label: "k_photo (ICH-unit)⁻¹" }, { key: "pctrem1x", label: "% remaining @1x" },
      { key: "classification", label: "Classification" }
    ]
  },
  { qid: "d4t1-working", label: "4.1.i  Working (methods used for each calculation)", type: "text" },

  { section: "Task 2 — Developability & Formulation Strategy" },
  { qid: "d4t2-recommendation-check", label: "4.2.a  Do stability results change the Day 3 recommendation, or are they manageable through formulation/packaging alone?", type: "text" },
  { qid: "d4t2-packaging", label: "4.2.b  Packaging or handling precautions for each candidate", type: "text" },
  { qid: "d4t2-formulation-approach", label: "4.2.c  Proposed formulation approach for each candidate, and why", type: "text" },
  { qid: "d4t2-further-cmc", label: "4.2.d  Further CMC development activities before first-in-human formulation", type: "text" }
];
