//exe3.js
//1.태어난 년도 입력 -> 나이계산.
//2.직사각형 너비 계산 -> 가로길이, 세로길이 입력.
//3.최고값, 최소값 -> 입력숫자는 3개.
let question =1;
if(question == 1){
  let age = prompt('태어난 년도 입력');
  console.log((2024 - age) + "살");
} else if (question ==2) {
  let width = 100;
  let height = 80;
  let result = 0;
  console.log(result= width * height);
} else {
  let A = prompt('첫번째 숫자');
  let B = prompt('두번째 숫자');
  let c = prompt('세번째 숫자');
  let max = 0, min = 0;
  if (A < B){
    if (A < C){
      if (B < C){
        max = C;
        min = A;
      } else if (C < B){
        max = B;
        min = A;
      }
    }else if (A > C){
      max = B;
      min = C;
    }
}else if (A > B) {
  if()
}
