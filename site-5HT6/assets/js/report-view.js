/* report-view.js
   Generic printable-report renderer, shared across all six day pages.

   Reads a student's saved answers — from this browser's localStorage by
   default, or from an uploaded exported .json file — and lays them out as
   a single readable document: the thing a student prints to PDF and
   submits through the VLE, instead of submitting the raw .json. Because it
   also accepts an uploaded file, the same page doubles as a way for a
   facilitator to open any downloaded student submission as a readable
   document.

   Usage (report.html for each day):
     <div id="report-controls"></div>
     <div id="report-root"></div>
     <script src="../assets/js/student-id.js"></script>
     <script src="../assets/js/answer-capture.js"></script>
     <script src="../assets/js/report-view.js"></script>
     <script src="data/task3_compound_screen.js"></script>   <!-- if needed by a verdict-table field -->
     <script src="report-fields.js"></script>                 <!-- defines window.REPORT_FIELDS -->
     <script>
       ReportView.init({
         workshopId: "day1-pharmacology",
         workshopTitle: "Day 1 — In Vitro Pharmacology",
         fields: window.REPORT_FIELDS
       });
     </script>

   Field spec — window.REPORT_FIELDS is an ordered array of:
     { section: "Task 1 — Binding IC50 Curve" }
       A section heading, no answer.

     { qid, label, type: "text" }
       A textarea/text answer, rendered as a paragraph (line breaks kept).

     { qid, label, type: "image" }
       A pasted-image answer (see image-paste.js), rendered inline.

     { prefix, label, type: "verdict-table", dataGlobal, idKey, nameKeys }
       Reconstructs a compound/verdict table from a screening-table.js
       widget (see screening-table.js), by reading window[dataGlobal] for
       the row list and looking up "<prefix>-verdict-<idKey value>" for
       each row's decision.
*/
(function () {
  const VERDICT_LABELS = { reject: "Reject", borderline: "Borderline", continue: "Continue", "": "— not answered —" };

  // Marks (optional): window.MARKS comes from ../assets/data/marks.js. A
  // field's mark is looked up by its marksId, qid, prefix or qidPrefix.
  function marksFor(field) {
    const M = window.MARKS || {};
    const id = field.marksId || field.qid || field.prefix || field.qidPrefix;
    return id && Object.prototype.hasOwnProperty.call(M, id) ? M[id] : null;
  }
  function fmtMarks(n) { return n + (n === 1 ? " mark" : " marks"); }
  function markBadge(n) {
    const s = document.createElement("span");
    s.className = "mark-badge";
    s.textContent = "[" + fmtMarks(n) + "]";
    return s;
  }

  function el(tag, cls, text) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  }

  function renderTextField(container, store, field) {
    const q = el("div", "report-question");
    q.appendChild(el("div", "report-label", field.label));
    const val = store.answers ? store.answers[field.qid] : undefined;
    const a = el("div", "report-answer-text");
    if (val && String(val).trim()) {
      String(val).split("\n").forEach(function (line) {
        a.appendChild(document.createTextNode(line));
        a.appendChild(document.createElement("br"));
      });
    } else {
      a.classList.add("report-answer-empty");
      a.textContent = "No answer submitted.";
    }
    q.appendChild(a);
    container.appendChild(q);
  }

  function renderImageField(container, store, field) {
    const q = el("div", "report-question");
    q.appendChild(el("div", "report-label", field.label));
    let val = store.answers ? store.answers[field.qid] : undefined;
    // normalize: older saved answers may be a single data-URL string, from
    // before this field supported multiple images
    if (typeof val === "string" && val) val = [val];
    if (Array.isArray(val) && val.length) {
      val.forEach(function (dataUrl) {
        const img = document.createElement("img");
        img.className = "report-answer-image";
        img.src = dataUrl;
        q.appendChild(img);
      });
    } else {
      q.appendChild(el("div", "report-answer-text report-answer-empty", "No image submitted."));
    }
    container.appendChild(q);
  }

  function renderVerdictTable(container, store, field) {
    const q = el("div", "report-question");
    q.appendChild(el("div", "report-label", field.label));
    const allRows = window[field.dataGlobal] || [];
    if (!allRows.length) {
      q.appendChild(el("div", "report-answer-text report-answer-empty", "Compound data not available."));
      container.appendChild(q);
      return;
    }

    const decorated = allRows.map(function (row) {
      const id = row[field.idKey];
      const verdict = (store.answers && store.answers[field.prefix + "-verdict-" + id]) || "";
      const reason = (store.answers && store.answers[field.prefix + "-reason-" + id]) || "";
      return { row: row, verdict: verdict, reason: reason };
    });

    // The report only needs to surface compounds that need a facilitator's
    // attention: anything flagged reject/borderline, or anything left at
    // "Continue" but where the student still noted a reason. Rows left at
    // the default "Continue" with no note are the expected common case —
    // showing all ~100 of them here would bury the ones actually worth
    // reading.
    const flagged = decorated.filter(function (d) {
      return d.verdict === "reject" || d.verdict === "borderline" || d.reason.trim() !== "";
    });

    q.appendChild(el("div", "report-answer-text report-verdict-summary",
      "Showing " + flagged.length + " of " + decorated.length +
      " compounds (rejected, borderline, or continued with a note). " +
      (decorated.length - flagged.length) + " left at the default \"Continue\" with no note are omitted here."));

    if (!flagged.length) {
      q.appendChild(el("div", "report-answer-text report-answer-empty",
        "No compounds were rejected/borderline, and no reason notes were left."));
      container.appendChild(q);
      return;
    }

    const table = document.createElement("table");
    table.className = "report-verdict-table";
    const thead = document.createElement("tr");
    (field.nameKeys || [field.idKey]).forEach(function (k) { thead.appendChild(el("th", null, k)); });
    thead.appendChild(el("th", null, "Decision"));
    thead.appendChild(el("th", null, "Reason"));
    table.appendChild(thead);
    flagged.forEach(function (d) {
      const tr = document.createElement("tr");
      (field.nameKeys || [field.idKey]).forEach(function (k) { tr.appendChild(el("td", null, d.row[k])); });
      tr.appendChild(el("td", "report-verdict-" + (d.verdict || "none"), VERDICT_LABELS[d.verdict] || d.verdict));
      tr.appendChild(el("td", "report-reason-cell", d.reason));
      table.appendChild(tr);
    });
    q.appendChild(table);
    container.appendChild(q);
  }

  function renderInputTable(container, store, field) {
    const q = el("div", "report-question");
    q.appendChild(el("div", "report-label", field.label));
    const table = document.createElement("table");
    table.className = "report-input-table";
    const thead = document.createElement("tr");
    thead.appendChild(el("th", null, field.rowLabel || ""));
    field.columns.forEach(function (col) { thead.appendChild(el("th", null, col.label)); });
    table.appendChild(thead);
    field.rows.forEach(function (rowId) {
      const tr = document.createElement("tr");
      tr.appendChild(el("td", null, rowId));
      field.columns.forEach(function (col) {
        const qid = field.qidPrefix + "-" + rowId + "-" + col.key;
        const val = (store.answers && store.answers[qid]) || "";
        const td = el("td", null, val);
        if (!val) td.classList.add("report-answer-empty");
        tr.appendChild(td);
      });
      table.appendChild(tr);
    });
    q.appendChild(table);
    container.appendChild(q);
  }

  function renderSpectraPanels(container, store, field) {
    const ref = window[field.dataGlobal] || {};
    const m = marksFor(field);
    if (m !== null) {
      const note = el("div", "report-label", "Peak assignments for " + field.panels.join(", ") + " ");
      note.appendChild(markBadge(m));
      container.appendChild(note);
    }
    field.panels.forEach(function (pid) {
      const panelData = ref[pid];
      if (!panelData) return;
      const q = el("div", "report-question");
      q.appendChild(el("div", "report-label", pid));

      function buildTable(rows, cols, getCells) {
        if (!rows || !rows.length) return null;
        const table = document.createElement("table");
        table.className = "report-input-table";
        table.style.marginBottom = "8px";
        const thead = document.createElement("tr");
        cols.forEach(function (c) { thead.appendChild(el("th", null, c)); });
        table.appendChild(thead);
        rows.forEach(function (row) {
          const tr = document.createElement("tr");
          getCells(row).forEach(function (v) { tr.appendChild(el("td", null, v)); });
          const ans = (store.answers && store.answers[row.qid]) || "";
          const ansTd = el("td", null, ans);
          if (!ans) ansTd.classList.add("report-answer-empty");
          tr.appendChild(ansTd);
          table.appendChild(tr);
        });
        return table;
      }

      const nmrTable = buildTable(
        panelData.nmr, ["δ (ppm)", "Mult.", "J (Hz)", "nH", "Assignment"],
        function (r) { return [r.delta, r.mult, r.J, r.nH]; }
      );
      if (nmrTable) q.appendChild(nmrTable);

      const msTable = buildTable(
        panelData.ms, ["m/z", "Rel. Int.", "Fragment identity"],
        function (r) { return [r.mz, r.relInt]; }
      );
      if (msTable) q.appendChild(msTable);

      container.appendChild(q);
    });
  }

  function renderReport(store, cfg) {
    const root = document.getElementById("report-root");
    root.innerHTML = "";
    store = store || { answers: {} };
    store.answers = store.answers || {};

    const header = el("div", "report-header");
    header.appendChild(el("h2", null, cfg.workshopTitle));
    header.appendChild(el("div", "report-meta", "Student: " + (store.studentId || "(unknown — set a name/ID or load a file)")));
    header.appendChild(el("div", "report-meta", "Workshop: " + cfg.workshopId));
    header.appendChild(el("div", "report-meta",
      "Answers last saved: " + (store.savedAt ? new Date(store.savedAt).toLocaleString() : "never")));
    header.appendChild(el("div", "report-meta", "Report generated: " + new Date().toLocaleString()));
    root.appendChild(header);

    // Marks: day total in the header, and a running total per section
    const dayTotal = cfg.fields.reduce(function (s, f) { const m = marksFor(f); return s + (m || 0); }, 0);
    if (dayTotal) header.appendChild(el("div", "report-meta", "Marks available: " + dayTotal));
    let sectionEl = null, sectionTotal = 0;
    function closeSection() {
      if (sectionEl && sectionTotal) {
        const t = el("span", "mark-total", fmtMarks(sectionTotal));
        sectionEl.appendChild(t);
      }
    }

    cfg.fields.forEach(function (field) {
      if (field.section) {
        closeSection();
        sectionEl = el("h3", "report-section", field.section);
        sectionTotal = 0;
        root.appendChild(sectionEl);
        return;
      }
      const m = marksFor(field);
      if (m !== null) sectionTotal += m;
      const before = root.lastElementChild;
      if (field.type === "image") renderImageField(root, store, field);
      else if (field.type === "verdict-table") renderVerdictTable(root, store, field);
      else if (field.type === "input-table") renderInputTable(root, store, field);
      else if (field.type === "spectra-panels") renderSpectraPanels(root, store, field); // labels its own mark
      else renderTextField(root, store, field);
      if (m !== null && field.type !== "spectra-panels") {
        const added = before ? before.nextElementSibling : root.firstElementChild;
        const label = added && added.querySelector(".report-label");
        if (label) label.appendChild(markBadge(m));
      }
    });
    closeSection();
  }

  function init(cfg) {
    StudentId.ensure();
    StudentId.renderBanner();

    const controls = document.getElementById("report-controls");
    controls.innerHTML =
      '<button id="report-print-btn" type="button">Print / Save as PDF</button>' +
      '<label class="report-file-label">Or load a saved answers file (.json):' +
      '<input type="file" id="report-file-input" accept="application/json"></label>' +
      '<span id="report-source-note"></span>' +
      '<button id="report-clear-btn" type="button" class="report-clear-btn">Clear my saved answers for this workshop</button>';
    document.getElementById("report-print-btn").addEventListener("click", function () { window.print(); });

    // Deletes THIS browser's saved answers for the logged-in student and
    // this workshop — always the logged-in student's own data, regardless
    // of whose answers happen to be on screen (e.g. a file loaded below to
    // preview). Deliberately a manual, confirmed action: there's no
    // reliable way for code to tell "the student is finished" apart from
    // "stepped away mid-task," so this is never triggered automatically.
    document.getElementById("report-clear-btn").addEventListener("click", function () {
      const sid = StudentId.get();
      if (!sid) {
        alert("No saved answers to clear — you haven't set a name/ID on this browser.");
        return;
      }
      const ok = window.confirm(
        "This will permanently delete YOUR saved answers for \"" + cfg.workshopTitle + "\" from this browser.\n\n" +
        "Make sure you've already exported your answers (.json) or printed/saved your report first — this cannot be undone.\n\n" +
        "Continue?"
      );
      if (!ok) return;
      AnswerCapture.clearStore(sid, cfg.workshopId);
      document.getElementById("report-source-note").textContent =
        "Your saved answers for this workshop have been cleared from this browser.";
      renderReport({ studentId: sid, answers: {} }, cfg);
    });

    const studentId = StudentId.get();
    const store = studentId
      ? AnswerCapture.loadStore(studentId, cfg.workshopId)
      : { studentId: null, workshop: cfg.workshopId, savedAt: null, answers: {} };
    document.getElementById("report-source-note").textContent = studentId
      ? "Showing your saved progress from this browser."
      : "Set your name/ID above, or load a file below.";
    renderReport(store, cfg);

    document.getElementById("report-file-input").addEventListener("change", function (e) {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function (ev) {
        try {
          const loaded = JSON.parse(ev.target.result);
          document.getElementById("report-source-note").textContent = "Showing answers loaded from file: " + file.name;
          renderReport(loaded, cfg);
        } catch (err) {
          alert("Could not read that file — is it a valid exported answers .json?");
        }
      };
      reader.readAsText(file);
    });
  }

  window.ReportView = { init: init };
})();
