//Trouver le Plus Grand Nombre

function findMax(array) {
    if (array.length === 0) {
        throw new Error("Le tableau est vide");
    }
    return array.reduce((max, current) => current > max ? current : max, array[0]);
}

console.log(findMax([2,4,7,9,37,632,12,99]))