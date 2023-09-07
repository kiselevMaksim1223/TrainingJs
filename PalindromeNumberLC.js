
const isPalindrome = function (x) {

    // return x.toString().split('').reverse().join('') == x

    const xStr = x.toString()

    let left = 0
    let rigth = xStr.length -1
    
    while (left < rigth) {
        const leftValue = xStr[left]
        const rigthValue = xStr[rigth]

        if (leftValue !== rigthValue) return false

        left++
        rigth--
    }
    return true

};

const x = 11211
console.log(isPalindrome(x));
