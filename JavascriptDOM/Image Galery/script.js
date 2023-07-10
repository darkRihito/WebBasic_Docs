const container = document.querySelector('.container');
const jumbo = document.querySelector('.container .jumbo').getAttribute('src');

const jumbogen = document.querySelector('.container .jumbo');

const thumbs = document.querySelectorAll('.thumb');


container.addEventListener('click', function(e){
    if( e.target.className == 'thumb'){
        const dipilih = e.target.getAttribute('src');
        e.target.parentElement.previousElementSibling.setAttribute('src', ''+dipilih);
        // bisa juga
        // jumbo.src = e.target.src
        jumbogen.classList.add('fade');
        //kasi timeout untuk fade
        setTimeout(function(){
            jumbogen.classList.remove('fade');
        }, 500)

        
        thumbs.forEach(function(thumb){
            // if(thumb.classList.contains('active')){
            //     thumb.classList.remove('active');
            // }
            thumb.className = 'thumb';
        });
        e.target.classList.add('active');
    }
});