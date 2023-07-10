function readmore(){
    const dots = document.getElementById("dots");
    const moretext = document.getElementById('more');
    const btn = document.getElementById('btn');

    if(dots.style.display === "none"){
        dots.style.display = "inline";
        btn.innerHTML = "Read more";
        moretext.style.display = 'none';
    }else{
        dots.style.display = 'none';
        btn.innerHTML = "Read less";
        moretext.style.display = 'inline';
    }
}