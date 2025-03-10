//Compter les Occurrences d'un Élément
 function countOccurrences(liste,element){
    if (!Array.isArray(liste) || liste.length === 0) {
        throw new Error("L'argument doit être une liste non vide.");
    }

    let count = 0;
    for (let i = 0; i < liste.length; i++) {
        if (liste[i] === element) {
            count++;
        }
    }
    return count
 }

 console.log(countOccurrences([1, 2, 3, 2, 4, 2, 5], 2))