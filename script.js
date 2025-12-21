document.addEventListener("DOMContentLoaded", function() {
  var loader = document.getElementById("page-loader");
  var body = document.body;

  if (!loader) return;

  setTimeout(function() {
    loader.classList.add("hide");
    body.classList.remove("loading");
  }, 600);

  setTimeout(function() {
    loader.remove();
  }, 1200);
});
