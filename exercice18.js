// Vérifier si un mot est un palindrome

function isPalindrome(mot) {
    let motInverse = mot.split('').reverse().join('');
    return mot === motInverse; // Comparaison stricte, sensible à la casse
}


console.log(isPalindrome('kayak'))