// builtIn.js (내장객체)
// 날짜(Date객체)

let today = new Date(); // Date객체.
today.setFullYear(2023);
today.setMonth(4);
today.setDate(31);

console.log(today.getFullYear()); // 년도.
console.log(showTime(today)); // 년도.

console.log(`월: ${today.getMonth() + 1}, 날짜: ${today.getDate()}, 요일: ${today.getDay()}`);
// today.getHours()+today.getMinutes()+today.getSeconds();

function showTime(time = new Date()) {
  // 2024-11-13 14:22:23 포맷.
  let yyyy = time.getFullYear(); // 2024
  let MM = time.getMonth() + 1; // 11 <- 10 (월 이 0부터 시작함.)
  let dd = time.getDate(); // 14

  let HH = time.getHours();
  let mm = time.getMinutes();
  let ss = time.getSeconds(); // number
  // console.log(('' + ss).length); // 2 -> '2'
  MM = ('' + MM).length == 1 ?  '0'+MM : MM; // 00 ~ 09
  let day = time.getDay();

  let days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  today.getDay();

  return yyyy + '-' + MM + '-' + dd + ' ' + HH + ':' + mm + ':' + ss + ' ' + days[day];
}