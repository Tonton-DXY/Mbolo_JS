// Episode 6: Ecrire un programme qui nous permet de calculer la moyenne de trois nombres
{

const saisie1: string = prompt("Entrez le 1er nombre :")  ?? "0";
const saisie2: string = prompt("Entrez le 2ème nombre :") ?? "0";
const saisie3: string = prompt("Entrez le 3ème nombre :") ?? "0";

const n1: number = parseFloat(saisie1);
const n2: number = parseFloat(saisie2); 
const n3: number = parseFloat(saisie3);

const moyenne: number = (n1 + n2 + n3) /3 ;

alert(` la moyenne est : ${moyenne.toFixed(2)}`);

}