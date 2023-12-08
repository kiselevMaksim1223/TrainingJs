const isPalindrome = function (s) {
  const formatedS = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let startInd = 0;
  let endInd = formatedS.length - 1;
  for (let i = 0; i < formatedS.length; i++) {
    if (formatedS[startInd] === formatedS[endInd]) {
      startInd++;
      endInd--;
    } else {
      return false;
    }
  }
  return true;
};
