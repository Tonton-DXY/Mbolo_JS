// Episode 9 : Demander la moyenne d'un élève et donner sa mention 

const saisie: string = prompt("Entrer la moyenne de l'élève (0 à 20) :") ?? "0";
const moyenne: number = parseFloat(saisie);

// On utilise if/else if/else  pour tester plusieurs cas 
if (moyenne >= 16) {
    alert("Mention : Excellent") ;
} else if (moyenne >= 14) {
    alert("Mention : Très bien") ;
}else if (moyenne >= 12) {
    alert("Mention : Bien") ;
}else if (moyenne >= 11) {
    alert("Mention : Assez bien") ;
}else if (moyenne >= 10) {
    alert("Mention : passable") ;
}