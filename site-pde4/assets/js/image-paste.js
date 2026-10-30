/* image-paste.js
   Reusable "attach one or more images" widget. Students plot graphs in
   Excel/Python and don't have a single file to hand in on this static,
   no-backend site — the natural workflow is either:
     - copy a chart, click into the box, paste (Ctrl+V), or
     - click "choose image files" and pick one or more from disk.
   Every image added is kept (not overwritten) and can be individually
   removed, so a task needing several graphs (e.g. one per compound) isn't
   limited to a single picture.

   Stored as an ARRAY of base64 data URLs via AnswerCapture.setAnswer/
   getAnswer, so it saves/restores/exports exactly like any other answer
   field, and the printable report (report-view.js) renders every image in
   the array inline. Older saved answers from before multi-image support
   (a single data-URL string, not an array) are still read correctly —
   normalized to a one-item array on load.

   Usage:
     <div id="d1t2a-graph-container"></div>
     ...
     ImagePaste.render("d1t2a-graph-container", "d1t2a-graph");
*/
(function () {
  function readFileAsDataURL(file, cb) {
    const reader = new FileReader();
    reader.onload = function (ev) { cb(ev.target.result); };
    reader.readAsDataURL(file);
  }

  function render(containerId, qid) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let saved = AnswerCapture.getAnswer(qid);
    let images;
    if (Array.isArray(saved)) images = saved.slice();
    else if (typeof saved === "string" && saved) images = [saved];
    else images = [];

    function persist() { return AnswerCapture.setAnswer(qid, images); }

    const wrap = document.createElement("div");
    wrap.className = "image-paste-box";
    wrap.tabIndex = 0;

    const placeholder = document.createElement("div");
    placeholder.className = "image-paste-placeholder";
    placeholder.textContent = "Click here and paste (Ctrl+V) a screenshot, or choose image file(s) below. You can add more than one.";
    wrap.appendChild(placeholder);

    const gallery = document.createElement("div");
    gallery.className = "image-paste-gallery";
    wrap.appendChild(gallery);

    function renderGallery() {
      gallery.innerHTML = "";
      placeholder.style.display = images.length ? "none" : "block";
      images.forEach(function (dataUrl, i) {
        const item = document.createElement("div");
        item.className = "image-paste-item";
        const img = document.createElement("img");
        img.className = "image-paste-preview";
        img.src = dataUrl;
        item.appendChild(img);
        const removeBtn = document.createElement("button");
        removeBtn.type = "button";
        removeBtn.className = "image-paste-remove";
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", function () {
          images.splice(i, 1);
          persist(); // removing data only ever shrinks storage, no need to check the result
          renderGallery();
        });
        item.appendChild(removeBtn);
        gallery.appendChild(item);
      });
    }

    function addImage(dataUrl) {
      images.push(dataUrl);
      const ok = persist();
      if (!ok) images.pop(); // storage full — don't show a thumbnail that wasn't actually saved
      renderGallery();
    }

    wrap.addEventListener("paste", function (e) {
      const cd = e.clipboardData || window.clipboardData;
      if (!cd || !cd.items) return;
      let handled = false;
      for (let i = 0; i < cd.items.length; i++) {
        if (cd.items[i].type.indexOf("image") !== -1) {
          const file = cd.items[i].getAsFile();
          readFileAsDataURL(file, addImage);
          handled = true;
        }
      }
      if (handled) e.preventDefault();
    });

    const fileRow = document.createElement("div");
    fileRow.className = "image-paste-file-row";
    const fileLabel = document.createElement("label");
    fileLabel.className = "image-paste-file-label";
    fileLabel.appendChild(document.createTextNode("Or choose image file(s):"));
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.multiple = true;
    fileInput.className = "image-paste-file-input";
    fileInput.addEventListener("change", function (e) {
      const files = Array.prototype.slice.call(e.target.files || []);
      files.forEach(function (file) {
        if (file.type.indexOf("image") === -1) return; // accept="image/*" already filters the picker; belt and braces
        readFileAsDataURL(file, addImage);
      });
      fileInput.value = ""; // allow choosing the same file again later
    });
    fileLabel.appendChild(fileInput);
    fileRow.appendChild(fileLabel);

    container.innerHTML = "";
    container.appendChild(wrap);
    container.appendChild(fileRow);

    renderGallery();
  }

  window.ImagePaste = { render: render };
})();
