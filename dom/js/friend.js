// // //추가 버튼에 이벤트.

// for(let i=0; i < friendList.length;i++){
//   document.querySelector('#list').appendChild(makeRow(friendList[i]));
// }
//    e.stopPropagation() 상위 요소로 이벤트 차단 중요~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 한거임
friendList.forEach(e => {
  document.querySelector('#list').appendChild(makeRow(e));
});

function makeRow(friendInfo = {
  name: name,
  phone,//속성과 변수가 같으면 줄여쓰기가능 52줄과 반대
  birth,
  blood
}) {
  let tr = document.createElement('tr');
  tr.addEventListener('click', function (e) { //this 이벤트를 받는 대상 this => 함수: window 객체, 이벤트 핸들러 : 이벤트 대상, object: 객체자신.

    document.querySelector('input[name="friendName"]').value = this.children[1].innerHTML
    document.querySelector('input[name="friendPhone"]').value = this.children[2].innerHTML;
    document.querySelector('input[name="friendBirth"]').value = this.children[3].innerHTML;
    document.querySelector('select[name="friendBloodType"]').value = this.children[4].innerHTML;
  })
  let td = document.createElement('td');
  let cb = document.createElement('input');
  cb.setAttribute("type", "checkbox");
  cb.addEventListener('click', (e) => e.stopPropagation());
  cb.addEventListener('change', (e) => {
    // document.querySelector('thead input[type="checkbox"]').checked = true
    // document.querySelectorAll('tbody input[type="checkbox"]').forEach(element => {
    //   if(!element.checked){
    //     document.querySelector('thead input[type="checkbox"]').checked = false
    //   }
    // });
    let chks = document.querySelectorAll('tbody input[type="checkbox"]');
    let chksd = document.querySelectorAll('tbody input[type="checkbox"]:checked');
    console.log(chks.length,chksd.length)
    document.querySelector('thead input[type="checkbox"]').checked = chks.length == chksd.length
    // if(chks.length == chksd.length){
    //   document.querySelector('thead input[type="checkbox"]').checked = true
    // }
    // else{
    //   document.querySelector('thead input[type="checkbox"]').checked = false
    // }
  });
  td.appendChild(cb);
  tr.appendChild(td);

  for (let prop in friendInfo) {
    let td = document.createElement('td');
    let fname = friendInfo[prop];
    td.innerHTML = fname; //<td> 홍길동 </td>
    let btn = document.createElement('button');
    tr.appendChild(td);
  }

  td = document.createElement('td');
  let btn = document.createElement('button');
  btn.innerHTML = '삭제';
  btn.setAttribute('class', 'btn btn-danger'); // 태그에 attribute를 추가
  btn.addEventListener('click', e => {
    e.target.parentElement.parentElement.remove();
    e.stopPropagation();//상위 요소로 이벤트 차단 중요~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 한거임
  })// 버블링 자식 요소에서 발생한 이벤트가 바깥 부모 요소로 전파 (기본값) flase,  캡쳐링 자식 요소에서 발생한 이벤트가 부모 요소부터 시작하여 안쪽 자식 요소까지 도달
  td.appendChild(btn);
  tr.appendChild(td);
  return tr;
}



document.querySelector('button.btn.btn-primary')
  .addEventListener('click', (e) => {

    let fname = document.querySelector('input[name="friendName"]').value;
    let ftel = document.querySelector('input[name="friendPhone"]').value;
    let fbirth = document.querySelector('input[name="friendBirth"]').value;
    let fblood = document.querySelector('select[name="friendBloodType"]').value;
    console.log(fblood)

    if (!fname || !ftel || !fbirth || !fblood) {
      alert('필수값을 입력하세요');
      return;
    }
    let param = {
      name: fname,
      phone: ftel,
      birth: fbirth,
      blood: fblood
    }

    let tr = makeRow(param);
    document.querySelector('#list').appendChild(tr);

    document.querySelector('input[name="friendName"]').value = '';
    document.querySelector('input[name="friendPhone"]').value = '';
    document.querySelector('input[name="friendBirth"]').value = '';
    document.querySelector('select[name="friendBloodType"]').value = 'A';
  });



// let tr = document.createElement('tr');

// //이름.
// let td = document.createElement('td');
// td.innerHTML = fname; //<td> 홍길동 </td>
// tr.appendChild(td);


// //연락처.
// td = document.createElement('td');
// let ftel = document.querySelector('input[name="friendPhone"]').value;
// td.innerHTML = ftel; //<td> 홍길동 </td>
// tr.appendChild(td);

// //생일.
// td = document.createElement('td');
// let fbirth = document.querySelector('input[name="friendBirth"]').value;
// td.innerHTML = fbirth; //<td> 홍길동 </td>
// tr.appendChild(td);


// <tr></tr>

document.querySelector('button.btn.btn-warning')
  .addEventListener('click', (e) => {
    let listTr = document.querySelectorAll('#list tr')
    let name = document.querySelector('input[name="friendName"]').value
    let tel = document.querySelector('input[name="friendPhone"]').value
    let birth = document.querySelector('input[name="friendBirth"]').value
    let blood = document.querySelector('select[name="friendBloodType"]').value
    for (let i = 0; i < listTr.length; i++) {
      if (listTr[i].children[1].innerHTML == name) {
        listTr[i].children[2].innerHTML = tel
        listTr[i].children[3].innerHTML = birth
        listTr[i].children[4].innerHTML = blood
      }
    }
  })

document.querySelector('button.btn.btn-danger')
  .addEventListener('click', (e) => {

    document.querySelectorAll('#list input[type="checkbox"]').forEach((item) => {
      if (item.checked) {
        item.parentElement.parentElement.remove()
      }
    });
  })
// document.querySelector('button.btn.btn-danger')
// .addEventListener('click', (e) => {
//   document.querySelectorAll('#list tr').forEach((item)=>{
//     if(item.children[0].children[0].checked){
//       item.remove()
//     }
//   });
// })

document.querySelector('thead input[type="checkbox"]').addEventListener('change', (e) => {
  document.querySelectorAll('tbody input[type="checkbox"]').forEach(element => {
    element.checked = e.target.checked
  });
})

document.querySelector('button.btn.btn-info').addEventListener('click', (e) => {
  let ary = []
  document.querySelectorAll('#list tr').forEach(item =>{
    let name = item.children[1].innerHTML;
    let phone = item.children[2].innerHTML;
    let birth = item.children[3].innerHTML;
    let btype = item.children[4].innerHTML;
    let obj = {name,phone,birth,btype}
    console.log(obj)
    ary.push(obj)
  });
  console.log(ary)

  
  let json = JSON.stringify(ary)
  localStorage.setItem("friendList",json)
  console.log(json)
})