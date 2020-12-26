const _ = {
    clamp (number, lower, upper){
      let lowerClampedValue = Math.max(number, lower)
      let clampedValue = Math.min(lowerClampedValue, upper)
      return clampedValue   
    },

    inRange (number, start, end){
        if (typeof end === 'undefined'){
          end = start
          start = 0
        }
    
        if (start > end){
          let temp =end
          end = start
          start = temp
        }
    
        var isInRange =  start <= number && number < end
        return isInRange
      },

    //modified words method, only separates based on blank spaces.
    //only one parameter
    words(string) {
      let words = string.split(' ')
      return words
    },

    //modified pad method
    // only 2 parameters
    pad (string, length) {
      if (length <= string.length){
        return string
      }
  
      let startPaddingLength = Math.floor(Math.abs(string.length - length) / 2 )
  
      let endPaddingLength = (length - string.length) - startPaddingLength
  
      let paddedString = ' '.repeat(startPaddingLength) + string +  ' '.repeat(endPaddingLength)
  
      return paddedString
    },
  
  };






 // Do not write or modify code below this line.
module.exports = _;