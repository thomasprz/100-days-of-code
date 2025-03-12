//Vérifier la primalité d'un nombre

function estPremier(nombre) {
    for (var i = 2; i < nombre; i++) {
        if (nombre % i === 0) {
            return false; // Si on trouve un diviseur, ce n'est pas un nombre premier
        }
    }
    return nombre > 1; // Si aucun diviseur n'est trouvé, on vérifie que nombre > 1
}
console.log(estPremier(3))