//Calcul de la somme des chiffres d'un nombre

function sommeDesChiffres(nombre){
    return nombre.toString().split('').reduce((somme, chiffre) => somme + parseInt(chiffre, 10), 0);
}
console.log(sommeDesChiffres(123))

// 1 - reduce est une méthode qui permet de réduire un tableau en une seule valeur 
// 2 - Elle prend 2 arguments -> 
//          Une fonction de rappel (callback) qui est appelée pour chaque élément du tableau. (somme : va stocker la valeur totale au fur et à mesure que reduce parcourt le tableau.)
//          L'élément actuel du tableau. (chiffre: représentant un chiffre (par exemple, '1', '2', etc.)).

// 3 - parseInt(chiffre, 10) : Convertit la chaîne de caractères en un nombre entier. Par exemple, '5' devient 5.

// 4 - C'est la valeur initiale de l'accumulateur (somme). Ici, on commence à additionner à partir de 0.



