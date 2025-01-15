init();

function jQeryFun(selector){

  return{
    tagList : ducument.querySelectorAll(selector),
    val : function(data) {
      this.tagList.forEach(tag => {
        tag.value = data;
      })
    },
    text : function(data){
      this.tagList.forEach(tag => {
        tag.textContent = data;
      })
    }
  }
}

// 초기셋팅
function init() {

  $('button#init').on('click', function (event) {
    $('#empInfo [name]').val('');
  });

  $('button#insert').on('click', addEmpInfo);

  $('button#update').on('click', updateEmpInfo);

  $('button#del').on('click', deleteEmpInfo);

  findAllEmpList();
}

function findAllEmpList() {
  // 서버가 가지고 있는 회원 데이터 전체조회
  $.ajax('http://192.168.0.11:8099/empList')
    .done(result => {
      addTbody(result);
    })
    .fail(err => console.log(err));
}

function addTbody(list) {
  $('#empList tbody').empty();

  $.each(list, function (idx, info) {
    let trTag = $('<tr></tr>');

    trTag.on('click', (e) =>{
      let selectTr = e.currentTarget;
      let selectEmployeeId = selectTr.children[0].textContent;
      findEmpById(selectEmployeeId);
    })

    // 사원번호
    let tdTag = $('<td></td>');
    tdTag.text(info.employeeId);
    trTag.append(tdTag);
    // 이름
    tdTag = $('<td></td>');
    tdTag.text(info.lastName);
    trTag.append(tdTag);
    // 업무
    tdTag = $('<td></td>');
    tdTag.text(info.jobId);
    trTag.append(tdTag);

    $('table#empList tbody').append(trTag);

  })
}

// 2번째 
// function addEmpList(list) {
//   $.each(list, function(idex, info){
//     let trTag = $('<tr></tr>');
//     for(let field of ['employeeId', 'lastName', 'jobId']){
//       trTag.append(`<td>${info[field]}</td>`);
//     }
//     $('table#empList tbody').append(trTag);
//   })
// }

// function getEmpInfo(event) {
//   let trTag = event.currentTagrget;
//   let firstTdTag = trTag.firstElementChild;
//   let eId = firstTdTag.textContent;

//   eId = event.currentTagrget.firstElementChild.textContent;

//   addEmpList(eId);
// }



function findEmpById(empId) {

  $.ajax(`http://192.168.0.11:8099/empInfo?employeeId=${empId}`)
    .done(result => {
      displayEmpInfo(result);
    })
    .fail(err => console.log(err));
}

function displayEmpInfo(emp) {

  $(`#empInfo [name="employeeId"]`).val(emp.employeeId);
  $(`#empInfo [name="lastName"]`).val(emp.lastName);
  $(`#empInfo [name="email"]`).val(emp.email);
  $(`#empInfo [name="hireDate"]`).val(emp.hireDate);
  $(`#empInfo [name="jobId"]`).val(emp.jobId);
}

function addEmpInfo(event) {
  let employeeId = $('table#empInfo input[name = "employeeId"]').val();
  if(employeeId != ''){
    alert('새로운 데이터가 아닙니다.');
    return;
  }

  let empInfo = formEmpInfo();
  console.log(empInfo);
  $.ajax('http://192.168.0.11:8099/empInsert', {
    type : 'POST',
    data : empInfo
  })
   .done(result => {
    $(`#empInfo [name="employeeId"]`).val(result.employeeId);
    findAllEmpList();
   })
   .fail(err => console.log(err));
}

function formEmpInfo() {
  
  let obj = {};
  obj.no = $(`#empInfo [name="no"]`).val();
  obj.employeeId = $(`#empInfo [name="employeeId"]`).val();
  obj.lastName = $(`#empInfo [name="lastName"]`).val();
  obj.email = $(`#empInfo [name="email"]`).val();
  obj.hireDate =  $(`#empInfo [name="hireDate"]`).val();
  obj.jobId =  $(`#empInfo [name="jobId"]`).val();

  return obj;
}

function updateEmpInfo(event) {
  let empInfo = formEmpInfo();
  console.log(empInfo);
  $.ajax('http://192.168.0.11:8099/empUpdate', {
    type : 'POST',
    contentType : 'application/json',
    data : JSON.stringify(empInfo)
  })
   .done(result => {
    findAllEmpList();
   })
   .fail(err => console.log(err));
}

function deleteEmpInfo(event) {
  let empId = $('table#empInfo [name="employeeId"]').val();
  console.log(empId);
  $.ajax(`http://192.168.0.11:8099/empDelete?employeeId=${empId}`)
  .done(result => {
    if(result == null){
      alert('정상적으로 삭제되지 않았습니다.')
    } else {
      alert('정상적으로 삭제되었습니다.')
      $('button#init').click();
      findAllEmpList();
    }
  })
  .fail(err => console.log(err));
}