/*
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23
*/

let userName = prompt("inserisci nome");
let userLastName = prompt("inserisci cognome");
let favouriteColor = prompt("qual è il tuo colore preferito?");

console.log(userName, userLastName, favouriteColor);


document.getElementById("message").innerHTML= "ciao " + userName + " " + userLastName + " il " + favouriteColor + " è un bel colore 23";

