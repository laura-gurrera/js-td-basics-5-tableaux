/*
TABLEAUX - PRÉPA 4 : Date valide - version 3
- Déclarez deux fonctions :
    - La première fonction 'isBissextile' retourne true ou false selon que l'année est bissextile ou pas.
    - La deuxième fonction 'isValid' retourne true ou false selon que la date est valide ou pas.
    Stockez cette fois le nombre maximum de jours autorisé par mois dans un tableau (utilisez 'isBissextile' pour gérer le cas du mois de février).
- Utilisez 'isValid' pour décider si votre date est valide avant d'afficher votre message dans la console.
*/

// Fonction pour vérifier si une année est bissextile
function isBissextile(annee) {
    // Code pour déterminer si 'annee' est bissextile
    if((!isNaN(annee)) && annee>0){
        return (!((annee%100===0 && !(annee%400===0)) || annee%4!==0));
    }
}

// Fonction pour vérifier si une date est valide
function isValid(jour, mois, annee) {
    // Code pour vérifier si la date (jour, mois, annee) est valide
    if (mois>0 && mois<=12){
    const maxDays=[31, isBissextile(annee)?29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        maxDays[mois-1];
        console.log(`Le ${jour}/${mois}/${annee} est une date valide`);
    }else{
        console.log(`Le ${jour}/${mois}/${annee} n'est pas une date valide`);
    }
    if(jour>0 && jour<maxDays[mois-1]) {
        console.log(`Le ${jour}/${mois}/${annee} est une date valide`);
    }else{
        console.log(`Le ${jour}/${mois}/${annee} n'est pas une date valide`);
    }
}

// Utilisez 'isValid' pour vérifier si une date est valide avant d'afficher un message dans la console
isValid(29,2,2019);

// Pas compris