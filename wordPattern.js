const wordPattern = function (pattern, s) {
  const sArr = s.split(" ");
  const map = {};
  const checkArr = [];

  if (pattern.length !== sArr.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    if (!map[pattern[i]]) {
      if (checkArr.includes(sArr[i])) return false;
      map[pattern[i]] = sArr[i];
      checkArr.push(sArr[i]);
    } else {
      if (map[pattern[i]] === sArr[i]) {
        continue;
      } else return false;
    }
  }

  return true;
};
