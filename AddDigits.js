const addDigits = function (num) {
    let resNum = num.toString()
    while (resNum.length > 1) {
        resNum = resNum.split('').reduce((acc, cur) => Number(acc) + Number(cur)).toString()
    }
    return resNum
};