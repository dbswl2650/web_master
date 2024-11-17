// 과제.js

// 1번 자리배치
let audience = parseInt(10);
let jull = parseInt(3);
let place = 1
let placeJull = 0;

if(audience%jull != 0 ) {
  placeJull = parseInt(audience/jull) + 1
} else {
  placeJull = parseInt(audience/jull)
}
console.log(placeJull);

// 2번 구구단 출력
for(let i = 2; i <= 9; i++) {
  for(let j = 1; j <= 9; j++) {
    console.log(i + "*" + j + '=' + (i*j));
  }
}

// 3번 배열을 오름차순으로 정렬.
let num = [20, 17, 45, 11, 82]
num.sort();
console.log(num);