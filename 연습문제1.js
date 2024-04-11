
document.addEventListener("click", function (event) {
  if (event.target.id==="bout-one-line") {
    var sibling = event.target.nextElementSibling;
    if (sibling.id === "out-line") {
      if (sibling.style.display === "none") {
        sibling.style.display = "block";
      } else {
        sibling.style.display = "none";
      }
    }
  }
});