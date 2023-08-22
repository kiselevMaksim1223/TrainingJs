const sumOfIntegers = (arr) => {
    return arr.reduce((acc, cur) => acc + cur, 0)
  }
  
  function findEvenIndex(arr){
    //Code goes here!
    for (let i = 0; i < arr.length; i++){
      let leftSide = arr.slice(0, i)
      let rightSide = arr.slice(i+1)
      
      const sumLeft = sumOfIntegers(leftSide)
      const sumRight = sumOfIntegers(rightSide)
      
      if (sumLeft === sumRight) {
        return i
      }
    }
    return -1
  }