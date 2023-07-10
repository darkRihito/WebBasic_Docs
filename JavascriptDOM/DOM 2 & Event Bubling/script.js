//menghapus satu kartu
/*
    const x = document.querySelector('.container .close'); //tombol x
    const container = document.querySelector('.container');
    const divcard = document.querySelector('.card');
    x.addEventListener('click', function(){
        container.removeChild(divcard);
    });
    //atau
    x.addEventListener('click', function(){
        divcard.style.display = 'none';
    });
*/

//apabila banyak kartu
/*
    //cara salah
    const close = document.querySelectorAll('.close');
    const card = document.querySelectorAll('.card');
    for(let i = 0; i<close.length; i++){
        close[i].addEventListener('click', function(){
            card[i].style.display = 'none';
        });
    }
*/



//DOM TRANSVERSAL
//dengan menelusuri parentnya (parentElement)
/*
const close = document.querySelectorAll('.close');
for(let i = 0; i<close.length; i++){
    close[i].addEventListener('click', function(e){
        // close[i].parentElement.style.display = 'none';
        e.target.parentElement.style.display = 'none';
        e.preventDefault(); //mengehntikan aksi default a karena span telah diganti jadi a,
        //default a, jika href kosong maka dia akan kembali ke halaman sebelumnya/melakukan refresh

        e.stopPropagation(); //mengehentikan event bubling
    });
    //function e adalah mengambil informasi yg berhubungan dengan apa yg sedang terjadi (click)
    //di const close yang di looping satu satu
}

    //cara lain
        // close.forEach(function(el){
        //     el.addEventListener('click', function(e){
        //         e.target.parentElement.style.display = 'none';
        //     })
        // });
    
    // teori
        // parentElement
        // parentNode
        // nextElementSibling -> menambil elemen
        // nextSibling -> mengambil node
        // previousSibling

*/



//EVENT BUBLING
//artinya semua event akan berjalan
/*
const cards = document.querySelectorAll('.card'); //ambil semua kartu
cards.forEach(function(card){ //loopig semua card
    card.addEventListener('click', function(e){ //satu card yang keklik
        //setiap card sudah ditanami event click
        alert('ok');
    });
});
*/






//Lebih Efektif
const container = document.querySelector('.container')
container.addEventListener('click', function(e){
    if( e.target.className == 'close'){
        e.target.parentElement.style.display='none';
        e.preventDefault(); //jaga jaga jika yg diklik adalah a / link
    }
});