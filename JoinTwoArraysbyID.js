// const join = function (arr1, arr2) {
    // const resArr = []
    // let i = 0
    // let j = 0

    // while (i < arr1.length || j < arr2.length) {
    //     if (arr1[i]) {
    //         if (resArr.some(el => el.id === arr1[i].id)) {
    //             const ind = resArr.findIndex(el => el.id === arr1[i].id)
    //             resArr[ind] = {...resArr[ind], ...arr1[i]}
    //         } else resArr.push(arr1[i])

    //     }
    //     if (arr2[j]) {
    //         if (resArr.some((el) => el.id === arr2[j].id)) {
    //             const ind = resArr.findIndex(el => el.id === arr2[j].id)
    //             resArr[ind] = { ...resArr[ind], ...arr2[j] }

    //         } else resArr.push(arr2[j])
    //         console.log(resArr);

    //         // console.log(resArr);
    //         i++
    //         j++
    //     }
    // }

    // return resArr.sort((a, b) => a.id - b.id)
    
    // const resArr = []
    // let i = 0
    // let j = 0
  
    // while (i < arr1.length && j < arr2.length) {
    //     if (arr1[i]) {
            // if (resArr.some(el => el.id === arr1[i].id)) {
            //      const ind = resArr.findIndex(el => el.id === arr1[i].id)
            //     resArr[ind] = {...arr1[i], ...resArr[ind]}
            // } else resArr.push(arr1[i])
        //     const ind = resArr.findIndex(el => el.id === arr1[i].id)
        //     if(ind > -1){
        //         resArr[ind] = {...arr1[i], ...resArr[ind]}
        //     } else resArr.push(arr1[i])
        // }
        // if (arr2[j]) {
            // if (resArr.some((el) => el.id === arr2[j].id)) {
            //     const ind = resArr.findIndex(el => el.id === arr2[j].id)
            //     resArr[ind] = { ...resArr[ind], ...arr2[j] }
            // } else resArr.push(arr2[j])
//             const ind = resArr.findIndex(el => el.id === arr2[j].id)
//             if(ind > -1){
//                 resArr[ind] = { ...resArr[ind], ...arr2[j] }
//             } else resArr.push(arr2[j])
//         }
//         i++
//         j++
//     }
//     return resArr
    
// };


const join = function (arr1, arr2) {
    const resArr = [];

    let i = 0;
    let j = 0;

    arr1.sort((a, b) => a.id - b.id);
    arr2.sort((a, b) => a.id - b.id);

    while (i < arr1.length && j < arr2.length) {
        if(arr1[i].id < arr2[j].id) {
            resArr.push(arr1[i])
            i++
        } else if (arr1[i].id > arr2[j].id) {
            resArr.push(arr2[j])
            j++
        } else {
            resArr.push({...arr1[i], ...arr2[j]})
            i++
            j++
        }
    }

    if (i < arr1.length) {
        while (i < arr1.length) {
            resArr.push(arr1[i])
            i++
        }
    }

    if (j < arr2.length) {
        while (j < arr2.length) {
            resArr.push(arr2[j])
            j++
        }
    }
    
    return resArr
};

// const arr1 = [
//     { "id": 1, "x": 1 },
//     { "id": 2, "x": 9 }
// ]
// const arr2 = [
//     { "id": 3, "x": 5 }
// ]

// const arr1 = [{"id": 1,"x": 2,"y": 3},{"id": 2,"x": 3,"y": 6}]
// const arr2 = [{"id": 2,"x": 10,"y": 20},{"id": 3,"x": 0,"y": 0}]

const arr1 = [{ "id": 2, "z": 37, "m": 1, "g": 33 }, { "id": 3, "n": 20, "i": 24 }]
const arr2 = [{ "id": 1, "p": 85, "v": 50 }, { "id": 2, "o": 13, "j": 62 }]

// const resArr1 = [{"id":2,"z":37,"m":1,"g":33}, {"id":1,"p":85,"v":50}, {"id":3,"n":20,"i":24}]

console.log(join(arr1, arr2));