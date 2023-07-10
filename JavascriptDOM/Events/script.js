//EVENTS
/*
Mouse Event
    click
    dbclick
    mouseover
    mouseenter
    mouseup
    wheel
    ...
keyboard Event
Resources Event
Focus Event
View Event
Form Event
CSS Animation & Transtition Event
Drag & Drop Event
dll
*/


//mengubah warna
//dengan CSS, apabila klik ditekan
/*
.p3:active { 
    background-color: lightblue;
}
*/
//dengan javascript
const p3 = document.querySelector('.p3');
function ubahWarnap3(){
    p3.style.backgroundColor = 'lightblue';
}

function ubahWarnap2(){
    p2.style.backgroundColor = 'lightblue';
}
const p2 = document.querySelector('.p2');
p2.onclick = ubahWarnap2;


// menambah item baru ketika diklik
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function(){
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const  teksLiBaru = document.createTextNode('item baru');
    liBaru.appendChild(teksLiBaru);
    ul.appendChild(liBaru);
}); //carikan elemen p4 lalu ketika ada event klik lakukan sesuatu
