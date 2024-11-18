// forExe1.js

// 3 * 1 = 3
// 3 * 2 = 6
// ...
// 3 * 9 = 27
// <table border="2">
// <tr><td>3 * 1</td><td>=</td>td>3</td></tr>
// <tr><td>3 * 2</td><td>=</td><td>6</td></tr>
// <table>
document.write('<table border="2" style="">');
for (let j = 2; j <= 9; j++){
  const num = j; // 2, 3, 4, 5, ... 9
  for (let i = 1; i <= 9; i++) {
    if (i % 2 == 1) { // 홀수.
      document.write(`<tr style= "background: red;"><td> ${num} * ${i} </td><td> = </td><td> ${num * i} </tr>`);
    } else { // 짝수.
      document.write('<tr style= "background: pink;"><td>' + num + ' * ' + i + '</td><td> = </td><td>' + num * i + '</tr>');
    }
  } // end of for(let i=1...)
}
document.write('</table>');