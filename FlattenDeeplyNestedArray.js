const flat = function (arr, n) {
    if (n === 0) {
        return arr
    }

    while (n > 0) {
        const flattenArr = []
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                for (let j = 0; j < arr[i].length; j++) {
                    flattenArr.push(arr[i][j])                    
                }
            } else flattenArr.push(arr[i])
        }
        arr = flattenArr
        n--
    }
    return arr
};

const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
const n = 1
console.log(flat(arr, n));