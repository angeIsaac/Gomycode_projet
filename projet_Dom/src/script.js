const qte_1 = document.getElementById('plus1');
const qte_2 = document.getElementById('plus2');
const qte_3 = document.getElementById('plus3');
const span1 = document.getElementById('span1');
const span2 = document.getElementById('span2');
const span3 = document.getElementById('span3');
const prix1 = document.getElementById('prix1');
const prix2 = document.getElementById('prix2');
const prix3 = document.getElementById('prix3');

var quantite1 = 1;
var prix_1 = 350;
var prix_2 = 400;
var prix_3 = 200;
function qteCount() {
    quantite1++;
    if(quantite1 > 1){
        prix_1 *= quantite1; 
        prix1.innerText = String( prix_1 + "€");
    }
    return span1.innerText = String(quantite1);
}

var quantite2 = 1;
function qteCount2() {
    quantite2++;
    if(quantite2 > 1){
        prix_2 *= quantite2; 
        prix2.innerText = String( prix_2 + "€");
    }
    return span2.innerText = String(quantite2);
}

var quantite3 = 1;
function qteCount3() {
    quantite3++;
    if(quantite3 > 1){
        prix_3 *= quantite3; 
        prix3.innerText = String( prix_3 + "€");
    }
    return span3.innerText = String(quantite3);
}
function moins1(){
    if(quantite1 > 1){
        prix_1 /= quantite1;
        quantite1--;
        prix1.innerText = String( prix_1 + "€");
        return span1.innerText = String(quantite1);
    }
    else{
        alert("La quantité minimale est 1");
    }
}
function moins2(){
    if(quantite2 > 1){
        prix_2 /= quantite2;
        quantite2--;
        prix2.innerText = String( prix_2 + "€");
        return span2.innerText = String(quantite2);
    }
    else{
        alert("La quantité minimale est 1");
    }
}
function moins3(){
    if(quantite3 > 1){
        prix_3 /= quantite3;
        quantite3--;
        prix3.innerText = String( prix_3 + "€");
        return span3.innerText = String(quantite3);
    }
    else{
        alert("La quantité minimale est 1");
    }
}


qte_2.addEventListener('click', qteCount2);
qte_1.addEventListener('click', qteCount);
qte_3.addEventListener('click', qteCount3);


