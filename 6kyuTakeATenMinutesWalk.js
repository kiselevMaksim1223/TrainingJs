function isValidWalk(walk) {
    //insert brilliant code here
    const coord = [0, 0]
    
    if(walk.length !== 10) return false
    
    for (let i = 0; i < walk.length; i++){
      if (walk[i] === 'n') coord[1]++
      if (walk[i] === 's') coord[1]--
      if (walk[i] === 'e') coord[0]++
      if (walk[i] === 'w') coord[0]--
    }
    
    return coord[0] === 0 && coord[1] === 0
  }


  const walk = ['n','s','n','s','n','s','n','s','n','s']
  const walk1 = ['w','e','w','e','w','e','w','e','w','e','w','e']
  const walk2 = ['w']
  const walk3 = ['n','n','n','s','n','s','n','s','n','s']
  console.log(isValidWalk(walk3));