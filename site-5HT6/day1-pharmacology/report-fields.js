/* report-fields.js — Day 1 report layout.
   Ordered list of everything that should appear in the printable report,
   in the same order students see it on the task page. Kept as its own file
   (rather than inline in report.html) so the report layout is easy to
   compare against index.html when either one changes. */
window.REPORT_FIELDS = [
  { section: "Task 1 — Binding IC50 Curve" },
  { qid: "d1t1-ic50", label: "IC50 estimate (nM) and how it was derived", type: "text" },
  { qid: "d1t1-graph", label: "Binding curve graph", type: "image" },
  { qid: "d1t1-report", label: "One-page report (assay outline + interpretation)", type: "text" },

  { section: "Task 2a — Agonist Mode" },
  { qid: "d1t2a-analysis", label: "Narrative analysis (potency & efficacy of each compound)", type: "text" },
  { qid: "d1t2a-graph", label: "Agonist-mode graph", type: "image" },

  { section: "Task 2b — Antagonist Mode (Schild Paradigm)" },
  { qid: "d1t2b-graph", label: "Antagonist-mode graph", type: "image" },
  { qid: "d1t2b-report", label: "One-page report (assay outline + potency/efficacy interpretation)", type: "text" },

  { section: "Task 3 — Primary & Secondary Pharmacology Screen" },
  {
    prefix: "d1t3", label: "Compound screening decisions (100 compounds)", type: "verdict-table",
    dataGlobal: "TASK3_DATA", idKey: "ID", nameKeys: ["ID", "Series"]
  },
  { qid: "d1t3-selectivity-rationale", label: "Why might the selectivity assays used here matter in the context of this drug target?", type: "text" },
  { qid: "d1t3-sar", label: "What obvious structure–activity relationships emerge from the data?", type: "text" },
  { qid: "d1t3-cdtp-changes", label: "Has anything here changed your CDTP? If so, how?", type: "text" },
  { qid: "d1t3-amber-actions", label: "For any amber compounds, what actions or data would help you decide?", type: "text" },
  { qid: "d1t3-further-experiments", label: "What further experiments would you want before the next decision point?", type: "text" }
];
