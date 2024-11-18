// object3.js

let person = {
  name: "박민수",
  birth: "2000-04-05",
  bloodType: 'A',
  showInfo:  function () { // 객체소속의 함수 => 메소드.
    console.log(`이름 ${this.name}이고, 생일은 ${this.birth}입니다.`)
  }
}

person.showInfo();

Math.round(12.5); //메소드 실행.
Math.random(); // 0~1 사이의 임의 실수.
console.log(Math.PI);

for (let i =1; i <= 5; i++) {
  console.log(parseInt(Math.random() * 10 + 1)); // 1 ~ 10 사이의 임의 수 생성.
}

// 반복문(for, while);
let i = 0;
while(i < 5) {
  console.log('i의 값은' + i);
  i++;
}

// 어떤 조건을 만족할 동안에만 반복을 실행하도록.
while(true) {
  console.log(i++);
  if (parseInt(Math.random() * 10 + 1) == 5) {
    break;
  }
}

// 임의의 문자를 입력 => 콘솔: 당신이 입력한 문자는 ??? 입니다.
// "종로" 문자가 들어오면 반복문을 종료.
i = 0;
while(true) {
  let j = prompt("임의의 문자를 입력!");
  console.log(`당신이 입력한 문자는 ${j} 입니다.`);
  i++;
  if(j == '종료' || i == 5) {
    break;
  }
}