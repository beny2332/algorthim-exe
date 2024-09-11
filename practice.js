// 1.
function filterAndSortEvenNumbers(arr){
    return arr.filter(num => num % 2 === 0).sort()
}

// 2.
function removeDublicates(arr){
    const result = []
    for (num of arr) {
        if (!result.includes(num)) {
            result.push(num)
        }
    }
    return result;
}

// 3.
function capitalizeFirstLetter(str){
    arr = str.split(' ')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].charAt(arr[i].length - 1) !== '.') {
            arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
        }
    }
    return arr.join(' ')
}

// 4.
 

