//DOM Selection

//document.querySelector()
    //bisa dianggap selector CSS
    //yang dikembalikan adalah elemen (cuma 1)
    //contoh jika ingin ubah warna paragraf 4 dengan CSS
    /*
        #container #b p {
            color: green;
        }
    */
    //dengan JS
    const p4 = document.querySelector('#b p');
    p4.style.color = 'green';
    p4.style.fontSize = '30px';
    //contoh jika ingin ubah warna background item 2 dengan CSS
    /*
        #b ul li:nth-child(2){
            background-color: orange;
        }
    */
   const li2 = document.querySelector('#b ul li:nth-child(2)');
   li2.style.backgroundColor = 'orange';
   //const p = document.querySelector('p'); 
   //p.innerHTML = 'Ini diubah melalui javascript'
   //karena mengembalikan elemen, maka yg keubah hanya elemen pertama

//document.querySelectorAll()
    const p = document.querySelectorAll('p'); //mengambil nodelist
    //sama aja dengan
    //const p = document.getElementsByTagName('p');
    //tetapi tag name akan berupa html collection
    for(let i=0; i<p.length; i++){
        p[i].style.backgroundColor = 'lightblue';
    }

//mengubah root node: mempersempit jangkauan
//const sectionB = document.getElementById('b');
//const p4 = SelectionB.querySelector('p');
//atau
//const sectionB = document.querySelector('section#b');
//const p4 = SelectionB.getElementsByTagName('p')[0];