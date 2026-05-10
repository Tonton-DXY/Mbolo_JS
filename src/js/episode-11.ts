// Episode 11 : Afficher la table de multiplication jusqu'à 10 
{
const saisie: string = prompt("Entrer un nombre :") ?? "0";
const nombre: number = parseInt(saisie);

// Nous allons construire tout les resultats dans une seule variable texte
let table: string = `Table de multiplication de ${nombre} :\n\n` ;

// Nous allons utilisé la boucle for pour répéter les instructions de i = 1 jusqu'à i = 10
for (let i: number = 1; i <= 10; i++) {
    const resultat: number = nombre * i;
    table += `${nombre} * ${i} = ${resultat}\n` ;
}

alert(table) ;

}