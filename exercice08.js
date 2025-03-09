// Vérifier la parité d'un nombre

function verifierParite(nombre) {
    if (typeof nombre !== 'number' || isNaN(nombre)) {
        throw new Error("L'entrée doit être un nombre valide");
    }

    // Vérifie si le nombre est pair ou impair
    if (nombre % 2 === 0) {
        return 'pair';
    } else {
        return 'impair';
    }
}

console.log(verifierParite(6))