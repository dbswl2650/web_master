// array.js

let numAry = new Array(); // []; 배열객체 생성.
numAry[0] = 10;
numAry.push(20);
numAry.push(25);
numAry.push(35);

// 첫번째 제거. shift
console.log('제거된 값', numAry.shift());
console.log('제거된 값', numAry.pop());
numAry.unshift(99);

// console.log(numAry.length);
// for (let number of numAry) { // for .. of 반복문; index를 가지고 오고싶은면 for .. in!!
  // console.log(number);
// }

// 배열일 경우에 method. forEach(함수)
numAry.forEach(function (param1 // 배열요소.
  , param2 // 배열인덱스
  , param3 // 배열자신
  ) {
  console.log(param1, param2, param3);
});

// 배열의 합계.
let sum = 0;
numAry.forEach(elem => sum += elem);
console.log(`배열의 합계: ${sum}`);





let obj = {
  name: "Hong",
  age : 20,
  weight: 66.7
}
 // object 인 경우에는 for .. in 반복문.
for (let prop in obj) {
  console.log(prop);
}