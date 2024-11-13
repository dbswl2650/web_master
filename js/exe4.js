// exe4. js
// 2024년 11월 12일 숙제.
// 우리반에는 5명의 친구. 성적을 입력
// 합산 => 평균, 최고점수, 최저점수 구해서
// 우리반 평균은 ??이고, 최고점은 ??이고, 최저점은 ??이다.
document.querySelector('#inputValue').remove(); // 요소(element) 삭제
document.querySelector('#addBtn').remove();// 요소(element) 삭제
document.querySelector('span').remove();// 요소(element) 삭제

let score = []; // 10, 20, 30, 40, 50
let sum = 0;
let average = 0;
let min = 0;
let max = 0;

for (let i = 0; i < 5; i++) {
  let test =parseInt(prompt('1~5 번점수 입력하세요!'));
  score.push(test);
  sum += score[i];
  average = sum /score.length;
  if (score[i] > max) {
    max = score[i]
  }
  if (min == 0) {
    min = score[i]
  }
  else if(min > score[i]) {
    min = score[i]
  }
}
console.log(`우리반 평균은 ${average} 이고, 최고점은 ${max} 이고, 최저점은 ${min} 이다.`);
