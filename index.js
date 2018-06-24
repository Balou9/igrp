function igraber (arr, pattern, value) {
  var result = []
    for (var i = 0; i < arr.length; i++) {
      if (pattern === arr[i] && value === true) {
        result.push(arr[i])
      }

      if (pattern === arr[i] && value !== true) {
        result.push(i)
      }
    }
  return result
}

function igrp (arr, pattern, value, callback) {
  if (!arr) throw new TypeError('First argument should be array.')
  callback(null, igraber(arr, pattern, value))
}

module.exports = igrp
