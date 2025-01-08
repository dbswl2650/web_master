init();

// 최초 셋팅
function init() {
  // 각 태그의 이벤트 처리
  document.getElementById('initBtn').addEventListener('click', function (event) {
    // 입력 태크 초기화
    // 1) 입력태그를 검색 : input, select
    let tags = document.querySelectorAll('input, select');
    tags.forEach(function(tag, index, array){
      // 2) 입력태그의 value 속성 초기화
      tag.value = '';
    })

    // 내가 한거!!!
    // document.getElementsByName('no')[0].value = '';
    // document.getElementsByName('id')[0].value = '';
    // document.getElementsByName('password')[0].value = '';
    // document.getElementsByName('name')[0].value = '';
    // document.getElementsByName('gender')[0].value = '';
    // document.getElementsByName('joinDate')[0].value = '';
  })
  document.getElementById('insertBtn').addEventListener('click', addUserInfo);

  document.getElementById('updateBtn').addEventListener('click', updateUserInfo);

  document.getElementById('delBtn').addEventListener('click', deleteUserInfo);

  // 데이터를 가져오는 작업
  getUserList();
}

function getUserList() {
  // 회원 데이터 전체조회
  fetch('http://192.168.0.11:8099/userList')
    .then(res => res.json())
    .then(result => {
      // 통신의 결과가 도착했음을 의미
      // addTr(result);
      addTbody(result);
    })
    .catch(err => console.log(err));
  // console.log('end');
}

// 내가한거
// function addTr(list){
//   list.forEach(element => {
//     let html=
//     `<tr>
//             <td>${element.no}</td>
//             <td>${element.id}</td>
//             <td>${element.name}</td>
//             <td>${element.joinDate}</td>
//     </tr>`
//     document.querySelector('#list tbody').insertAdjacentHTML("beforeend",html);
//   });
// }

//교수님이 하신거
function addTbody(list) {
  document.querySelector('#list tbody').replaceChildren();
  for (let info of list) {
    //<td/> 들을 감쌀 <tr/>이 필요
    let trTag = document.createElement('tr');
    trTag.addEventListener('click', function (event) {
      let selectTr = event.currentTarget;
      let selectId = selectTr.children[1].textContent;
      findUserById(selectId);
    });

    let tdTag = document.createElement('td');
    tdTag.textContent = info.no
    trTag.append(tdTag);

    tdTag = document.createElement('td');
    tdTag.textContent = info.id
    trTag.append(tdTag);

    tdTag = document.createElement('td');
    tdTag.textContent = info.name
    trTag.append(tdTag);

    tdTag = document.createElement('td');
    tdTag.textContent = info.joinDate.slice(0, 10);

    trTag.append(tdTag);

    document.querySelector('#list tbody').append(trTag);
  }
}

/*
function addTbody(list) {
  let tbodyTag = document.querySelector('#list tbody');
  list.forEach(info => {
    let trTag = addTrTag(info);
    tbodyTag.append(trTag);
  })
}
*/

function addTrTag(info) {

  let fields = ['no', 'id', 'name', 'joinDate'];
  let trTag = document.createElement('tr');
  for (let field of fields) {
    let tdTag = document.createElement('td');
    tdTag.textContent = (field == 'joinDate') ? (info[field]).slice(0, 10) : info[field];
    trTag.append(tdTag);
  }
  return trTag
}

function findUserById(userId) {
  //회원정보 조회
  fetch(`http://192.168.0.11:8099/userInfo?id=${userId}`)
    .then(response => response.json())
    .then(result => {
      getUserInfo(result);
    })
    .catch(err => console.log(err));

}

function getUserInfo(user) {
  console.log(user);
  // document.getElementsByName('no')[0].value = user.no;
  // document.getElementsByName('id')[0].value = user.id;
  // document.getElementsByName('password')[0].value = user.password;
  // document.getElementsByName('name')[0].value = user.name;
  // document.getElementsByName('gender')[0].value = user.gender;
  // document.getElementsByName('joinDate')[0].value = user.joinDate;

  for (let field in user) {
    console.log(field)
    document.getElementsByName(field)[0].value = (field == 'joinDate') ? user[field].slice(0, 10) : user[field]
  }
}

function addUserInfo(event) { // 새로운 회원을 등록
  // 1) 새로운 회원정보 확인
  let userInfo = formUserInfo();

  // 2) 서버에 전송 : AJAX
  fetch('http://192.168.0.11:8099/userInsert', {
    method : 'post',
    // content-type : application/x-www-form-urlencoded 
    body : new URLSearchParams(userInfo)
  })
  .then(res => res.json())
  .then(result =>{
    // console.log(result);
    // 3) 화면에 출력
    getUserList();
    document.getElementsByName('no')[0].value = result.no;
  })
  .catch(err => console.log(err));
  
}

function formUserInfo() {
  // 입력태그들의 값을 가져옴
  // 1) 입력태그를 검색 : input, select
  let tags = document.querySelectorAll('input, select');

  let obj = {};
  tags.forEach(function(tag, index, array){
    // 2) 입력태그의 value 속성 값 가져오기
    console.log(tag.name, tag.value);
    obj[tag.name] = tag.value;
  });

  console.log('obj', obj);
  return obj;
}
// 전제조건 입력태그의 name속성 = 통신할때 사용하는 이름

function updateUserInfo(event) {
  //1) 현재 사용자가 입력한 회원정보 확인
  let userInfo = formUserInfo();
  //2) 서버 전송: AJAX
  fetch('http://192.168.0.11:8099/userUpdate', {
    method : 'post',
    // content-type : application/json
    // json은 headers를 선언해서 content-type을 직접 입력해줘야한다.
    headers : {
      'content-type' : 'application/json'
    },
    body : JSON.stringify(userInfo)
  })
  .then(res => res.json())
  .then(result => {
    // console.log(result);
    //3) 화면 출력
    getUserList();
  })
  .catch(err => console.log(err));
  
}

function deleteUserInfo(event) {
  // 1) 삭제할 회원정보 확인
  let userInfo = formUserInfo();
  let userId = userInfo.id;
// 위와 같은거 userId = document.getElementsByName('id')[0].value;
  // 2) 서번 전송 : AJAX
  fetch(`http://192.168.0.11:8099/userDelete?id=${userId}`)
  .then(res => res.json())
  .then(result => {
    // 3) 화면 출력
    getUserList();
  })
  .catch(err => console.log(err));
}