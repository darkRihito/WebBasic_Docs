//Manipulasi Element


//innerHTML
    // const judul = document.getElementById('judul');
    // judul.innerHTML = '<em>Rafi Shidiq</em>';
    //atau
    // const sectionA = document.querySelector('section#a');
    // sectionA.innerHTML = 'hello world'; //karena menyeleksi semuanya, jadi hilang/terganti.


//style
    // const judul = document.querySelector('#judul');
    // judul.style.color = 'lightblue';
    // judul.style.backgroundColor = 'salmon';


//setAtribute
    // const judul = document.getElementsByClassName('h1')[0];
    // judul.setAttribute('name', 'rafi');
    //atau
    // const judul = document.getElementsByTagName('h1')[0];
    // const a = document.querySelector('section#a a');
    // a.setAttribute('id', 'link'); //tambahkan atribut pada a dengan nama id dan bernilai link
    // a.getAttribute('href'); //ambilkan atribut di a yang bernama href
    // a.removeAttribute('href'); //menghapus atribut href di a


//class
    // const p2 = document.querySelector('.p2');
    // p2.setAttribute('class', 'label'); //menimpa class yg ada sebelumnya
    //p2.classList.add('label'); //tambah class
    //p2.classList.remove('label'); //hapus class
    //p2.classList.toggle('label'); //apa p2 punya label? belum-tambahkan, sudah-hapus
    //document.body.classList.toggle('biru-muda'); // karena class biru muda terdapat di CSS
    //p2.classList.item(2); //melihat kelas ke 2 pada p2
    //p2.classList.contains('label'); //bertanya apakah ada kelas label di p2?
    //p2.classList.replace('label', 'oke'); //menganti kelas label jadi oke