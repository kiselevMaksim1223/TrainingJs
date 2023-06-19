const largestAltitude = function(gain) {
   const res = [0]
   for (let i = 0; i < gain.length; i++) {
    res.push(gain[i]+res[i])
   }
   return Math.max(...res)
};

const gain = [-5,1,5,0,-7] //[0,-5,-4,1,1,-6]. The highest is 1.

console.log(largestAltitude(gain));