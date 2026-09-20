/* report-fields.js — Day 3 report layout (BACE1). */
window.REPORT_FIELDS = [
  { section: "Task 1 — CSF & Brain Aβ40 Lowering (22-Compound Shortlisting Screen)" },
  { qid: "d3t1a-med", label: "Task 3a. MED (≥20% CSF reduction) per compound; rank order; shortlist", type: "text" },
  { qid: "d3t1b-predictor", label: "Task 3b. Best predictor of in vivo CNS efficacy: IC50 or Kp,uu?", type: "text" },
  { qid: "d3t1c-d20", label: "Task 3c. D20 disconnect between enzyme IC50 and CSF efficacy", type: "text" },
  { qid: "d3t1d-cbu", label: "Task 3d. D22 predicted free brain concentration vs enzyme IC50", type: "text" },

  { section: "Task 2 — Cognitive End-Point (NOR)" },
  { qid: "d3t2e-nor", label: "Task 3e. % improvement in DI vs vehicle for D22", type: "text" },
  { qid: "d3t2f-matched", label: "Task 3f. Why match dosing regimen between PK and pharmacology studies?", type: "text" },

  { section: "Task 3 — Cardiac Safety (hERG)" },
  { qid: "d3t3a-binding", label: "Task 4a. hERG binding vs patch-clamp — which is more relevant?", type: "text" },
  { qid: "d3t3b-margin", label: "Task 4b. hERG safety margin per compound", type: "text" },

  { section: "Task 4 — Hepatic, Genotoxic & Retinal Safety" },
  { qid: "d3t4c-alt", label: "Task 4c. Which compounds show ALT/NOAEL signals; safety concern?", type: "text" },
  { qid: "d3t4d-hepg2", label: "Task 4d. HepG2 ranking and correlation with HLM CLint", type: "text" },
  { qid: "d3t4e-retinal", label: "Task 4e. Retinal risk estimate; lowest-risk compound", type: "text" },
  { qid: "d3t4f-ames", label: "Task 4f. Ames/micronucleus limitations; reactive metabolite flags", type: "text" }
];
