const canConstruct = function (ransomNote, magazine) {
  // for (let i = 0; i < magazine.length; i++) {
  // ransomNote = ransomNote.replace(magazine[i], '')
  // }
  // if (!ransomNote) return true
  // return false
  // };

  const map = {};

  for (letter of magazine) {
    map[letter] = map[letter] + 1 || 1;
  }

  for (letter of ransomNote) {
    if (map[letter] === 0 || !map[letter]) return false;
    map[letter]--;
  }

  return true;
};
