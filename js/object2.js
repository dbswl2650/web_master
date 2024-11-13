// object2.js

//함수: function.
//함수호출
let f1 = {name:'홍길동', age: 20};
let f2 = {name:'김길동', age: 21};
let f3 = {name:'박길동', age: 22};
let f4 = {name:'최길동', age: 23};

let myFriends = [f1, f2, f3, f4];

friendListFnc() //함수호출.

// 함수정의 => 실행은 호출을 통해서.
function friendListFnc() {
  console.log('friendListFnc()'); // tr>td:홍길동.......
  let newName = document.querySelector('#name').value;
  let newAge =  document.querySelector('#age').value;
  // falsy => false : '', 0, null, underfined
  // truthy => true : 값이 있는 것.

  if( newName != '' && newAge != '') {
    myFriends.push({name: newName, age: newAge});
  }

  let html = '<table border ="2">';
  // 코드작성.
  html += '<thead><tr><th>이름</th><th>나이</th></tr></thead>';
  html += '<tbody>'
  for (let i = 0; i < myFriends.length; i++) {
    html += '<tr><td>' + myFriends[i]['name'] + '</td>'+  '<td>' + myFriends[i]['age'] + '</td></tr>';
  }
  html += '</tbody></table>';

  document.querySelector('#show').innerHTML = html;
}






























