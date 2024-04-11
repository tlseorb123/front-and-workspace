document.addEventListener("click", function (event) {
  if (event.target.id === "bout-one-line") {
    var elements = document.querySelectorAll("#out-line");
    elements.forEach(function (e) {
      if (e.style.display === "none") {
        e.style.display = "block";
      } else {
        e.style.display = "none";
      }
    });
  }
});
