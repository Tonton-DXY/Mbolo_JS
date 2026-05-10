// Episode 13 : Redamder jusqu'à trouver la bonne réponse
{
const nombre1: number = 5;
const nombre2: number = 1;
const bonneReponse: number = nombre1 + nombre2;

let saisie: string;
let reponse: number;

// On introduit la boucle do...while au lieu de while tout cour,pour qu'il exécute d'abord le bloc puis verifie la condition
// puis continue tan que la condition est vraie
do {
    saisie = prompt(`Combien font ${nombre1} + ${nombre2} ?`) ?? "";
    reponse = parseInt(saisie); 
}   while (reponse !== bonneReponse);

alert("Bravo ! Vous avez trouver la bonne réponse.")

}