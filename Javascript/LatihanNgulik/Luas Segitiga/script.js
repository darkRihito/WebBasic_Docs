function lSegitiga (){
    const alas = document.getElementById('alas').value;
    const tinggi = document.getElementById('tinggi').value;
    const monitor = document.getElementById('result');
    const hasil = (alas*tinggi)/2;
    monitor.value = hasil;
}

const tombol = document.getElementById('calculate');
tombol.addEventListener('click', lSegitiga);

// const disinput = document.querySelectorAll('input');