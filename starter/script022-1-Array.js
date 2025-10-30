/*****************************
 * 022 - Les tableaux indicés (Arrays)
 */

// 1. Initialiser un nouveau tableau
// EXERCICE 1 : Créez un tableau appelé "semaine" qui contient les noms des jours de la semaine
const semaine=['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];


// 2. Accéder à un élément du tableau
// EXERCICE 2 : Affichez le premier jour de la semaine et le dernier jour de la semaine en utilisant les indices du tableau
console.log(semaine[0]);
console.log(semaine[6]);

// 3. Nombre d'éléments dans un tableau
// EXERCICE 3 : Affichez le nombre de jours dans une semaine et le dernier jour de la semaine
console.log(semaine.length);
console.log(semaine[semaine.length-1]);

// 4. Modifier les données d'un tableau
// EXERCICE 4 : Modifiez "samedi" en "saturday", réaffichez le tableau, stockez "dimanche" dans une variable jourFerie, affichez le contenu de la variable, ajoutez un nouveau jour, "dimanche2", à la fin de la semaine, puis réaffichez le tableau des jours de la semaine.
semaine[5]='saturday';

for (let i=0; i<semaine.length; i++){
    console.log(semaine[i]); /*affiche seulement la valeur*/
}

console.table(semaine); /*affiche l'indice et sa valeur*/

//Ajouter un élément dans le tableau
semaine[semaine.length]='dimanche2'; /*Permet de pousser un élément dans le tableau*/
semaine.push('Dimanche3'); /*permet de pousser un élément à la fin du tableau*/
/*unshift permet de pousser un élément au début du tableau*/

// 5. Un tableau peut contenir des données de différents types
// 6. Méthodes associées à un tableau
// EXERCICE 5 : Suivez les consignes pour manipuler le tableau de fruits
