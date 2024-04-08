const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  button.textContent = `클릭 횟수: ${event.detail}`;
});

var currentNode = document.querySelector("#child-5");
var prevNode = currentNode.previousElementSibling;

while (prevNode) {
  prevNode = prevNode.previousElementSibling;
}

const div = document.querySelector(".parent-class");
div.addEventListener("click", (event) => {
  if (div === "block") {
    div.style.display = "none";
  } else {
    div.style.display = "block";
  }
});
