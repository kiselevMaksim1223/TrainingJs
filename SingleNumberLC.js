const singleNumber = function(nums) {
    // const map = new Map()

    // for (let i = 0; i < nums.length; i++) {
    //     if (map.has(nums[i])) {
    //         map.set(nums[i], map.get(nums[i])+1)    
    //     } else map.set(nums[i], 1)
    // } 

    // for (let [key, value] of map) {
    //     if (value === 1) return key
    // }
    const set = new Set()
    for (let i =0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            set.delete(nums[i])
        } else set.add(nums[i])
    }
    return [...set][0]
};

console.log(singleNumber([4,1,2,1,2]));