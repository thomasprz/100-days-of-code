//Manipulation de chaînes de caractères
function inverserMots(chaine) {
    return chaine.split(' ').reverse().join('');
}
console.log(inverserMots("Bonjour tout le monde")); // "monde le tout Bonjour"

//Explication :
    // split(' ') : Divise la chaîne en un tableau de mots en utilisant l'espace comme séparateur.
    // "Bonjour tout le monde" devient ["Bonjour", "tout", "le", "monde"].
    
    // reverse() : Inverse l'ordre des éléments du tableau.
    // ["Bonjour", "tout", "le", "monde"] devient ["monde", "le", "tout", "Bonjour"].

    // join(' ') : Rejoint les éléments du tableau en une seule chaîne, en insérant un espace entre chaque mot.
    // ["monde", "le", "tout", "Bonjour"] devient "monde le tout Bonjour".


//Note :
    // split('') sans espace -> divise la chaîne en un tableau où chaque élément est un caractère unique.
    //Par exemple, "Bonjour" devient ['B', 'o', 'n', 'j', 'o', 'u', 'r'].

    // join('') sans espace -> Pas de séparateur entre les éléments.
    // mondeletoutBonjour



