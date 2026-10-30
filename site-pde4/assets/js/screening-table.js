/* screening-table.js
   Reusable red/amber/green compound-screening table.

   Used across Day 1 Task 3, Day 2 Tasks 1 & 3, Day 3 Tasks 2 & 4 — the same
   pattern recurs five times in the source task document: a table of compounds
   and summary data, colour-coded reject/borderline/continue, plus a fixed set
   of narrative prompts underneath (built separately, in the page HTML).

   Each row gets:
     - a verdict dropdown (reject/borderline/continue), defaulting to
       "Continue" so a row only needs attention when a student actively
       flags it as reject/borderline — colours the whole row.
     - a free-text "Reason" field, for the student to record why they
       rejected/flagged a compound (left blank for continue rows in the
       normal case, but not locked — a student can note anything there).

   v1 scope: per-row overall verdict + reason, not per-cell highlighting.
   The source task document also asks students to highlight the *specific*
   summary cells that drove each decision (mirroring the automatic flagging
   that used to be baked into the master workbook, deliberately stripped out
   — see 5HT6_DrugDiscovery_All_Workshops_Student.xlsx). That per-cell
   highlighting is a natural v2 addition once this simpler pattern is
   confirmed to work; left out for now rather than shipped half-working.

   Usage:
     ScreeningTable.render("container-id", {
       qidPrefix: "d1t3",
       idKey: "ID",
       columns: [{key:"ID",label:"ID"}, {key:"Series",label:"Series"}, ...],
       rows: [ {ID:"A01", Series:"A", ...}, ... ]
     });

   The verdict dropdown and reason field are plain [data-qid] elements, so
   they're picked up by answer-capture.js exactly like any other field —
   no special-casing needed there.
*/
(function () {
  function render(containerId, cfg) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const wrap = document.createElement("div");
    wrap.className = "screening-table-wrap";
    const table = document.createElement("table");
    table.className = "data-table screening-table";

    const thead = document.createElement("tr");
    cfg.columns.forEach(function (col) {
      const th = document.createElement("th");
      th.textContent = col.label;
      thead.appendChild(th);
    });
    const verdictTh = document.createElement("th");
    verdictTh.textContent = "Your decision";
    thead.appendChild(verdictTh);
    const reasonTh = document.createElement("th");
    reasonTh.textContent = "Reason (if rejected/borderline)";
    thead.appendChild(reasonTh);
    table.appendChild(thead);

    cfg.rows.forEach(function (row) {
      const id = row[cfg.idKey];
      const tr = document.createElement("tr");
      cfg.columns.forEach(function (col) {
        const td = document.createElement("td");
        td.textContent = row[col.key] === undefined || row[col.key] === null ? "" : row[col.key];
        tr.appendChild(td);
      });

      const verdictTd = document.createElement("td");
      const sel = document.createElement("select");
      sel.className = "flag-select";
      sel.setAttribute("data-qid", cfg.qidPrefix + "-verdict-" + id);
      [["", "—"], ["reject", "Reject"], ["borderline", "Borderline"], ["continue", "Continue"]].forEach(function (opt) {
        const o = document.createElement("option");
        o.value = opt[0];
        o.textContent = opt[1];
        sel.appendChild(o);
      });
      sel.value = "continue"; // default choice — a row only needs a look if flagged otherwise
      function applyRowColour() {
        tr.classList.remove("flag-red", "flag-amber", "flag-green");
        if (sel.value === "reject") tr.classList.add("flag-red");
        if (sel.value === "borderline") tr.classList.add("flag-amber");
        if (sel.value === "continue") tr.classList.add("flag-green");
      }
      sel.addEventListener("change", applyRowColour);
      // AnswerCapture restores sel.value on load (overriding this default if
      // the student already saved a decision) and fires a native "change"
      // event, which applyRowColour above listens for — restore is handled
      // for free by the normal answer-capture flow.
      applyRowColour(); // reflect the "Continue" default immediately, before any interaction
      verdictTd.appendChild(sel);
      tr.appendChild(verdictTd);

      const reasonTd = document.createElement("td");
      const reasonInput = document.createElement("input");
      reasonInput.type = "text";
      reasonInput.className = "answer-input reason-input";
      reasonInput.setAttribute("data-qid", cfg.qidPrefix + "-reason-" + id);
      reasonInput.setAttribute("placeholder", "Why?");
      reasonTd.appendChild(reasonInput);
      tr.appendChild(reasonTd);

      // mark every td in the row so CSS flag-red/amber/green (which targets
      // td.flag-cell) also colours the data cells, not just the verdict cell
      tr.querySelectorAll("td").forEach(function (td) { td.classList.add("flag-cell"); });
      table.appendChild(tr);
    });

    wrap.appendChild(table);
    container.innerHTML = "";
    container.appendChild(wrap);
  }

  window.ScreeningTable = { render: render };
})();
