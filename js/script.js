let prize = 0.21;

let userName = prompt("come ti chiami?");
let age = prompt("quanti anni hai?");
let kilo = prompt("quanti kilometri percorrerai?");

let totPrize = prize * kilo;

let totPrizeF = Math.round(totPrize);

let discount20 = totPrizeF * 20 / 100;
let discount40 = totPrizeF * 40 / 100;




let element = document.getElementById("my-id");






if (age <= 17) {
    element.innerHTML= `Il prezzo del biglietto é ${totPrizeF - discount20} euro`
} else if (age >= 68) {
    element.innerHTML = `Il prezzo del biglietto é ${totPrizeF - discount40} euro`
} else {
    element.innerHTML = `Il prezzo del biglietto é ${totPrizeF} euro`
}





   


 
