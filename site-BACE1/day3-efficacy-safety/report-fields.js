/* report-fields.js — Day 3 report layout (BACE1). */
window.REPORT_FIELDS = [
  { section: "Task 1 — Efficacy Screen" },
  {
    prefix: "d3t1", label: "3.1.a  Efficacy screening decisions (22 compounds)", type: "verdict-table",
    dataGlobal: "TASK1_DATA", idKey: "ID", nameKeys: ["ID", "Series"]
  },
  { qid: "d3t1-explain-models", label: "3.1.b  Explain each of the in vivo efficacy read-outs (CSF Aβ40 lowering, brain/plasma Aβ40 lowering, NOR discrimination index) — what each measures and why it matters for BACE1", type: "text" },
  { qid: "d3t1-sar", label: "3.1.c  What obvious structure–activity relationships emerge from the data?", type: "text" },
  { qid: "d3t1-cdtp-changes", label: "3.1.d  In light of this data, do you want to make any changes to your CDTP? Explain", type: "text" },
  { qid: "d3t1-borderline-actions", label: "3.1.e  For any borderline compounds, what actions or data would help you decide?", type: "text" },

  { section: "Task 2 — In Vitro Safety Screen" },
  {
    prefix: "d3t2", label: "3.2.a  In vitro safety screening decisions (5 leads)", type: "verdict-table",
    dataGlobal: "TASK2_DATA", idKey: "ID", nameKeys: ["ID", "Series"]
  },
  { qid: "d3t2-explain-models", label: "3.2.b  Explain why each in vitro safety assay is used (hERG patch-clamp, AMES, micronucleus, HepG2, BACE2:BACE1 selectivity) — what liability is each looking for", type: "text" },
  { qid: "d3t2-sar", label: "3.2.c  What obvious structure–activity relationships emerge from the data?", type: "text" },
  { qid: "d3t2-cdtp-changes", label: "3.2.d  In light of this data, do you want to make any changes to your CDTP? Explain", type: "text" },
  { qid: "d3t2-borderline-actions", label: "3.2.e  For any borderline compounds, what actions or data would help you decide?", type: "text" },

  { section: "Task 3 — In Vivo Safety Screen" },
  {
    prefix: "d3t3", label: "3.3.a  In vivo safety screening decisions (5 leads)", type: "verdict-table",
    dataGlobal: "TASK3_DATA", idKey: "ID", nameKeys: ["ID", "Series"]
  },
  { qid: "d3t3-explain-models", label: "3.3.b  Explain why each in vivo safety endpoint is monitored (rat CV telemetry / QTc, 7-day NOAEL, 28-day ALT fold-change)", type: "text" },
  { qid: "d3t3-sar", label: "3.3.c  What obvious structure–activity relationships emerge from the data?", type: "text" },
  { qid: "d3t3-cdtp-changes", label: "3.3.d  In light of this data, do you want to make any changes to your CDTP? Explain", type: "text" },
  { qid: "d3t3-borderline-actions", label: "3.3.e  For any borderline compounds, what actions or data would help you decide?", type: "text" },
  { qid: "d3t3-further-experiments", label: "3.3.f  What further experiments would you want before the next decision point?", type: "text" }
];
