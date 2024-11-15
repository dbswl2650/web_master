// arrayExe2.js

// let dupAry = ['홍길동', '김민혁', '장동숙', '홍길동', '홍길도', '김민']
// let newAry = [];
// newAry = dupAry.filter(function(elem){
//   console.log(newAry.indexOf(elem));
//   if(newAry.indexOf(elem) == -1){
//     newAry.push(elem)
//     return true;
//   }
//   return false;
// });

// console.log(newAry); // ['홍길동', '김민혁', '장동숙', '홍길도', '김민']

// 교수님 박식
// let dupAry = ['홍길동', '김민혁', '장동숙', '홍길동', '홍길도', '김민']

// let newAry = [];
// let tempAry = [];
// newAry = dupAry.filter(function(elem, idx, ary) {
//   if (tempAry.indexOf(elem) == -1) {
//     tempAry.push(elem);
//     return true;
//   }
//   return false;
// })

// console.log(newAry);

let friendsAry = ['홍김동', '김민수', '박창석', '고민형', '김형식']
let kimAry = friendsAry.filter(function(elem) {
  if (elem[0].indexOf('김') != -1 ) {
    return true;
  } 
  return false;
})
console.log(kimAry);
