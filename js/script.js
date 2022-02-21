let prize = 0.21;

let userName = prompt("come ti chiami?");
let age = prompt("quanti anni hai?");
let kilo = prompt("quanti kilometri percorrerai?");

let totPrize = (prize * kilo).toFixed(1);

let discount20 = totPrize * 20 / 100;
let discount40 = totPrize * 40 / 100;

// let disk20 = discount20.toFixed(1); 
// let disk40 = discount20.toFixed(1); 
// let totPrizeFinal = discount20.toFixed(1); 



let element = document.getElementById("my-id");



if (age <= 17) {
    element.innerHTML= `Il prezzo del biglietto é ${totPrize - discount20} euro`
} else if (age >= 68) {
    element.innerHTML = `Il prezzo del biglietto é ${totPrize - discount40} euro`
} else {
    element.innerHTML = `Il prezzo del biglietto é ${totPrize} euro`
}






   


 
