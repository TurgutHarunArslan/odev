let dugme = document.getElementsByTagName("button");
let ekran = document.getElementsByClassName("ekran1")[0];
let hesapla =document.getElementById("hesapla");
let temiz = document.getElementById("temizle");

for(var i=0;i<dugme.length;i++){
    if(i!=12 && i!=14)
    dugme[i].addEventListener("click", yaz);
}

function yaz(){
ekran.value = ekran.value + this.value  
}

hesapla.addEventListener("click",hesap);

function hesap(){
ekran.value= eval(ekran.value);

}

temiz.addEventListener("click",temizle)

function temizle(){
ekran.value =" ";
}