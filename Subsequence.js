const isSubsequence = function (s, t) {
  let tPointer = 0;
  let sPointer = 0;

  if (s.length === 1) {
    return t.includes(s) ? true : false;
  }
  if (s === "") return true;

  while (tPointer < t.length) {
    if (t[tPointer] === s[sPointer]) {
      sPointer++;
    }
    tPointer++;
  }

  if (sPointer === s.length) return true;

  return false;
};
