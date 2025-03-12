// Trouver le Minimum et Maximum d'une Liste

function findMinMax(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new Error("L'argument doit être une liste non vide de nombres.");
    }
    return { min: Math.min(...numbers), max: Math.max(...numbers) };
}

console.log(findMinMax([3, 7, 2, 9, 5])); 

//Array.isArray(numbers) : Vérifie si numbers est un tableau. Si c'est un tableau, cela retourne true.
//!Array.isArray(numbers) : Si ce n'est pas un tableau, on lance une erreur."
//numbers.length === 0 : Si le tableau est vide, on lance une erreur.

