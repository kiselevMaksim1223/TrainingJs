const searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid = Math.floor((left + right) / 2);
  let ins = 0;

  while (left <= right) {
    if (target < nums[mid]) {
      right = mid - 1;
      ins = mid;
    }
    if (target > nums[mid]) {
      left = mid + 1;
      ins = mid + 1;
    }
    if (target === nums[mid]) return mid;
    mid = Math.floor((left + right) / 2);
  }
  if (target === nums[mid]) {
    return mid;
  } else return ins;
};
