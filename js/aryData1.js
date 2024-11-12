// aryData1.js
document.querySelector('#inputValue').remove(); // 요소(element) 삭제
document.querySelector('#addBtn').remove();// 요소(element) 삭제
document.querySelector('span').remove();// 요소(element) 삭제

let numAry = [23, 45, 34, 78, 51, 98];
let sum = 0;
for (let i=0; i< numAry.length; i++) {
  console.log(`${i} 위치=> ${numAry[i]}`);
  if(numAry[i] % 2 ==0) { // 배열의 값이 50보다 크면....누적.
    sum += numAry[i]; // sum = sum + numAry[i]
  } 
  // if(numAry[i] > 50) {
    // sum += numAry[i];
  // }
}

console.log(sum);