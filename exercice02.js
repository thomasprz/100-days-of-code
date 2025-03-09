//Manipulation de chaînes de caractères
function inverserMots(chaine) {
    return chaine.split(' ').reverse().join('');
}
console.log(inverserMots("Bonjour tout le monde"));