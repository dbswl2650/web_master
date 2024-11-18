// friend.js
// this => 함수: window 객체, 이벤트핸들러: 이벤트대상, object: 객체자신.
function makeRow(friendInfo = {name, phone, birth, blood}) {
  // 이름, 연락처, 생일. => tr 생성한 후 tr반환.
  let tr = document.createElement('tr');
  tr.addEventListener('click', function(e) {
    console.log(this.children[0].innerHTML)
    document.querySelector('input[name="friendName"]').value = this.children[1].innerHTML
    document.querySelector('input[name="friendPhone"]').value = this.children[2].innerHTML
    document.querySelector('input[name="friendBirth"]').value = this.children[3].innerHTML
    document.querySelector('select[name="friendBloodType"]').value = this.children[4].innerHTML
  })
  // 체크박스
  // <td><input type = "checkbox"></td>

  let td = document.createElement('td');
  let cd = document.createElement('input')
  cd.setAttribute("type", "checkbox");
  td.appendChild(cd);
  tr.appendChild(td);

  let btn = document.createElement('button')
  for(let prop in friendInfo) {
  let td = document.createElement('td');
  let fname = friendInfo[prop];
  td.innerHTML = fname;
  tr.appendChild(td); 
  }
  td = document.createElement('td');
  btn.innerHTML = '삭제'
  btn.setAttribute('class', 'btn btn-danger'); // 태그에 attribute를 추가.
  btn.addEventListener('click', (e) => { // 삭제버튼에 클릭이벤트 등록.
    e.target.parentElement.parentElement.remove();
  })
  td.appendChild(btn);
  tr.appendChild(td);
  return tr;
}

// data.js
console.log(friendList);
// 배열을 활용해서 친구목록 출력.
friendList.forEach((friend) =>
  document.querySelector('#list').appendChild(makeRow(friend)));


// 추가 버튼에 이벤트.
document.querySelector('button.btn.btn-primary').addEventListener('click', (e) => {
  let fname = document.querySelector('input[name="friendName"]').value;
  let fphone = document.querySelector('input[name="friendPhone"]').value;
  let fbirth = document.querySelector('input[name="friendBirth"]').value;
  let fblood = document.querySelector('select[name="friendBloodType"]').value;
  if(!fname || !fphone || !fbirth || !fbirth) {
    alert('필수값을 입력하세요');
    return;
  }
  let param = {name: fname, phone: fphone, birth: fbirth, blood: fblood}
  
  let tr = makeRow(param);
  document.querySelector('#list').appendChild(tr);

  //입력값 초기화
  document.querySelector('input[name="friendName"]').value = '';
  document.querySelector('input[name="friendPhone"]').value = '';
  document.querySelector('input[name="friendBirth"]').value = '';
  document.querySelector('select[name="friendBloodType"]').value = 'A';
  // // tr>td*3
  // let tr = document.createElement('tr');
  // // 이름.
  // let td = document.createElement('td');
  // let fname = document.querySelector('input[name="friendName"]').value;
  // td.innerHTML = fname; // <td>홍길동</td>
  // tr.appendChild(td); 

  // td = document.createElement('td');
  // let fphone = document.querySelector('input[name="friendPhone"]').value;
  // td.innerHTML = fphone;
  // tr.appendChild(td); 

  // td = document.createElement('td');
  // let fbirth = document.querySelector('input[name="friendBirth"]').value;
  // td.innerHTML = fbirth;
  // tr.appendChild(td); 
 
  // document.querySelector('#list').appendChild(tr);
  // <tr><td>홍길동</td><td>010-1111-1111</td><td>2000-01-01</td></tr>
});

// 수정버튼에 이벤트.
document.querySelector('button:nth-of-type(2)').addEventListener('click', (e) =>{
  console.log('수정버튼.');
  let listTr = document.querySelectorAll('#list tr')
  let name = document.querySelector('input[name="friendName"]').value;
  let phone = document.querySelector('input[name="friendPhone"]').value;
  let birth = document.querySelector('input[name="friendBirth"]').value;
  let blood = document.querySelector('select[name="friendBloodType"]').value;
  for (let i = 0; i < listTr.length; i++) {
    // 수정할대상 찾기.
    if(listTr[i].children[1].innerHTML == name) {
      // 연락처, 생일, 혈액형.
      listTr[i].children[2].innerHTML = phone;
      listTr[i].children[3].innerHTML = birth;
      listTr[i].children[4].innerHTML = blood;
    }
  }
})

//선택삭제 이벤트.
document.querySelector('button.btn.btn-danger').addEventListener('click', (e) => {
  // #list input[type="checkbox"]
  document.querySelectorAll('#list tr').forEach((item) =>{
    if(item.children[0].children[0].checked) {
      item.remove();
    }
  });
}); // end of 선택삭제.

// 전체선택 하는 이벤트 추가. change 이벤트.