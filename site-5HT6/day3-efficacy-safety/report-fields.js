/* report-fields.js — Day 3 report layout. */
window.REPORT_FIELDS = [
  { section: "Task 1 — In Vivo Pharmacology Models" },
  { qid: "d3t1-explain-models", label: "Explanation of the three in vivo pharmacology models (NOR, ASST, Locomotor Activity)", type: "text" },
  { qid: "d3t1-cdtp-criteria", label: "CDTP criteria for these efficacy endpoints", type: "text" },

  { section: "Task 2 — Efficacy Screen" },
  {
    prefix: "d3t2", label: "Efficacy screening decisions (18 compounds)", type: "verdict-table",
    dataGlobal: "TASK2_DATA", idKey: "ID", nameKeys: ["ID", "Series"]
  },
  { qid: "d3t2-sar", label: "What obvious structure–activity relationships emerge from the data?", type: "text" },
  { qid: "d3t2-cdtp-changes", label: "In light of this data, do you want to make any changes to your CDTP? Explain", type: "text" },
  { qid: "d3t2-borderline-actions", label: "For any borderline compounds, what actions or data would help you decide?", type: "text" },
  { qid: "d3t2-further-experiments", label: "What further experiments would you want before the next decision point?", type: "text" },

  { section: "Task 3 — Safety & Toxicology Models" },
  { qid: "d3t3-explain-models", label: "Why each safety/toxicology model is used (hERG, AMES, micronucleus, HepG2, CV telemetry, 7-day NOAEL, reactive metabolite)", type: "text" },
  { qid: "d3t3-cdtp-criteria", label: "CDTP criteria for these safety endpoints", type: "text" },

  { section: "Task 4 — Safety Screen" },
  {
    prefix: "d3t4", label: "Safety screening decisions (15 compounds)", type: "verdict-table",
    dataGlobal: "TASK4_DATA", idKey: "ID", nameKeys: ["ID", "Series"]
  },
  { qid: "d3t4-sar", label: "What obvious structure–activity relationships emerge from the data?", type: "text" },
  { qid: "d3t4-cdtp-changes", label: "In light of this data, do you want to make any changes to your CDTP? Explain", type: "text" },
  { qid: "d3t4-borderline-actions", label: "For any borderline compounds, what actions or data would help you decide?", type: "text" },
  { qid: "d3t4-further-experiments", label: "What further experiments would you want before the next decision point?", type: "text" }
];
