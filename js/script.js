let price = 0.21;

let userName = prompt("come ti chiami?");
let age = prompt("quanti anni hai?");
let kilo = prompt("quanti kilometri percorrerai?");

let totPrice = price * kilo;
totPrice = totPrice.toFixed(2);

// let totPrizeF = Math.round(totPrize);
// var totPrizeF = Math.round((totPrize + Number.EPSILON) * 200) / 100;

let discount20 = totPrice * 20 / 100;
let discount40 = totPrice * 40 / 100;

let price20 = (totPrice - discount20).toFixed(2);
let price40 = (totPrice - discount40).toFixed(2);


let element = document.getElementById("my-id");


if (kilo == 0) {
    element.innerHTML= `impossibile calcolare un prezzo`
} else if (age <= 17) {
    element.innerHTML= `Il prezzo del biglietto é ${price20} euro`
} else if (age >= 68) {
    element.innerHTML = `Il prezzo del biglietto é ${price40} euro`
} else {
    element.innerHTML = `Il prezzo del biglietto é ${totPrice} euro`
}














   


 
