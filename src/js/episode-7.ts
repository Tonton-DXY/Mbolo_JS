// Episode 7 : Demander l'age de l'utilisateur (majeur ou mineur selon l'age)
{
   
    const saisie: string = prompt("Quel est votre age ?")  ?? "0" ;

    // Pas dedécimales pour un age

    const age: number = parseInt(saisie);

    // Condition : supérieur ou égal à 18 ans
    // Vérifier que la saisie est un nombre
    if (age >= 18) {
        alert("Vous etes majeur.");
    } else {
        alert("Vous etes mineur.");
    }

    
     
    
}
