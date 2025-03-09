//Calculer la factorielle d'un nombre

function calculerFactorielle(nombre) {
    if (typeof nombre !== 'number' || !Number.isInteger(nombre) || nombre < 0) {
        throw new Error("L'entrée doit être un entier positif ou nul");
    }

    let resultat = 1; // Initialisation du résultat à 1
    for (let i = 1; i <= nombre; i++) {
        resultat *= i; // Multiplier le résultat par i
    }
    return resultat;
}
console.log(calculerFactorielle(9));