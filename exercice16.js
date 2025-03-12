//Trier une liste de nombres

function trierListe(liste) {
    return [...liste].sort((a, b) => a - b);
}

console.log(trierListe([12, 4, 6, 9, 13])); // [4, 6, 9, 12, 13]