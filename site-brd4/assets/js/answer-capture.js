/* answer-capture.js
   Shared autosave + export module, used identically on every workshop page.

   Usage:
     <textarea data-qid="d1t1-report"></textarea>
     <select data-qid="d1t3-flag-A01">...</select>
     ...
     AnswerCapture.init("day1-pharmacology");

   Every element with [data-qid] auto-saves to localStorage on input/change.
   The student ID and workshop ID are embedded INSIDE the exported JSON file's
   contents (not just relied on in the filename) so a VLE renaming the upload,
   or a student renaming the file, can't silently misattribute a submission.

   getAnswer/setAnswer are exposed so non-value-based widgets (e.g.
   image-paste.js, which stores an array of base64 data URLs rather than
   reading an element's .value) can read/write the same per-student answer
   store directly, instead of every widget re-implementing its own storage.
   setAnswer returns true/false so a caller can react if the save didn't
   actually persist (see the quota-exceeded handling below).

   loadStore is exposed (as a pure function of studentId + workshopId) so
   report-view.js can read a saved answer set to render a printable report,
   without needing this module's init() to have run on that page.

   clearStore is exposed so a student can deliberately wipe their saved
   answers for one workshop from this browser once they're done with it
   (see the "Clear my saved answers" button on report.html) — this is a
   student-initiated action, never automatic, since there's no reliable way
   for code to tell "finished" apart from "stepped away mid-task."
*/
(function () {
  let workshopId = null;
  let quotaWarningShown = false;

  function storageKey(studentId, wsId) {
    return "5ht6_answers_" + wsId + "__" + studentId;
  }

  function loadStore(studentId, wsId) {
    const raw = localStorage.getItem(storageKey(studentId, wsId));
    if (!raw) {
      return { studentId: studentId, workshop: wsId, savedAt: null, answers: {} };
    }
    try {
      return JSON.parse(raw);
    } catch (e) {
      return { studentId: studentId, workshop: wsId, savedAt: null, answers: {} };
    }
  }

  function clearStore(studentId, wsId) {
    localStorage.removeItem(storageKey(studentId, wsId));
  }

  // Returns true if the save actually persisted, false if it didn't (e.g.
  // the browser's storage quota is full). Never throws.
  function writeStore(store) {
    const studentId = StudentId.get();
    if (!studentId) return false;
    const savedAt = new Date().toISOString();
    const payload = JSON.stringify({
      studentId: studentId,
      workshop: workshopId,
      savedAt: savedAt,
      answers: store.answers
    });
    try {
      localStorage.setItem(storageKey(studentId, workshopId), payload);
    } catch (e) {
      updateStatus(null, "NOT SAVED — this browser's storage is full. See the warning for what to do.");
      if (!quotaWarningShown) {
        quotaWarningShown = true;
        alert(
          "This change was NOT saved — this browser's local storage is full.\n\n" +
          "What to do:\n" +
          "1. If you can, export your answers now for any workshop (the \"Export my answers\" button) so nothing already saved is at risk.\n" +
          "2. On an earlier workshop's report page, use \"Clear my saved answers for this workshop\" once you've exported/printed it, to free up space.\n" +
          "3. Then try again."
        );
      }
      return false;
    }
    store.studentId = studentId;
    store.workshop = workshopId;
    store.savedAt = savedAt;
    return true;
  }

  function restoreFields() {
    const studentId = StudentId.get();
    if (!studentId) return;
    const store = loadStore(studentId, workshopId);
    document.querySelectorAll("[data-qid]").forEach(function (el) {
      const qid = el.getAttribute("data-qid");
      if (Object.prototype.hasOwnProperty.call(store.answers, qid)) {
        el.value = store.answers[qid];
        el.dispatchEvent(new Event("change"));
      }
    });
    updateStatus(store.savedAt);
  }

  function saveField(el) {
    const studentId = StudentId.get();
    if (!studentId) {
      updateStatus(null, "Set your name/ID above to save answers.");
      return;
    }
    const store = loadStore(studentId, workshopId);
    const qid = el.getAttribute("data-qid");
    store.answers[qid] = el.value;
    if (writeStore(store)) updateStatus(store.savedAt);
  }

  function updateStatus(savedAt, overrideMsg) {
    const statusEl = document.getElementById("save-status");
    if (!statusEl) return;
    if (overrideMsg) {
      statusEl.textContent = overrideMsg;
    } else if (savedAt) {
      const t = new Date(savedAt);
      statusEl.textContent = "Saved locally " + t.toLocaleTimeString();
    } else {
      statusEl.textContent = "Not saved yet — answers save automatically as you type.";
    }
  }

  function bindFields() {
    document.querySelectorAll("[data-qid]").forEach(function (el) {
      if (el.dataset.acBound) return; // avoid double-binding on rebind()
      el.dataset.acBound = "1";
      // Each field gets its own debounce timer (closure-scoped, not shared
      // across the module) so editing one field can't cancel a pending save
      // on a different field that was typed into moments earlier.
      let fieldTimer = null;
      el.addEventListener("input", function () {
        clearTimeout(fieldTimer);
        fieldTimer = setTimeout(function () { saveField(el); }, 400);
      });
      el.addEventListener("change", function () {
        clearTimeout(fieldTimer);
        saveField(el);
      });
    });
  }

  // Read a single answer directly from the store, for widgets that don't use
  // a plain form-element .value (e.g. a pasted image's data URL).
  function getAnswer(qid) {
    const studentId = StudentId.get();
    if (!studentId) return undefined;
    const store = loadStore(studentId, workshopId);
    return store.answers[qid];
  }

  // Write a single answer directly into the store, bypassing the [data-qid]
  // element-value flow. Updates the save-status indicator the same as any
  // other field so the student sees consistent save feedback. Returns
  // true/false so a caller (e.g. image-paste.js) can undo an optimistic UI
  // update if the save didn't actually persist.
  function setAnswer(qid, value) {
    const studentId = StudentId.get();
    if (!studentId) {
      updateStatus(null, "Set your name/ID above to save answers.");
      return false;
    }
    const store = loadStore(studentId, workshopId);
    store.answers[qid] = value;
    const ok = writeStore(store);
    if (ok) updateStatus(store.savedAt);
    return ok;
  }

  function exportAnswers() {
    const studentId = StudentId.get();
    if (!studentId) {
      alert("Set your name/ID first (top of page) before exporting.");
      return;
    }
    const store = loadStore(studentId, workshopId);
    const blob = new Blob([JSON.stringify(store, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const safeId = studentId.replace(/[^a-z0-9_-]+/gi, "_");
    const a = document.createElement("a");
    a.href = url;
    a.download = safeId + "__" + workshopId + "__answers.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function buildExportBar() {
    if (document.querySelector(".export-bar")) return;
    const bar = document.createElement("div");
    bar.className = "export-bar";
    bar.innerHTML =
      '<span id="save-status">Not saved yet.</span>' +
      '<span class="export-bar-actions">' +
        '<a href="report.html" class="report-link">View / print my report</a>' +
        '<button id="export-btn" type="button">Export my answers (.json)</button>' +
      '</span>';
    document.body.appendChild(bar);
    document.getElementById("export-btn").addEventListener("click", exportAnswers);
  }

  function init(wsId) {
    workshopId = wsId;
    buildExportBar();
    bindFields();
    restoreFields();
    document.addEventListener("student-id-changed", restoreFields);
  }

  // Call after adding fields to the DOM dynamically (e.g. a screening table
  // rendered after a data fetch resolves) so the new elements get autosave
  // + have any previously-saved values restored, without re-binding
  // already-bound static fields.
  function rebind() {
    bindFields();
    restoreFields();
  }

  window.AnswerCapture = {
    init: init,
    exportAnswers: exportAnswers,
    rebind: rebind,
    getAnswer: getAnswer,
    setAnswer: setAnswer,
    loadStore: loadStore,
    clearStore: clearStore
  };
})();
