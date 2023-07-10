//tombol ubah warna background
const tombol = document.querySelector('button');
const body = document.body;
tombol.addEventListener('click', function(){
    // document.body.style.backgroundColor = 'lightgreen';
    body.classList.toggle('ubahbackground');
});

//tombol ubah warna background random
const tacakwarna = document.createElement('button');
const tekstombol = document.createTextNode('acak warna background');
tacakwarna.appendChild(tekstombol);
tacakwarna.setAttribute('type', 'button');
tombol.after(tacakwarna);
tacakwarna.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 + 1); //gaakan lebih dari 255 dan kurang dari 1. dan math round adalah fungsi pembulatan
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb(' + r +',' + g + ',' + b +')';
});

//slider warna
const smerah = document.querySelector('input[name=smerah]');
const shijau = document.querySelector('input[name=shijau]');
const sbiru = document.querySelector('input[name=sbiru]');
smerah.addEventListener('change', function(){
    const r = smerah.value;
    document.body.style.backgroundColor = 'rgb('+ r +',100,100)';
});
shijau.addEventListener('change', function(){
    const g = shijau.value;
    document.body.style.backgroundColor = 'rgb(100,'+ g +',100)';
});
sbiru.addEventListener('change', function(){
    const b = sbiru.value;
    document.body.style.backgroundColor = 'rgb(100,100,'+ b +')';
});

//ubah warna seiring pergerakan mouse
document.body.addEventListener('mousemove', function(event){
    //posisi mouse: event.clientX
    //ukuran browser: window.innerWidth
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +',100)';
});