/*****************************
* 029-2 - Boucles pour parcourir des tableaux
*/

// EXERCICE 1 :
// 1. Créez un tableau 'films' contenant les films "Forrest Gump", "Bohemian Rhapsody", "Le Seigneur des anneaux" et "Harry Potter".
const films = ["Forrest Gump", "Bohemian Rhapsody", "Le Seigneur des anneaux", "Harry Potter"];

// 2. Parcourez ce tableau pour afficher les films qu'il contient :

//    1°) avec une boucle for
console.log("Avec une boucle for :");
for(let i=0; i<films.length; i++){
    console.log(films[i]);
}

//    2°) avec une boucle while

console.log("Avec une boucle while :");
let i=0;
while(i<films.length){
    console.log(films[i]);
    i++;
}

//    3°) avec une boucle for of
console.log("Avec une boucle for of :");
for (const film of films) {
    console.log(film);
}

// EXERCICE 2 :
// - Stockez le tableau ['John', 'Smith', 1990, 'designer', false, 'blue'] dans une variable 'john'.
const john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

console.table(john);

// - Parcourez ce tableau pour afficher les informations qu'il contient :
//    1°) avec une boucle for
console.log("Avec une boucle for :");

for(let i=0; 0<john.length; i++){
    console.log(john[i]);
}

//    2°) avec une boucle while
console.log("Avec une boucle while :");

let i=0;
while (i<john.length){
    console.log(john[i]);
    i++;
}


//    3°) avec une boucle for of
for (const prop of john){
    console.log(prop);
}


// EXERCICE 3 :
// - Créez un tableau "nombres" contenant les 5 premiers entiers.
const nombres = [1, 2, 3, 4, 5];

// - Affichez "Voici mon tableau de nombres :" suivi du tableau.
for(let i=0; i<nombres.length; i++){
    console.log(nombres[i]);
}

// - Créez un tableau vide "carres" qui contiendra les carrés de vos nombres.
const carres = [];

for(let i=0; i<nombres.length; i++){
    carres.push(Math.pow(nombres[i],2));
}

// - Parcourez le tableau "nombres" avec une boucle forEach et ajoutez dans le tableau "carres" le carré de chaque nombre.

carres.forEach= ((item)=>{
    console.log(item);
});


// - Affichez "Voici mon tableau de nombres au carré :" suivi du tableau contenant les carrés.

