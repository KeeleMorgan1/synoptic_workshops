/* student-id.js
   Captures a student name/ID (not a login) and persists it in localStorage
   so it doesn't need re-entering on every workshop page.
   No server, no auth — this is a label, not a credential.
*/
(function () {
  const KEY = "5ht6_student_id";

  function getStudentId() {
    return localStorage.getItem(KEY) || "";
  }

  function setStudentId(id) {
    localStorage.setItem(KEY, id.trim());
  }

  function clearStudentId() {
    localStorage.removeItem(KEY);
  }

  function ensureStudentId() {
    let id = getStudentId();
    if (!id) {
      id = window.prompt(
        "Enter your name or student ID to begin.\n" +
        "This is just a label so your facilitator can match your work to you later — " +
        "it is not a login and nothing is checked against a roster."
      );
      if (id && id.trim()) {
        setStudentId(id);
      } else {
        id = "";
      }
    }
    return getStudentId();
  }

  function renderBanner(containerId) {
    const el = document.getElementById(containerId || "id-banner");
    if (!el) return;
    const id = getStudentId();
    el.innerHTML = "";
    const label = document.createElement("span");
    label.textContent = id ? ("Working as: " + id) : "No name/ID set";
    const btn = document.createElement("button");
    btn.textContent = id ? "Change" : "Set name/ID";
    btn.onclick = function () {
      const next = window.prompt("Enter your name or student ID:", id);
      if (next && next.trim()) {
        setStudentId(next);
        renderBanner(containerId);
        document.dispatchEvent(new CustomEvent("student-id-changed"));
      }
    };
    el.appendChild(label);
    el.appendChild(btn);
  }

  window.StudentId = {
    get: getStudentId,
    set: setStudentId,
    clear: clearStudentId,
    ensure: ensureStudentId,
    renderBanner: renderBanner,
  };
})();
