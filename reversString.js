const reverseString = function(s) {
    const halflength = Math.floor(s.length/2)
    const lastEl = s.length-1
    for (let i = 0; i < halflength; i++) {
        let temp = s[i]
        s[i] = s[lastEl-i]
        s[lastEl-i] = temp
    }
};