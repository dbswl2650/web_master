/*
  변수의 데이터 타입 : 기본타입 vs 참조 타입

  변수 선언
  1) var
    - 호이스팅 : 실제 선언 위치와 상관없이 자유롭게 사용 가능
    - 함수 스코프(범위)
    - 중복 선언 허용
*/
console.log(text);
text='Fisrt';
console.log(3, text);
var text = 'Hello'; // 변수 선언 전 변수 사용 가능
console.log(2, text);

var text = 'Second';
console.log(4, text);

console.clear();

(function funcScope(){
  console.log(msg);
  if(true){
    var msg = 'Scope Test';
  }
  console.log(msg);
})();

(function funScope(){
  console.log(i, j);
  for(var i =1; i<= 3; i++){
    for(var j = 1; j <=3; j++){
      console.log(`${i} X ${j} = ${(i *j)}`);
    }
  };
  console.log('last', i,j);
})();

/*
  2015년 이후부터 --
  2) let   : 변수
  3) const : 상수 => Object, Array의 경우 내부 값은 변경가능
  - 공톰점 : 중복 선언 불가, 블록 스코프(범위), 변수 선언 후 사용
 */
(function blockScope(){

})();

/*
  변수의 데이터 타입 : NUMBER, STRING, OBJECT, ARRAY, BOOLEAN, ETC
  1) 기본 타입 : NUMBER, STRING, BOOLEAN
  2) 참조 타입 : OBJECT, ARRAY
*/
// 1. 기본 타입
let name = 'Hong Kil-Dong';
let age = 28;
let isChecked = true;

let newName = name;
let newAge = age;
let isSelected = isChecked;

// 2. 참조타입
let person = {
  name : 'Hong kil-Dong',
  age : 28,
  isChecked : true
};

let newPers = {
  newName : 'Kang Ho-Dong',
  newAge : 35,
  isSelected : false
}

newPers = person;
newPers.newName = 'Han Sang-kil';
console.log(person);
console.log(newPers);

// == 상수
const x = 1;
// x = 10; // Error Code


const y = {
  id : 'L',
  pwd : 1234
};

y.id = 'k';
y.pwd = 1024;
console.log(y);

// y = {}; // Error Code

/*
  - 값이 존재하지 않는 변수를 사용했을 때
  undefined : 자바스크립트 -> 자동으로 해당 변수에 값이 존재하지 않다고 알려줄 때
  null      : 개발자가 해당 변수의 값을 삭제
*/

let a;
console.log(a);
let b = null;
console.log(b);