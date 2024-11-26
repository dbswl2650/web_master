// login.js

const memberData = [{
  id: 'user01',
  pw: '1111',
  name: '윤지원',
  responsibility: 'User'
},
{
  id: 'user02',
  pw: '2222',
  name: '조성민',
  responsibility: 'User'
},
{
  id: 'user03',
  pw: '3333',
  name: '김상연',
  responsibility: 'Admin'
}
]

const productData = [{
  pcode: '#1',
  pname: '귀멸의 칼날',
  price: 7,
  image: '귀멸의 칼날.gif'
},
{
  pcode: '#2',
  pname: '진격의 거인',
  price: 7,
  image: '진격의 거인.gif'
},
{
  pcode: '#3',
  pname: '강철의 연금술사 BROTHERHOOD',
  price: 3,
  image: '강철의 연금술사.gif'
},
{
  pcode: '#4',
  pname: '최애의 아이',
  price: 8,
  image: '최애의아이.gif'
},
{
  pcode: '#5',
  pname: '원피스',
  price: 5,
  image: '원피스.gif'
},
{
  pcode: '#6',
  pname: '포켓몬',
  price: 2,
  image: '피카츄.gif'
},
{
  pcode: '#7',
  pname: '디지몬',
  price: 2,
  image: '디지몬.gif'
},
{
  pcode: '#8',
  pname: '원펀맨',
  price: 4,
  image: '원펀맨.gif'
},
{
  pcode: '#9',
  pname: '나루토',
  price: 5,
  image: '나루토.gif'
}
]

const cartData = [{
  id: 'user01',
  pcode: '#1',
  qty: 2
},
{
  id: 'user01',
  pcode: '#2',
  qty: 3
},
{
  id: 'user01',
  pcode: '#3',
  qty: 5
},
{
  id: 'user02',
  pcode: '#4',
  qty: 1
},
{
  id: 'user02',
  pcode: '#1',
  qty: 3
},
{
  id: 'dbswl2650',
  pcode: '#7',
  qty: 1
},
{
  id: 'dbswl2650',
  pcode: '#5',
  qty: 1
},
{
  id: 'dbswl2650',
  pcode: '#3',
  qty: 1
}
]

function makeRow(obj = {}) {
let tr = document.createElement('tr');
for (let prop in obj) {
  let td = document.createElement('td');
  td.innerHTML = obj[prop];
  tr.appendChild(td);
}

return tr;
}