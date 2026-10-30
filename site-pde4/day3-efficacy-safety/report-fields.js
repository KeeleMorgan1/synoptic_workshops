/* report-fields.js — Day 3 report layout (PDE4). */
window.REPORT_FIELDS = [
  { section: "Task 1 — Anti-Inflammatory Efficacy Screen" },
  {
    prefix: "d3t1", label: "3.1.a  Compound screening decisions", type: "verdict-table",
    dataGlobal: "TASK1_DATA", idKey: "ID", nameKeys: ["ID", "Series"]
  },
  { qid: "d3t1-explain-models", label: "3.1.b  Explain each of the efficacy models/endpoints used here — what does each measure, and why is it relevant to this target?", type: "text" },
  { qid: "d3t1-sar", label: "3.1.c  What obvious structure–activity relationships emerge from the data?", type: "text" },
  { qid: "d3t1-cdtp-changes", label: "3.1.d  Has anything here changed your CDTP? If so, how?", type: "text" },
  { qid: "d3t1-borderline-actions", label: "3.1.e  For any borderline compounds, what actions or data would help you decide?", type: "text" },

  { section: "Task 2 — In Vitro Safety & Emesis Risk Models" },
  { qid: "d3t2-explain-models", label: "3.2.a  Explanation of in vitro safety and emesis-risk models", type: "text" },
  {
    prefix: "d3t2", label: "3.2.b  Compound screening decisions", type: "verdict-table",
    dataGlobal: "TASK2_DATA", idKey: "ID", nameKeys: ["ID", "Series"]
  },
  { qid: "d3t2-sar", label: "3.2.c  What obvious structure–activity relationships emerge from the data?", type: "text" },
  { qid: "d3t2-cdtp-changes", label: "3.2.d  Has anything here changed your CDTP? If so, how?", type: "text" },
  { qid: "d3t2-borderline-actions", label: "3.2.e  For any borderline compounds, what actions or data would help you decide?", type: "text" },

  { section: "Task 3 — In Vivo Tolerability Models & Screen" },
  { qid: "d3t3-explain-models", label: "3.3.a  Explanation of in vivo tolerability endpoints, including the ferret emesis model", type: "text" },
  {
    prefix: "d3t3", label: "3.3.b  Compound screening decisions", type: "verdict-table",
    dataGlobal: "TASK3_DATA", idKey: "ID", nameKeys: ["ID", "Series"]
  },
  { qid: "d3t3-sar", label: "3.3.c  What obvious structure–activity relationships emerge from the data?", type: "text" },
  { qid: "d3t3-cdtp-changes", label: "3.3.d  Has anything here changed your CDTP? If so, how?", type: "text" },
  { qid: "d3t3-borderline-actions", label: "3.3.e  For any borderline compounds, what actions or data would help you decide?", type: "text" },
  { qid: "d3t3-further-experiments", label: "3.3.f  What further experiments would you want before the next decision point?", type: "text" }
];
