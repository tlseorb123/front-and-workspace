function to() {
  
  // 토글 할 버튼 선택 (btn1)
  const btn1 = document.querySelectorAll('#btn1');
  
  // btn1 숨기기 (display: none)
  if(btn1.style.display !== 'none') {
    btn1.style.display = 'none';
  }
  // btn` 보이기 (display: block)
  else {
    btn1.style.display = 'block';
  }
  
}