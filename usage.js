var igrp = require('./index.js')
var names = ['Mikey', 'Allday', 'Mikey','Everyday', '419', 'Allday', '419']

function testIgrp (arr) {
  return {
    'defaultIgrp1': igrp(arr, 'Everyday'),
    'defaultIgrp2': igrp(arr, '419'),
    'valueIgrp1': igrp(arr, 'Everyday', true),
    'valueIgrp2': igrp(arr, '419', true)
  }
}

console.log(testIgrp(names))
// console.log(igrp(names, 'Everyday'))
