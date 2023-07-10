//Manipulasi Node

//document.createElement()
//document.createTextNode()
//node.appenChild()
//node.insertBefore()
//parentNode.removeChild()
//parentNode.replaceChild()
//...

//membuat paragraf baru dibawah paragraf 3
    const pBaru = document.createElement('p'); //bikin elemen baru p
    const teksPBaru = document.createTextNode('Paragraf Baru'); //bikin isi dari elemen
    pBaru.appendChild(teksPBaru);//simpan isi elemen tadi ke dalam p

    //simpan pBaru di akhir Section A
    const sectionA = document.getElementById('a');
    sectionA.appendChild(pBaru); //artinya simpan ke akhir elemen sectionA

//membuat li baru di bawah item 1 atas item 2
    const liBaru = document.createElement('li');
    const teksLiBaru = document.createTextNode('item baru');
    liBaru.appendChild(teksLiBaru);
    //untuk menyisipkan perlu 2 hal: parentnya dan elemen setelahnya
    const ul = document.querySelector('section#b ul'); //parent
    const li2 = document.querySelector('section#b ul li:nth-child(2)'); //elemen berikutnya
    ul.insertBefore(liBaru, li2); //masukan liBaru ke sebelum li2

//menghapus elemen
    //harus tau parent dan elemen yg akan dihapus
    const link = document.getElementsByTagName('a')[0];
    sectionA.removeChild(link);

//mengubah p paragraf4 menjadi h2
    const sectionB = document.getElementById('b');
    const p4 = sectionB.querySelector('p'); // p yg pertama kali ditemukan di sectionB
    const h2Baru = document.createElement('h2');
    const teksH2Baru = document.createTextNode('Judul Baru!');
    h2Baru.appendChild(teksH2Baru);
    sectionB.replaceChild(h2Baru, p4);


//penanda
pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';