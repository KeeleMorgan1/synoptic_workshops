/* marks.js
   Shows the mark available for each answer box, plus task and day totals.
   Shared by every task page and the spectra tool. The numbers come from
   ../assets/data/marks.js (window.MARKS), which must load first.

   How each ID in MARKS is found on the page:
     - a text box:            [data-qid="<id>"]
     - a graph/image box:     #<id>-container
     - a table (screening or data-entry): the table whose cells' data-qids
       start with "<id>-"
     - anything else:         a selector in window.MARK_TARGETS
   The label goes into the question label just above the box when there is
   one, otherwise on its own line above the box.

   Page HTML is never edited to add marks. Boxes on this page with no mark,
   and marks for this day that match nothing, are listed in the browser
   console (F12) as warnings. */
(function () {
  var MARKS = window.MARKS || {};
  var TARGETS = window.MARK_TARGETS || {};
  var GROUPS = window.MARK_GROUPS || [];

  function fmt(n) { return n + (n === 1 ? " mark" : " marks"); }
  function badge(n, extra) {
    var s = document.createElement("span");
    s.className = "mark-badge";
    s.textContent = "[" + fmt(n) + (extra ? " — " + extra : "") + "]";
    s.setAttribute("data-marks", n);
    return s;
  }
  function cssEsc(s) { return window.CSS && CSS.escape ? CSS.escape(s) : s; }

  // Which day this page belongs to, from its folder name (e.g. /day3-efficacy-safety/)
  var dayMatch = location.pathname.match(/\/day(\d+)-/);
  var day = dayMatch ? dayMatch[1] : null;
  function isThisDay(id) { return day && new RegExp("^d" + day + "(?![0-9])").test(id); }

  function findTarget(id) {
    var el = document.querySelector('[data-qid="' + cssEsc(id) + '"]');
    if (el && !el.closest("table")) return { el: el, kind: "box" };
    el = document.getElementById(id + "-container");
    if (el) return { el: el, kind: "box" };
    var cells = document.querySelectorAll('[data-qid^="' + cssEsc(id + "-") + '"]');
    for (var i = 0; i < cells.length; i++) {
      var t = cells[i].closest("table");
      if (t) {
        var wrap = t.closest(".screening-table-wrap") || t;
        return { el: wrap.parentElement && wrap.parentElement.id ? wrap.parentElement : wrap, kind: "box" };
      }
    }
    if (TARGETS[id]) {
      el = document.querySelector(TARGETS[id]);
      if (el) return { el: el, kind: "inline" };
    }
    return null;
  }

  // Look back past at most a couple of siblings for the question label
  function labelFor(el) {
    var p = el.previousElementSibling;
    for (var i = 0; p && i < 3; i++, p = p.previousElementSibling) {
      if (p.matches("label.question-label")) return p;
      if (p.matches("textarea, [data-qid], .task-box, h5, .task-header")) return null;
      if (p.querySelector && p.querySelector("[data-qid], textarea")) return null;
    }
    return null;
  }

  function place(target, n, extra) {
    if (target.el.getAttribute("data-mark-done")) return; // already labelled
    target.el.setAttribute("data-mark-done", "1");
    var b = badge(n, extra);
    if (target.kind === "inline") { target.el.appendChild(b); return; }
    var lab = labelFor(target.el);
    if (lab) { lab.appendChild(b); return; }
    var line = document.createElement("div");
    line.className = "mark-line";
    line.appendChild(b);
    target.el.parentNode.insertBefore(line, target.el);
  }

  function apply() {
    var found = {};
    Object.keys(MARKS).forEach(function (id) {
      var t = findTarget(id);
      if (t) { place(t, MARKS[id]); found[id] = true; }
    });
    GROUPS.forEach(function (g) {
      var el = document.querySelector(g.selector);
      if (!el) return;
      g.ids.forEach(function (id) { found[id] = true; });
      if (el.parentNode.querySelector(".mark-group")) return;
      var total = g.ids.reduce(function (s, id) { return s + (MARKS[id] || 0); }, 0);
      var line = document.createElement("div");
      line.className = "mark-line mark-group";
      line.appendChild(badge(total, g.text));
      el.insertAdjacentElement("afterend", line);
    });

    // Per-task totals, from whatever labels ended up inside each task section
    document.querySelectorAll(".task-section").forEach(function (sec) {
      var head = sec.querySelector(".task-header");
      if (!head || head.querySelector(".mark-total")) return;
      var sum = 0;
      sec.querySelectorAll(".mark-badge").forEach(function (b) { sum += Number(b.getAttribute("data-marks")); });
      if (!sum) return;
      var s = document.createElement("span");
      s.className = "mark-total";
      s.textContent = fmt(sum);
      head.appendChild(s);
    });

    // Day total, from the full marks list (so marks earned on a separate
    // page, such as the Day 5 spectra tool, still count)
    var main = document.querySelector("main");
    if (day && main && document.querySelector(".task-section") && !document.querySelector(".mark-day-total")) {
      var dayTotal = Object.keys(MARKS).filter(isThisDay).reduce(function (s, id) { return s + MARKS[id]; }, 0);
      if (dayTotal) {
        var d = document.createElement("div");
        d.className = "mark-day-total";
        d.textContent = "This workshop is marked out of " + dayTotal + ". The mark available for each answer is shown beside it.";
        main.insertBefore(d, main.firstChild);
      }
    }

    // Warnings for the course team (browser console only)
    var onTaskPage = !!document.querySelector(".task-section");
    document.querySelectorAll("[data-qid]").forEach(function (el) {
      if (el.closest("table")) return; // table cells are marked as a whole table
      var id = el.getAttribute("data-qid");
      if (!(id in MARKS)) console.warn("[marks] No mark set for box: " + id);
    });
    document.querySelectorAll('[id$="-graph-container"]').forEach(function (el) {
      var id = el.id.replace(/-container$/, "");
      if (!(id in MARKS)) console.warn("[marks] No mark set for graph box: " + id);
    });
    if (onTaskPage) {
      Object.keys(MARKS).filter(isThisDay).forEach(function (id) {
        if (!found[id]) console.warn("[marks] Mark set for " + id + " but no matching box on this page.");
      });
    }
  }

  // Tables and graph boxes are built by the page's own scripts, which run
  // before the load event — so label on load, and once more shortly after
  // in case anything renders late.
  if (document.readyState === "complete") apply();
  else window.addEventListener("load", apply);
  setTimeout(apply, 1500);

  window.Marks = { apply: apply };
})();
