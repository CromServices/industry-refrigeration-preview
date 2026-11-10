(function () {
  var forms = document.querySelectorAll("form[data-preview-form]");
  for (var i = 0; i < forms.length; i++) {
    forms[i].addEventListener("submit", function (event) {
      event.preventDefault();
      var form = event.currentTarget;
      var thanks = form.parentNode.querySelector("[data-thanks]");
      form.setAttribute("hidden", "");
      if (thanks) thanks.removeAttribute("hidden");
    });
  }
})();
