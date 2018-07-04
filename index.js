function igraber (arr, pattern, value) {
  if (!value) {
    return arr.map( function (each, index) {
      if (each === pattern) return index
    }).filter( function (each) {
      if (each) return each
    })
  }
  if (value) {
    return arr.filter( function (each) {
      if (each === pattern)
      return each
    })
  }
}

function igrp (arr, pattern, value, callback) {
  if (Array.isArray(arr) !== true) throw new TypeError('1st argument should be array.')
  callback(null, igraber(arr, pattern, value))
}

module.exports = igrp
