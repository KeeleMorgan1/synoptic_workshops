/* phase.js
   Outline-first release. Each day's data/ folder is uploaded on the
   workshop day; until then the page shows the tasks, questions and answer
   boxes, with placeholders where the data tables and downloads will go.

   data/released.js (shipped inside each day's data release) sets
   window.DAY_DATA_RELEASED = true. If it hasn't loaded, the day is in
   outline mode.

   Phase.skip(e) is called by the guarded page code when a step fails —
   in outline mode that's expected (the data isn't there yet) and is
   ignored; once the data is released it's a real error and is logged. */
(function () {
  function released() { return window.DAY_DATA_RELEASED === true; }

  function skip(e) {
    if (released()) console.error("[phase] Error on a released page:", e);
  }

  function placeholder(text) {
    var p = document.createElement("div");
    p.className = "phase-placeholder";
    p.textContent = text;
    return p;
  }

  function applyOutline() {
    if (released() || document.body.getAttribute("data-phase") === "outline") return;
    document.body.setAttribute("data-phase", "outline");
    var main = document.querySelector("main");
    if (!main) return;

    var banner = document.createElement("div");
    banner.className = "phase-banner";
    banner.innerHTML = "<b>Preview — outline only.</b> The data for this workshop will be released on the " +
      "workshop day. You can read the tasks and questions now to prepare. Anything you type in the " +
      "boxes is saved in this browser as usual.";
    main.insertBefore(banner, main.firstChild);

    // Data tables (left empty because their data isn't loaded).
    // Keep answer-entry tables (they carry form controls or rendered cells);
    // replace empty data frames even when a render left an empty wrapper shell.
    document.querySelectorAll("table.data-table").forEach(function (t) {
      if (t.querySelector("td")) return;                         // has rendered cells, leave it
      if (t.querySelector("input, select, textarea")) return;    // answer-entry table, keep
      var wrap = t.closest(".screening-table-wrap");
      (wrap || t).replaceWith(placeholder("Data table — released on the workshop day."));
    });
    // Containers for tables built from data (e.g. screening tables)
    document.querySelectorAll("main div[id]").forEach(function (d) {
      if (d.textContent.trim() || d.querySelector("input, select, textarea, img")) return;
      if (!/table|screen|chart|plot|list/i.test(d.id)) return;
      if (/graph-container$/.test(d.id)) return;                 // graph paste boxes are kept
      d.appendChild(placeholder("Compound data — released on the workshop day."));
    });
    // Download links with nothing to download
    document.querySelectorAll("a.download-link").forEach(function (a) {
      var href = a.getAttribute("href") || "";
      if (/spectra-tool\.html$/.test(href)) {
        a.textContent = "Metabolite Spectra Tool — opens on the workshop day";
        a.classList.add("phase-disabled");
        a.addEventListener("click", function (e) { e.preventDefault(); });
        return;
      }
      if (!href) a.style.display = "none";
    });
  }

  if (document.readyState === "complete") applyOutline();
  else window.addEventListener("load", applyOutline);

  window.Phase = { skip: skip, released: released, applyOutline: applyOutline };
})();
