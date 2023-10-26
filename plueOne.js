const plusOne = function (digits) {
    const length = digits.length - 1
    for (let i = length; i => 0; i--) {
        if (digits[i] !== 9) {
            digits[i] = digits[i] + 1
            return digits
        } else {
            digits[i] = 0
            if (i === 0) {
                digits[i] = 0
                digits.unshift(1)
                return digits
            }
        }
    }
};