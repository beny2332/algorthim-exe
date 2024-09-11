// 1.
function filterAndSortEvenNumbers(arr){
    return arr.filter(num => num % 2 === 0).sort((a, b) => a - b);
}

// 2.
function removeDublicates(arr){
    const result = []
    for (num of arr) {
        if (!result.includes(num)) {
            result.push(num);
        }
    }
    return result;
}

// 3.
//function capitalizeFirstLetter(str)

