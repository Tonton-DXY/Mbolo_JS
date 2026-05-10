// Episode 3 Demander deux nombres et afficher leur somme
{
const saisie1: string = prompt("Entrez le premier nombre :") ?? "0" ;
const saisie2: string = prompt("Entrez le deuxième nombre :") ?? "0" ;

// parseFloat() convertit le texte en nombre décimal
const nombre1: number = parseFloat(saisie1) ;
const nombre2: number = parseFloat(saisie2) ;

const somme: number = nombre1 + nombre2;

alert(`La somme de ${nombre1} et $nombre2 est : ${somme}` ) ;

}