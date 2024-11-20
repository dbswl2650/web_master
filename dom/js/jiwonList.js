// jiwonList.js
bookList.forEach(e => {
  document.querySelector('#list').appendChild(makeRow(e));
});

document.querySelector('button.btn-primary')
  .addEventListener('click', (e) => {

    let bcode = document.querySelector('input[name="bookCode"]').value;
    let bname = document.querySelector('input[name="bookName"]').value;
    let bauthor = document.querySelector('input[name="author"]').value;
    let bpress = document.querySelector('input[name="press"]').value;
    let bprice = document.querySelector('input[name="price"]').value;
    console.log(bprice)

    if (!bcode || !bname || !bauthor || !bpress || !bprice) {
      alert(' 입력하세요');
      return;
    }
    let param = {
      code: bcode,
      name: bname,
      author: bauthor,
      press: bpress,
      price: bprice
    }

    let tr = makeRow(param);
    document.querySelector('#list').appendChild(tr);

    document.querySelector('input[name="bookCode"]').value = '';
    document.querySelector('input[name="bookName"]').value = '';
    document.querySelector('input[name="author"]').value = '';
    document.querySelector('input[name="press"]').value = '';
    document.querySelector('input[name="price"]').value = '';
  });

function makeRow (bookInfo = {
  name: code,
  name,
  author,
  press,
  price
}) {
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  let ip = document.createElement('input');
  ip.setAttribute("type", "checkbox");
  ip.addEventListener('click', (e) => e.stopPropagation());
  ip.addEventListener('change', (e) => {
    let chks = document.querySelectorAll('tbody input[type="checkbox"]');
    let chksd = document.querySelectorAll('tbody input[type="checkbox"]:checked');
    console.log(chks.length,chksd.length)
    document.querySelector('thead input[type="checkbox"]').checked = chks.length == chksd.length
  });
  td.appendChild(ip);
  tr.appendChild(td);

  for (let prop in bookInfo) {
    let td = document.createElement('td');
    let bcode = bookInfo[prop];
    td.innerHTML = bcode;
    let btn = document.createElement('button');
    tr.appendChild(td);
  }

  td = document.createElement('td');
  let btn = document.createElement('button');
  btn.innerHTML = '삭제';
  btn.setAttribute('class', 'btn-danger');
  btn.addEventListener('click', e => {
    e.target.parentElement.parentElement.remove();
    e.stopPropagation();
  })
  td.appendChild(btn);
  tr.appendChild(td);
  return tr;
}


  document.querySelector('thead input[type="checkbox"]').addEventListener('change', (e) => {
    document.querySelectorAll('tbody input[type="checkbox"]').forEach(element => {
      element.checked = e.target.checked
    });
  })


  document.querySelector('button.btn-danger')
  .addEventListener('click', (e) => {

    document.querySelectorAll('#list input[type="checkbox"]').forEach((item) => {
      if (item.checked) {
        item.parentElement.parentElement.remove()
      }
    });
  })