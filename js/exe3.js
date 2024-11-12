//exe3.js
//1.태어난 년도 입력 -> 나이계산.
//2.직사각형 너비 계산 -> 가로길이, 세로길이 입력.
//3.최고값, 최소값 -> 입력숫자는 3개.
let question = 1;

//1번코드
let age = prompt('태어난 년도 입력');
console.log((2024 - age) + "살");

//2번코드
let width = 100;
let height = 80;
let result = 0;
console.log(result = width * height);

//3번코드
let num1 = prompt('임의의값을 입력하세요!.');
let num2 = prompt('임의의값을 입력하세요!.');
let num3 = prompt('임의의값을 입력하세요!.');

// 동일한 값이 있으면 처리 안함.
if (num1 == num2 || num2 == num3 || num1 == num3) {
  comsole.log('동일한 값이 존재합니다.')
} else {
  let max, min = 0;
  if (num1 > num2) {
    // num1과num2 비교.
    if (num1 > num3) {
      max = num1;
      if (num2 > num3) {
        min = num3;
      } else {
        min = num2;
      }
    } else {
      max = num3
      min = num2;
    }
  } else {
    max = num2;
    min = num1;
    if (num1 > num3) {
      min = num3;
    } else {
      if (num3 > num2) {
        max = num3;
      }

    }
  }
}