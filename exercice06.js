//Filtrer les Nombres Pairs

function filterEvenNumbers(array){
    return array.filter(num => num % 2 === 0);
}
console.log(filterEvenNumbers([2,4,7,9,37,42,12,99]))