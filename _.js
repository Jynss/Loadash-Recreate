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

    //modified has method
    // doesn't take 'path' as a prameter, takes a key instrad anc check to see if it has a vlaue set
    has (object, key){
      let hasValue = object[key] != undefined
      return hasValue
    },

    invert(object) {
      let invertedObject = {}
      for (const key in object){
        let originalValue = object[key]
        invertedObject[originalValue] = key
      }
      return invertedObject
    },

    findKey(object, predicate) {
      for (const key in object){
        let value = object[key]
        let predicateReturnValue = predicate(value)
        if (predicateReturnValue){
          return key
        }
      }
      return undefined
    },

    drop(arr, n){
      if (typeof n === 'undefined'){
        n = 1
      }
  
      var droppedArray  = arr.slice(n)
      return droppedArray
    },

    dropWhile(array, predicate) {
      const cb = (element, index) => {
        return !predicate(element, index, array)
      }
      let dropNumber = array.findIndex(cb)
      let droppedArray = this.drop(array,dropNumber);
      return droppedArray
    },

    chunk(array, size) {
      if (typeof size === 'undefined'){
        size = 1
      }
      let arrayChunks = []
      for (i =0 ; i < array.length; i + size){
        let arrayChunk = array.slice(i, i+size)
        arrayChunk.push(arrayChunk)
      }
      return arrayChunks
    },
    

   
  
  };






module.exports = _;