const missingNumber = function (nums) {
    const set = new Set(nums)
    for (let j = 0; j <= nums.length; j++) {
        if (!set.has(j)) {
            return j
        }
    }
};