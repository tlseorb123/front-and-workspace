// document.addEventListener("click", function (event) {
//   console.log(event);
//   if (event.target.id === "bout-one-line") {
//     var sibling = event.target.nextElementSibling;
//     if (sibling.id === "out-line") {
//       if (sibling.style.display === "none") {
//         sibling.style.display = "block";
//       } else {
//         sibling.style.display = "none";
//       }
//     }
//   }
// });

// document를 지정하면 전체 선택으로 가지고 간다.

// querySelector - 1개(객체), querySelectorAll - 1개 이상 (배열)
const checks = document.querySelectorAll("#bout-one-line");
//console.log(checks);
checks.forEach((check) => {
  // console.log(check);
  check.addEventListener("click", function (event) {
    console.log(event.target);
    if (event.target.id === "bout-one-line") {
      var sibling = event.target.nextElementSibling;
      if (sibling.style.display === "block") {
        sibling.style.display = "none";
      } else {
        sibling.style.display = "block";
      }
    }
  });
});

/*
const parentElement = document.querySelector(".sec1");

parentElement.addEventListener("click", function (event) {
  console.log(event.target);
  if (event.target.matches("#bout-one-line")) {
    var sibling = event.target.nextElementSibling;
    if (sibling.style.display === "block") {
      sibling.style.display = "none";
    } else {
      sibling.style.display = "block";
    }
  }
});
*/