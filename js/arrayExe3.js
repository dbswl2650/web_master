// arrayExe3.js
/*
  여러줄 주석처리.
  empAry => 사원중에서 성별:여자, 급여: 5000 이상.
  => femaleAry 저장.  
 */
  console.log(empAry);

  let femaleAry = empAry.filter((pi) => {
    return pi.gender == 'Female' && pi.salary >= 5000;
  //   if(pi.gender == 'Female' && pi.salary >= 5000) {
  //     return true;
  //     }
  //     return false;
  });
  console.log(femaleAry);







/*
let friendAry = [
  {name:"홍길동", age: 20, weight: 56.7},
  {name:"김민기", age: 21, weight: 93.7},
  {name:"박철순", age: 22, weight: 79.7},
  {name:"이만수", age: 23, weight: 88.7}
]

// 포이치는 리턴값이 없어서 새로운 배열이 나오지 않음 필터는 리스트를 반환해줌
let temp = friendAry.filter((friend) => {
  if(friend.weight > 60){
      console.log(friend);
      return true;
  }
  return false;
});
console.log(temp);
*/