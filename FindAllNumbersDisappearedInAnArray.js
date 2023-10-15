const findDisappearedNumbers = function (nums) {
    const res = []
    const set = new Set(nums)
    for (let i = 1; i <= nums.length; i++) {
        if (!set.has(i)) {
            res.push(i)
        }
    }
    return res
};