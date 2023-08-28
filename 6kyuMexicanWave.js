function wave(str){
   const resArray = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') continue
        const intValue = str.slice(0, i) + str[i].toUpperCase() + str.slice(i+1)
        resArray.push(intValue)
   }
   return resArray
}

console.log(wave("two worlds"));