(function () {
  var forms = document.querySelectorAll("form[data-preview-form]");
  for (var i = 0; i < forms.length; i++) {
    forms[i].addEventListener("submit", function (event) {
      event.preventDefault();
      var form = event.currentTarget;
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      var thanks = form.parentNode.querySelector("[data-thanks]");
      var nameInput = form.querySelector("[name='name']");
      var name = nameInput && nameInput.value ? nameInput.value.replace(/^\s+|\s+$/g, "") : "";
      var nameEl = thanks && thanks.querySelector("[data-thanks-name]");
      if (nameEl) nameEl.textContent = name || "there";
      form.setAttribute("hidden", "");
      if (thanks) {
        thanks.removeAttribute("hidden");
        thanks.focus();
      }
    });
  }
})();
