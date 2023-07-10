/*
    var x = 10;
    console.log('Hello World!');
    console.log('isi dari variabel x adalah ' + x);
*/

/*
    alert('hello world');

    prompt('masukkan nama:');
    var nama = prompt('masukkan nama:');

    alert(nama);

    confirm('kamu yakin??');
    var tes = confirm('kamu yakin??');
    if(tes === true){ //apabila tombol OK ditekan
        alert('user menekan OK!');
    }else{ //apabila tombol cancel ditekan
        alert('user menekan CANCEL!');
    }

    alert('selamat datang..');
    var lagi = true;
    while (lagi === true){
        var nama = prompt('masukkan nama');
        alert('halo' + nama);
        lagi=confirm('coba lagi?');
    }
    alert('terima kasih..');

    alert('Mulai');
    for(var i = 0; i<5; i++){
        alert('Hello World!');
    }
    alert('selesai');

    var angka = prompt('masukkan angka :');
    if(angka % 2 === 0){
        alert(angka + ' adalah bilangan genap');
    }else{
        alert(angka + ' adalah bilangan ganjil');
    }

    var angka = prompt('masukkan banyak angka :');
    var i = 0;
    while (i<angka) {
        console.log('Hello World! ' + (i+1) +'x');
        i++;
    }

    var ulang=true;
    while (ulang) {
        console.log('hello world');
        ulang=confirm('lagi?');
    }

*/

/*
    var s = '';
    var baris, kolom;
    for(baris=0; baris<10; baris++){
        for(kolom=0; kolom<baris; kolom++){
            s+='*'//bisa juga s = s + '*';
        }
        s += '\n';  //garis baru
    }
    console.log(s);
*/

/*
    contoh bintang

    var s = '';
    var i, j;
    for(i=0; i<10; i++){
        for(j=10; j>i; j--){
            s=s+' ';
        }
        for(j=0; j<i; j++){
            s=s+'*';
        }
        for(j=0; j<i; j++){
            s=s+'*';
        }
        s += '\n';
    }
    for(i=0; i<10; i++){
        for(j=0; j<i; j++){
            s=s+' ';
        }
        for(j=10; j>i; j--){
            s=s+'*';
        }
        for(j=10; j>i; j--){
            s=s+'*';
        }
        s += '\n';
    }
    console.log(s);


    contoh segitiga pascal

    var s = '';
    var pola = 5;

    function faktorial(n){
        var a = 1;
        var i = 1;
        while (i <= n) {
            a = a * i;
            i++;
        }
        return a;
    }
    for(var i = 0; i<pola; i++){
        for(var j=pola; j>=i; j--){
            s = s + ' ';
        }
        for(var j = 0; j<=i; j++){
            s = s + faktorial(i)/(faktorial(j)*faktorial(i-j)) + ' ';
        }
        s = s + '\n';
    }
    console.log(s);
*/

/*
game suwit

var tanya = true;
while (tanya) {

    //menangkap pilihan player
    var p = prompt('pilih : gajah, semut, orang');

    //menangkap pilihan komputer
    var comp = Math.random();
    //membangkitkan bilangan random
    if(comp<0.34){
        comp='gajah';
    }else if(comp>=0.34 && comp<0.67){
        comp='orang';
    }else{
        comp='semut';
    }

    var hasil = '';
    //menentukan rules
    if(p==comp){
        hasil='SERI!';
    }else if(p=='gajah'){
        if(comp=='orang'){
            hasil='MENANG!';
        }else{
            hasil='KALAH!';
        }
        //bisa juga ditulis
        // hasil = (comp=='orang') ? 'MENANG!' : 'KALAH!';
    }else if(p='orang'){
        if(comp=='gajah'){
            hasil='KALAH!';
        }else{
            hasil='MENANG!'
        }
    }else if(p='semut'){
        hasil = (comp=='gajah') ? 'KALAH!' : 'MENANG!';
    }else{
        hasil='Memasukkan pilihan yang salah!'
    }

    //tampilkan hasilnya
    alert('Kamu memilih : ' + p + ' dan komputer memilih : ' + comp + '\nMaka hasilnya : ' + hasil);

    tanya=confirm('lagi?');
}
alert('terimakasih sudah bermain!');    
*/


/*
//menghitung luas segitiga
function rumussegitiga(a, t){
    var hasil=0.5*(a*t);
    return hasil;
}
var alas=prompt('Masukkan Panjang Alas:');
var tinggi=prompt('Masukkan Panjang Tinggi:');
alert('luas segitiganya adalah alas: ' + alas + ' x tinggi: ' + tinggi + ' = ' + rumussegitiga(alas, tinggi));
*/

