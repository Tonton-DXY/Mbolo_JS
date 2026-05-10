// Episode 10 : Aplliquer une remise de 10% sur une facture de plus de 40.000F
{
const saisie: string = prompt("Entrer le montant de la facture (en F) :") ?? "0" ;
const montant: number = parseFloat(saisie) ;

let totalAPayer: number;

// Si le montant à payer est > 40.000F, appliquer une remise de 10%

if (montant > 40.000) {
   const remise: number = montant * 0.10 ;
   totalAPayer = montant - remise ;
   alert(`Remise de 10% appliquée (-${remise}) F) \nTotal à payer : ${totalAPayer} F`) ;
}else {
    totalAPayer = montant;
    alert(` Aucune remise. Total à payer : ${totalAPayer} F`);
}

}