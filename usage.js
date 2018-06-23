var igrp = require('./index.js')
var names = ['Mikey', 'Allday', 'Mikey','Everyday', '419', 'Allday', '419']


igrp(names, 'Everyday', undefined, function(err, data) {
  console.log(data)
})

igrp(names, 'Everyday', true, function(err, data) {
  console.log(data)
})
