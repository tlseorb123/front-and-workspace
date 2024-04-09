const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  button.textContent = `클릭 횟수: ${event.detail}`;
});

var currentNode = document.querySelector("#men");
var prevNode = currentNode.previousElementSibling;

while (prevNode) {
  prevNode = prevNode.previousElementSibling;
}

// 이벤트 리스너 등록 : 이벤트 리스너를 사용하여 특정 이벤트가 발생했을 때 실행
// 할 함수를 등록할 수 있다. 대표적인 메서드로 'addEventListener()'가 있다
const btn = document
  .querySelector("#child-1")
  .addEventListener("click", function () {
    alert("버튼이 클릭되었습니다");
  });

// 이벤트 핸들러 함수 : 이벤트가 발생했을 때 실험할 함수를 정의한다. 이벤트 리스너에
// 전달되는 함수를 이벤트 핸들러 함수라고 한다.
function handleClick() {
  alert("버튼이 클릭되었습니다");
}
document.getElementById("child-5").addEventListener("click", handleClick);

// 이벤트 객체 : 이벤트 핸들러 함수에 전달되는 이벤트 객체를 사용하여 이벤트에 대한
// 세부 정보를 얻을 수 있다. 이 객체는 이벤트가 발생한 요소, 마우스의 좌표,키보드
// 상태 등을 포함한다.
document.getElementById("child-6").addEventListener("click", function (e) {
  console.log("클릭된 위치: " + e.clientX + ", " + e.clientY);
});

document.getElementById("child-1").addEventListener("click", function () {
  var elementToHide = document.getElementById("child-2");
  if (elementToHide.style.display === "none") {
    elementToHide.style.display = "block";
  } else {
    elementToHide.style.display = "none";
  }
});

// 토글 : 두 가지 상태를 클릭했을 때 번갈아가며 전환하는 경우를 토글이라고 한다.
// js에서 인라인 스타일 :  js에서 HTML 요소를 조작 상태에 따라 동적으로 스타일을 
// 변경할 때 사용한다.
