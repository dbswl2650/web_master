//operator.js

// let addFnc = () => { //화살표함수.
//   let v1 = document.getElementById('num1').value;
//   let v2 = document.querySelector('#num2').value;
//   let result = parseInt(v1) + parseInt(v2); // '12' => 12
  
//   document.querySelector('#result').value = result;
// }
// document.querySelector('#add').addEventListener('click', addFnc);// 이벤트핸들러.

// let subFnc = () => { //화살표함수.
//   let v1 = document.getElementById('num1').value;
//   let v2 = document.querySelector('#num2').value;
//   let result = parseInt(v1) - parseInt(v2); // '12' => 12
  
//   document.querySelector('#result').value = result;
// }
// document.querySelector('#sub').addEventListener('click', subFnc);

// let multyFnc = () => { //화살표함수.
//   let v1 = document.getElementById('num1').value;
//   let v2 = document.querySelector('#num2').value;
//   let result = parseInt(v1) * parseInt(v2); // '12' => 12
  
//   document.querySelector('#result').value = result;
// }
// document.querySelector('#multy').addEventListener('click', multyFnc);

// let dividFnc = () => { //화살표함수.
//   let v1 = document.getElementById('num1').value;
//   let v2 = document.querySelector('#num2').value;
//   let result = parseInt(v1) / parseInt(v2); // '12' => 12
  
//   document.querySelector('#result').value = result;
// }
// document.querySelector('#divid').addEventListener('click', dividFnc);

let addFnc = (e) => { //화살표함수.
  console.log(e.target.innerHTML);
  let v1 = document.getElementById('num1').value;
  let v2 = document.querySelector('#num2').value;
  if(!v1 || !v2){
    alert('값을 입력하세요');
    return;
  }
  if (e.target.innerHTML == '더하기') {
    result = parseInt(v1) + parseInt(v2); // '12' => 12
  } else if (e.target.innerHTML == '빼기') {
    result = parseInt(v1) - parseInt(v2); // '12' => 12
  } else if (e.target.innerHTML == '곱하기') {
    result = parseInt(v1) * parseInt(v2); // '12' => 12
  } else if (e.target.innerHTML == '나누기') {
    result = parseInt(v1) / parseInt(v2); // '12' => 12
  }
  
  document.querySelector('#result').value = result;
}
document.querySelector('#add').addEventListener('click', addFnc);// 이벤트핸들러.
document.querySelector('#sub').addEventListener('click', addFnc);
document.querySelector('#multy').addEventListener('click', addFnc);
document.querySelector('#divid').addEventListener('click', addFnc);

