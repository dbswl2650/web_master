

init();

// 최초 셋팅
function init() {

    $('button#searchBtn').on('click', searchBoardList);
   
    document.getElementById('resetBtn')
        .addEventListener('click', function(e){
            document.querySelector('input[name="keyword"]').value = '';
            getBoardList('');
        });

    document.getElementById('initBtn')
        .addEventListener('click', formInit);


    $('button#saveBtn').on('click', addBoardInfo);

    $('button#updateBtn').on('click', updateBoardInfo);

    $('button#delBtn').on('click', delBoardInfo);

    getBoardList();
}

function getBoardList() {
    $.ajax('http://192.168.0.11:8099/boardList')
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
            let selectBoardNo = selectTr.children[0].textContent;
            findBoardByNo(selectBoardNo);

        })
    
        let tdTag = $('<td></td>');
        tdTag.text(info.boardNo);
        trTag.append(tdTag);

        tdTag = $('<td></td>');
        tdTag.text(info.boardTitle);
        trTag.append(tdTag);

        tdTag = $('<td></td>');
        tdTag.text(info.boardWriter);
        trTag.append(tdTag);

        tdTag = $('<td></td>');
        tdTag.text(info.boardRegdate);
        trTag.append(tdTag);
    
        $('#empList tbody').append(trTag);
    
      
    })
}

function searchBoardList(event) {
  let btnTag = event.currentTarget;
  let selectTag = btnTag.previousElementSibling.previousElementSibling.previousElementSibling;
  let searchOption = selectTag.value;
  let inputTag = btnTag.previousElementSibling.previousElementSibling;
  let searchKeyword = inputTag.value;
  console.log(searchOption, searchKeyword)  

  $.ajax(`http://192.168.0.11:8099/boardList?${searchOption}=${searchKeyword}`)
  .done(result => {
    addTbody(result);
  })
  .fail(err => console.log(err));
}

function findBoardByNo(boardNo) {

    $.ajax(`http://192.168.0.11:8099/boardInfo?boardNo=${boardNo}`)
      .done(result => {
        displayBoardInfo(result);
      })
      .fail(err => console.log(err));
}

function displayBoardInfo(board) {

    $(`#info [name="boardNo"]`).val(board.boardNo);
    $(`#info [name="boardTitle"]`).val(board.boardTitle);
    $(`#info [name="boardWriter"]`).val(board.boardWriter);
    $(`#info [name="boardContent"]`).val(board.boardContent);
    $(`#info [name="boardRegdate"]`).val(board.boardRegdate);
}

function addBoardInfo(event){
  let boardNo = $('#info input[name = "boardNo"]').val();
  if(boardNo != ''){
    alert('새로운 데이터가 아닙니다.');
    return;
  }

  let boardInfo = formBoardInfo();
  console.log(boardInfo);
  $.ajax('http://192.168.0.11:8099/boardInsert', {
    type : 'POST',
    data : boardInfo
  })
   .done(result => {
    getBoardList();
   })
   .fail(err => console.log(err));
}

function formBoardInfo() {
  
    let obj = {};
    obj.no = $(`#info [name="no"]`).val();
    obj.boardNo = $(`#info [name="boardNo"]`).val();
    obj.boardTitle = $(`#info [name="boardTitle"]`).val();
    obj.boardWriter = $(`#info [name="boardWriter"]`).val();
    obj.boardContent =  $(`#info [name="boardContent"]`).val();
    obj.boardRegdate =  $(`#info [name="boardRegdate"]`).val();
  
    return obj;
}

function updateBoardInfo(event) {
    let boardInfo = formBoardInfo();
    console.log(boardInfo);
    $.ajax('http://192.168.0.11:8099/boardUpdate', {
      type : 'POST',
      contentType : 'application/json',
      data : JSON.stringify(boardInfo)
    })
     .done(result => {
        getBoardList();
     })
     .fail(err => console.log(err));
}

function delBoardInfo(event) {
    let boardNo = $('#info [name="boardNo"]').val();
  console.log(boardNo);
  $.ajax(`http://192.168.0.11:8099/boardDelete?boardNo=${boardNo}`)
  .done(result => {
    if(result == null){
      alert('정상적으로 삭제되지 않았습니다.')
    } else {
      alert(`삭제완료(${boardNo}).`)
      $('button#initBtn').click();
      getBoardList();
    }
  })
  .fail(err => console.log(err));
}

// 초기화
function formInit() {
    let insertList = document.querySelectorAll('#info input');
    insertList.forEach(el => el.value = '');
}
