//exe3.js
//1.태어난 년도 입력 -> 나이계산.
//2.직사각형 너비 계산 -> 가로길이, 세로길이 입력.
//3.최고값, 최소값 -> 입력숫자는 3개.
let question = 1;
  if (question == 1) {
    let age = prompt('태어난 년도 입력');
    console.log((2024 - age) + "살");

} else if (question == 2) {
    let width = 100;
    let height = 80;
    alert('너비' + (width * height));

} else (question ==3)
    let a = prompt('첫번째 숫자');
    let b = prompt('두번째 숫자');
    let c = prompt('세번째 숫자');
    let max = 0, min = 0;

    if (a > b) {
      if (b > c) {
        max = a;
        min = c;
      }
      else if (c > b) {
        if (a > c) {
          max = a;
          min = b;
       }
        else if (c > a) {
         max = c;
          min = b;
       }
      }
    }
    else if (b > a) {
     if (a > c) {
        max = b;
       min = c;
      }
      else if (c > a) {
       if (b > c) {
          max = b;
          min = a;
        }
        else if (c > b) {
          max = c;
          min = a;
        }
      }
    }
    console.log('젤 큰숫자 ' + max + ' 젤 작은숫자 ' + min);