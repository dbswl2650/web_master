// 나만의exe.js

//교수님 버전
let scoreAry = [];
for (let i = 1; i <= 5; i++) {
  let inputValue = prompt('점수를 입력');
  scoreAry.push(parseInt(inputValue));
}

let sum = 0;
let max = 0,
  min = scoreAry[0];
let average = 0;

for (let i = 0; i < scoreAry.length; i++) {
  sum += scoreAry[i];
  if (max < scoreAry[i]) {
    max = scoreAry[i];
  }
  if (min > scoreAry[i])
    min = scoreAry[i];
}
average = sum / scoreAry.length;
console.log(`우리반 평균은 ${average} 이고, 최고점은 ${max} 이고, 최저점은 ${min} 이다.`)