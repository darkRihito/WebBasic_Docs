var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang){ //nama dan masuk ke array mana
    //jika angkot kosong
    if(penumpang.length==0){
        penumpang.push(namaPenumpang);
        return penumpang;
    }else{
        for(var i=0; i<penumpang.length; i++){
            if(penumpang[i]==undefined){
                penumpang[i]=namaPenumpang;
                return penumpang;
            }else if(penumpang[i]=namaPenumpang){
                console.log(namaPenumpang + ' sudah ada di dalam angkot.');
                return penumpang;
            }else if(penumpang.length-1==i){
                penumpang.push(namaPenumpang);
            }
        }
    }
    
}
var hapusPenumpang = function(namaPenumpang, penumpang){
    if(penumpang.length==0){
        console.log('angkot masih kosong.');
    }else{
        for(var i=0; i<penumpang.length; i++){
            if(namaPenumpang==penumpang[i]){
                penumpang[i]=undefined;
            }else if(penumpang.length-1==i){
                console.log('tidak ada nama yang sesuai.');
            }
        }
    }
    return penumpang;
}