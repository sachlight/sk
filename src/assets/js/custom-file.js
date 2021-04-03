"use strict";
!(function (e, t, n) {
  var i = e.querySelectorAll(".inputfile");
  Array.prototype.forEach.call(i, function (e) {
    var t = e.nextElementSibling,
      n = t.innerHTML;
    e.addEventListener("change", function (e) {
      var i = "";
      (i =
        this.files && this.files.length > 1
          ? (this.getAttribute("data-multiple-caption") || "").replace(
              "{count}",
              this.files.length
            )
          : e.target.value.split("\\").pop()),
        i ? (t.querySelector("span").innerHTML = i) : (t.innerHTML = n);
    }),
      e.addEventListener("focus", function () {
        e.classList.add("has-focus");
      }),
      e.addEventListener("blur", function () {
        e.classList.remove("has-focus");
      });
  });
})(document, window, 0);
