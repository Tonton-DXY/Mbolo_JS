// Episode 4 : Nous allons permuter les valeurs de deux variables
{
// Nous allons déclaré les variables dans un bloc d'où l'utilidation de "let"
let a: number = 10;
let b: number = 25;

console.log('Avant permutation a =${a}, b=${b}');

// ON a bsoin d'une valeur temporaire pour ne pas perdre une valeur  d'ou l'utilidation de  "temp"

// Sans temp : si on fait a = b,on perd la valeur originale de a
let temp: number = a;
a = b;
b = temp;

console.log('Après permutation a = ${a}, b= ${b}') ;

}