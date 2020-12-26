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
    
  };






 // Do not write or modify code below this line.
module.exports = _;