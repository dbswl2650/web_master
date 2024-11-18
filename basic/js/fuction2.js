// function2.js
// let sum = 0;

// 함수선언식.
// function sum(param1, param2) {
//   return param1 +param2;
// }

// 함수표현식.
let sum = function(param1 = 0, param2 = 0) {
  // falsy => 0, '', null, underfined
  // if(!param1 || !param2) {
  // return 0;
  // }
  return param1 + param2;
}
console.log(sum(3, 6));

// 화살표 함수. 단순한 표현 추구.
let getMaxFunc = (num1 = 0, num2 = 0) => num1 >= num2 ? num1 : num2;
console.log(getMaxFunc(10, 17));

  // {
  // if (num1 >= num2) {
  //   return num1;
  // } else {
  //   return num2;
  // }
  // return num1 >= num2 ? num1 : num2;
  // return result;
// }