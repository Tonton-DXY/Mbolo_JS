// Episode 8 : Saluer selon le nom d'utilisateur & le sexe
{
 const nom: string = prompt("Quel est votre nom ?") ?? "";
 const sexe: string = prompt("Quel est votre sexe ? (M/F)") ?? "";

 //On compare la saisie en majiscule pour éviter les erreurs de casse
 if (sexe )  {
    alert(`Bonjour monsieur ${nom}`);
   }  else { 
    alert(`Bonjour madame ${nom}`);
   }

}
