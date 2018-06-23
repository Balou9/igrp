//  control

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
  if (!arr) return callback(err)
  callback(null, igraber(arr, pattern, value))
}

module.exports = igrp
