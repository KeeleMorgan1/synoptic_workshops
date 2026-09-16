/* structure-popup.js
   Click-to-view 2D structure popup for compound IDs.

   Usage on each page (after data/structures.js is loaded and AFTER all
   tables on the page have been rendered):
     StructurePopup.init(window.STRUCTURES);
     StructurePopup.clickify(document);

   clickify() scans <td> cells for text that exactly matches a known compound
   ID (an exact match against the STRUCTURES lookup, which only contains the
   100 parent-compound IDs) and turns that cell's content into a clickable
   button. Metabolite IDs (e.g. "D19-M1") never match the lookup, so Day 5's
   spectral-assignment exercise is unaffected by design -- showing a
   metabolite's structure there would hand away the answer.
*/
(function () {
  let library = {};
  let overlay, imgEl, titleEl, downloadLink;

  function buildModal() {
    if (overlay) return;
    overlay = document.createElement("div");
    overlay.className = "structure-popup-overlay";
    overlay.innerHTML =
      '<div class="structure-popup-box" role="dialog" aria-modal="true">' +
        '<button type="button" class="structure-popup-close" aria-label="Close">&times;</button>' +
        '<div class="structure-popup-title"></div>' +
        '<div class="structure-popup-img-wrap"><img alt="Compound structure"></div>' +
        '<div class="structure-popup-actions"><a class="download-link" download>Download image (.png)</a></div>' +
        '<p class="structure-popup-hint">Right-click (or long-press) the structure to copy or save it, or use the download link above.</p>' +
      '</div>';
    document.body.appendChild(overlay);
    titleEl = overlay.querySelector(".structure-popup-title");
    imgEl = overlay.querySelector("img");
    downloadLink = overlay.querySelector(".download-link");
    overlay.querySelector(".structure-popup-close").addEventListener("click", close);
    overlay.addEventListener("click", function (e) { if (e.target === overlay) close(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  }

  function open(id) {
    const src = library[id];
    if (!src) return;
    buildModal();
    titleEl.textContent = id;
    imgEl.src = src;
    imgEl.alt = "Structure of compound " + id;
    downloadLink.href = src;
    downloadLink.setAttribute("download", id + "_structure.png");
    overlay.classList.add("open");
  }

  function close() {
    if (overlay) overlay.classList.remove("open");
  }

  function init(structures) {
    library = structures || {};
  }

  function clickify(root) {
    root = root || document;
    const cells = root.querySelectorAll("td");
    cells.forEach(function (td) {
      if (td.dataset.structClickified) return;
      if (td.children.length > 0) return; // only plain-text cells
      const text = td.textContent.trim();
      if (!Object.prototype.hasOwnProperty.call(library, text)) return;
      td.dataset.structClickified = "1";
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "compound-id-link";
      btn.textContent = text;
      btn.setAttribute("aria-label", "View structure of " + text);
      btn.addEventListener("click", function () { open(text); });
      td.textContent = "";
      td.appendChild(btn);
    });
  }

  window.StructurePopup = { init: init, clickify: clickify, open: open, close: close };
})();
