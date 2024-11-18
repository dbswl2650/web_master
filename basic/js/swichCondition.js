//swichCondition.js

let grade = 'Z';

switch(grade) {
  case 'A':
    document.write('90 ~ 100 사이의 점수');
    break;
  case 'B':
    document.write('80~89 사이의 점수');
    break;

  case 'C':
    document.write('70 ~ 79 사이의 점수');
    break;

  case 'D':
    document.write('60 ~ 69 사이의 점수');
    break;

  default:
    document.write('60점 미만의 점수');
}