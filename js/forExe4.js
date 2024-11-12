// forExe4.js
let fname1 = '';
let fname2 = '';
let fname3 = '';
// 원시자료형 vs. 복합자료형.

let fnames = []; // 배열 변수 선언.
// fnames[0] = '홍길동';
// fnames[1] = '최민식';
// fnames[0] = '고창석';
// // push(값)
// fnames.push('박지희');
// 배열의 크기를 반환: length.

function addFriendFnc() {
  // 사용자 입력값을 확인 => 목록으로 출력.
  let fname = document.querySelector('#inputValue').value;
  console.log('친구이름', fname); // sum = sum + i
  fnames.push(`<p>${fname}</p>`);

  // 출력.
  let str = '';
  for(let i=0; i<fnames.length; i++) {
    str = str + fnames[i]; // str += fnames[i]
  }
  document.querySelector('#show').innerHTML = str;

}