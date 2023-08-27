const rgb = (r, g, b) => {
    const isRelevant = (num) => {
        if (num < 0) return 0
        if (num > 255) return 255
        return num
    }
    
    let r16 = isRelevant(r).toString(16).toUpperCase()
    let g16 = isRelevant(g).toString(16).toUpperCase()
    let b16 = isRelevant(b).toString(16).toUpperCase()
    console.log(`${r16} ${g16} ${b16}`);

    if (r <= 15 && r16.length === 1) r16 = '0' + r16

    if (g <= 15 && g16.length === 1) g16 = '0' + g16

    if (b <= 15 && b16.length === 1) b16 = '0' + b16
    
    return `${r16}${g16}${b16}`
  }

  console.log(rgb(14,85, 255));