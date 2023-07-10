//DOM Selection

// document.getElementById -> mengebalikan elemen
const judul = document.getElementById('judul'); //bisa melakukan apapun terhadap elemen ini karena sudah tertangkap
/*
    mengubah warna menggunakan css
    # judul {
        color :red;
    }
*/
judul.style.color = 'red'; //dengan javascript otomatis menambahkan inline CSS
judul.style.backgroundColor = 'grey';
judul.innerHTML = 'Rafi Shidiq';

//document.getElementsByTagName()
//mencari elemen elemen yang nama tagnya apa dan mengembalikan HTML Collection
const p = document.getElementsByTagName('p'); //menyeleksi semua p di document dan akan berupa Array
p[2].style.backgroundColor = 'lightblue';
//atau
for(let i=0; i<p.length; i++){
    p[i].style.backgroundColor = 'lightblue';
}
const h1 = document.getElementsByTagName('h1')[0]; //jika ingin mengambil 1 elemen
h1.style,fontsize = '50px';

//document.getElementsByClassName()
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'Ini diubah dari javascript';