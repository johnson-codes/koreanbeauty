(function () {
  var root = document.getElementById("reviews");
  if (!root) return;

  var pages = [].slice.call(root.querySelectorAll(".review-page"));
  var dots = [].slice.call(root.querySelectorAll("[data-review-page]"));
  var prev = root.querySelector("[data-review-prev]");
  var next = root.querySelector("[data-review-next]");
  var index = 0;

  function show(nextIndex) {
    if (!pages.length) return;
    index = (nextIndex + pages.length) % pages.length;
    pages.forEach(function (page, i) {
      page.classList.toggle("is-active", i === index);
    });
    dots.forEach(function (dot, i) {
      dot.classList.toggle("is-active", i === index);
      dot.setAttribute("aria-selected", i === index ? "true" : "false");
    });
  }

  if (prev) prev.addEventListener("click", function () { show(index - 1); });
  if (next) next.addEventListener("click", function () { show(index + 1); });
  dots.forEach(function (dot) {
    dot.addEventListener("click", function () {
      show(Number(dot.getAttribute("data-review-page")) || 0);
    });
  });

  show(0);
})();
