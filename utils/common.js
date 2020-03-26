const tool = {
  /**
 * Add/delete the element in the array
 * @param  {[array]} #The array
 * @param  {[value]} #Delete already exists in the array, otherwise add
 * @return {[void]} #The new array
 */
  toggleValueOfArray: (array, value) => {
    if (!Array.isArray(array)) return;
    let index = typeof value !== 'object'
      ? array.indexOf(value)
      : array.map((val) => {
        return val.toString()
      }).indexOf(value.toString());
    index > -1 && array.splice(index, 1)
    index === -1 && array.push(value)
    return array
  },
  arrayDeleteEmpty: (array) => {
    let _arr = []
    array.map(v => {
      if (v !== '' || v !== undefined) _arr.push(v)
    })
    return _arr
  }
}


export default tool