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
  price: 12000,
  image: 'Demon Slayer.jpg'
},
{
  pcode: '#2',
  pname: '진격의 거인',
  price: 24000,
  image: 'Attack on titan.jpg'
},
{
  pcode: '#3',
  pname: '강철의 연금술사 BROTHERHOOD',
  price: 10000,
  image: 'FullmetalAlchemist.jpg'
},
{
  pcode: '#4',
  pname: '최애의 아이',
  price: 30000,
  image: 'OSHI NO KO.jpg'
},
{
  pcode: '#5',
  pname: '원피스',
  price: 15000,
  image: 'onepice.jpg'
},
{
  pcode: '#6',
  pname: '포켓몬',
  price: 12500,
  image: 'poketmon.jpg'
},
{
  pcode: '#7',
  pname: '디지몬',
  price: 13500,
  image: 'Digimon.jpg'
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