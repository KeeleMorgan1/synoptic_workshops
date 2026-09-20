/* input-table.js
   Reusable structured answer table — one row per item (e.g. a compound),
   one input per column (e.g. a calculated parameter). Each cell is a plain
   [data-qid] input, so it's picked up by answer-capture.js exactly like any
   other field — call AnswerCapture.rebind() after rendering, same pattern
   as screening-table.js.

   Usage:
     InputTable.render("container-id", {
       qidPrefix: "d2t2-pk",
       rowLabel: "Compound",
       rows: ["A04", "A15", "B11", "D07", "D20"],
       columns: [{key:"c0", label:"C0 (ng/mL)"}, {key:"vd", label:"Vd (L/kg)"}, ...]
     });

   Each cell's data-qid is "<qidPrefix>-<rowId>-<columnKey>", e.g.
   "d2t2-pk-A04-c0" — report-view.js's "input-table" field type reads
   answers back out using the same naming scheme to rebuild the table in
   the printable report.
*/
(function () {
  function render(containerId, cfg) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const wrap = document.createElement("div");
    wrap.className = "screening-table-wrap"; // reuse the same horizontal-scroll wrapper
    const table = document.createElement("table");
    table.className = "data-table input-table";

    const thead = document.createElement("tr");
    const rowTh = document.createElement("th");
    rowTh.textContent = cfg.rowLabel || "";
    thead.appendChild(rowTh);
    cfg.columns.forEach(function (col) {
      const th = document.createElement("th");
      th.textContent = col.label;
      thead.appendChild(th);
    });
    table.appendChild(thead);

    cfg.rows.forEach(function (row) {
      const id = typeof row === "string" ? row : row[cfg.rowKey || "id"];
      const tr = document.createElement("tr");
      const idTd = document.createElement("td");
      idTd.textContent = id;
      idTd.className = "input-table-rowlabel";
      tr.appendChild(idTd);
      cfg.columns.forEach(function (col) {
        const td = document.createElement("td");
        const input = document.createElement("input");
        input.type = "text";
        input.className = "answer-input pk-cell-input";
        input.setAttribute("data-qid", cfg.qidPrefix + "-" + id + "-" + col.key);
        td.appendChild(input);
        tr.appendChild(td);
      });
      table.appendChild(tr);
    });

    wrap.appendChild(table);
    container.innerHTML = "";
    container.appendChild(wrap);
  }

  window.InputTable = { render: render };
})();
