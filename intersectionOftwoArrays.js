const intersection = function (nums1, nums2) {
  const set = new Set();

  for (let i = 0; i < nums2.length; i++) {
    for (let j = 0; j < nums1.length; j++) {
      if (nums2[i] === nums1[j]) {
        set.add(nums2[i]);
      }
    }
  }
  return Array.from(set);
};
