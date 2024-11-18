// forLoop.js
// 1 ~ 5 까지 합 => sum 변수 누적.
let sum =0;
sum = sum + 1;
sum = sum + 2;
sum = sum + 3;
sum = sum + 4;
sum = sum + 5;

// let i = 0;
// i = i + i;

sum = 10 % 3; // /: 나누기, %: 나누고 남은값

console.log('1 ~ 5 까지의 합: ' + sum);
sum = 0; // 초기화.

//for 문은 (괄호안에 무조건 3개의 조건이 들어가야함!)
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 1) { //홀수값만 누적.
    console.log('sum=>' + sum + ', i=> ' + i);
    sum = sum + i; // i값: 1, i값: 2,
  }
  // if (i == 7) {
  //   break;
  // }
}
console.log('1 ~ ' + 10 + '  까지의 합: ' + sum);