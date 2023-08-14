const isAnagram = (test, original) => {
  
    const sortTest = test.toLowerCase().split('').sort().join('');
    const sortOrig = original.toLowerCase().split('').sort().join('');
  
    return sortTest === sortOrig;
  }

  const test = "Bucketheadh"
  const origin = "DeathCubeK"
  console.log(isAnagram(test, origin));