function duplicateCount(text){
    const res = new Map
    let resCount = 0
    const lowerText = text.toLowerCase()

    for (let i = 0; i < lowerText.length; i++) {
      if (!res.has(lowerText[i])) {
        res.set(lowerText[i], 1)
      } else res.set(lowerText[i], res.get(lowerText[i])+1)
    }

    for (const value of res.values()) {
        if(value > 1) resCount++
    }
    return resCount
}

console.log(duplicateCount("AAaaabbccde"));