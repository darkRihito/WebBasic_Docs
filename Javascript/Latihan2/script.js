function Angkot(sopir, trayek, penumpang, kas){
    this.sopir=sopir;
    this.trayek=trayek;
    this.penumpang=penumpang;
    this.kas=kas;

    this.penumpangNaik = function(namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }
    
    this.penumpangTurun = function(namaPenumpang, bayar) {
        if(this.penumpang.length === 0){
            alert('Angkot Masih kosong');
            return false;
        }else{
            for(var i=0; i<this.penumpang.length; i++){
                if(this.penumpang[i] == namaPenumpang){
                    this.penumpang[i] = undefined;
                    this.kas = this.kas + bayar;
                    return penumpang;
                }
            }
        }
    }
}

var angkot1 = new Angkot('Rafi Shidiq', ['Purwakarta', 'Wanayasa'], [], 0);
var angkot2 = new Angkot('Shiki', ['Bandung', 'jakarta'], [], 0);

/*
testcase


angkot1.penumpangNaik('Doddy');

angkot1.penumpangNaik('Erik');

angkot1.penumpangTurun('Erik', 2500);

angkot1.kas

angkot1.penumpangTurun('Doddy', 5500);

angkot2.kas
*/