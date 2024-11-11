//ifCondition.js
//boolean => true, false

let isOk = true;
let age = 15;

console.log(isOk)
let result = isOk !="true"; // typeof result => boolean
result = 34 < 20; // false.


if (age >= 20) {
  //if 블럭.
  alert('성인입니다!');
} else {
  alert('미성년자입니다!');
}