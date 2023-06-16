// const sortBy = function (arr, fn) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             let temp
//             if (arr[j+1] && fn(arr[j]) > fn(arr[j+1])) {
//                 temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//     }
//     return arr
// };
const merge = (arr1, arr2) => {
    const sortArr = []
    let i = j = 0
    while(i < arr1.length && j < arr2.length) {
        let fn1 = fn(arr1[i])
        let fn2 = fn(arr2[j])
        sortArr.push((fn1 < fn2) ? arr1[i++] : arr2[j++]) 
    }
    return [...sortArr, ...arr1.slice(i), ...arr2.slice(j)]
}

const sortBy = function (arr, fn) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length/2)
    const leftArr = arr.slice(0, mid)
    const rigthArr = arr.slice(mid)
    return merge(sortBy(leftArr, fn), sortBy(rigthArr, fn))
};


// const arr = [5, 4, 1, 2, 3]
// const fn = (x) => x

const arr = [[3, 4], [5, 2], [10, 1]]
const fn = (x) => x[1]

// const arr = [{"x": 1}, {"x": 0}, {"x": -1}]
// const fn = (d) => d.x

console.log(sortBy(arr, fn));
