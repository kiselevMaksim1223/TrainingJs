const countBits = function(n) {
    const res = [0]
    let count = 0
    if (n === 0) return [0]

    for (let i = 1; i <= n; i++){
        if (count !== 0) count = 0
        let temp = i.toString(2)
        for (let j = 0; j < temp.length; j++) {
            count += Number(temp[j])
        }
        res.push(count)
    }
    return res
};

console.log(countBits(6));
