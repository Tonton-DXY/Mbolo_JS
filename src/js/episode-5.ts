//  Episode 5: Dans cet épisode, il s'agit de demander un nombre et afficher son double en alerte
{
const saisie: string = prompt("Entrez un nombre :") ?? "0";
const nombre: number =parseFloat(saisie);

// Multiplier par 2 pour obtenir le double
const double: number = nombre * 2;

alert(`Le double de ${nombre} est : ${double}`);

}