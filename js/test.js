// test.js
// 1. 1 ~ 10 까지의 숫자의 합.
// 1 ~ 10의 합: 55 입니다.

// 2. 구구단 4단 출력( 4 * 1 = 4) 콘솔에 출력.

let dan = 4;
for (let i = 1; i < 10; i++) {
  console.log(`(${dan} * ${i} = ${dan*i})`);
}

//3. 배열의 요소 활용. 합을 구하는데 합을 => 출력: 홀수의 합은 ?? 입니다.

let numAry = [23, 66, 92, 71, 52, 49];
let sum =0;

for (let i = 0; i < numAry.length; i++) {
  if(numAry[i] % 2 == 1) {
    sum += numAry[i];
  }
} console.log(`홀수의 합 : ${sum}`);