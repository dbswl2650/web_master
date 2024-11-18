// basic.js
    // Documetn Object : 객체(속성, 메소드)
    let ulDom = document.querySelector('ul');
    // ulDom.children)
    console.log(ulDom.children[0].innerHTML);

    // DOM 객체에는 메소드(객체생성 메소드: createElement()).
    let liTag = document.createElement('li'); // <li></li>요소를 생성.
    liTag.innerHTML = '수박'; // <li>수박</li>
    ulDom.appendChild(liTag); // ulDom요소의 자식요소로 liTag 등록.

    //coding ...
    let pTag = document.createElement('p');
    pTag.innerHTML = '<b>Welcome</b>';
    document.querySelector('#show').appendChild(pTag);

    let buttonTag = document.createElement('button');
    buttonTag.innerHTML = '<b>삭제</b>';
    buttonTag.addEventListener('click', (e) => {
      // console.log(e.target.previousElementSibling.remove()); // 화면요소 삭제(remove).
      // document.querySelector('ul>li:nth-of-type(1)').remove();
      console.log(document.querySelector('ul').children[0].remove());
    })
    document.querySelector('#show').appendChild(buttonTag);
    //