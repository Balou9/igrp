var igrp = require('./index.js')
var names = ['Mikey', 'Allday', 'Mikey','Everyday', '419', 'Allday', '419']

igrp(names, 'Everyday', true, function (err, data) {
  console.log('Value:', data)
})

igrp(names, 'Everyday', undefined, function (err, data) {
  console.log('Index', data)
})

igrp(names, '419', true, function (err, data) {
  console.log('Value', data)
})

igrp(names, '419', undefined, function (err, data) {
  console.log('Index', data)
})
