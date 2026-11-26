let geboortejaar = prompt("In welk jaar ben je geboren?");
let leeftijd = 2026 - geboortejaar;

document.getElementById("tekst").innerHTML = "Je bent ongeveer " + leeftijd + " jaar oud.";

console.log(leeftijd);
